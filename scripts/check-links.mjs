import * as fs from "fs";
import * as path from "path";

function getAllHtmlFiles(dir, list = []) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      getAllHtmlFiles(p, list);
    } else if (f.endsWith(".html")) {
      list.push(p);
    }
  }
  return list;
}

const htmlFiles = getAllHtmlFiles("dist").filter(f => !f.includes("googledc4b4af5da379a08.html"));
console.log("Total HTML pages to crawl:", htmlFiles.length);

// 1. Build route and anchor index
// Map route -> Set of HTML element IDs on that page
const routeAnchors = new Map();
const allRoutes = new Set();

function fileToRoute(f) {
  let r = f.replace(/^dist/, "").replace(/index\.html$/, "");
  if (!r.startsWith("/")) r = "/" + r;
  return r;
}

htmlFiles.forEach(f => {
  const r = fileToRoute(f);
  allRoutes.add(r);
  const html = fs.readFileSync(f, "utf-8");
  const idRegex = /\sid=["']([^"']+)["']/gi;
  const ids = new Set();
  let m;
  while ((m = idRegex.exec(html)) !== null) {
    ids.add(m[1]);
  }
  routeAnchors.set(r, ids);
});

// 2. Crawl and test all internal links
let brokenLinks = [];
let crossLocaleLeaks = [];
let orphanPages = [];
let missingAnchors = [];
let duplicateAnchorsOnPage = [];
let lowContextualLinkPages = [];

// Determine locale of a route
function getLocale(r) {
  const m = r.match(/^\/([a-z]{2})\//);
  if (m && ["es", "fr", "de", "pt", "hi", "id"].includes(m[1])) return m[1];
  return "en";
}

const inboundCount = new Map();
allRoutes.forEach(r => inboundCount.set(r, 0));

htmlFiles.forEach(f => {
  const sourceRoute = fileToRoute(f);
  const sourceLocale = getLocale(sourceRoute);
  const html = fs.readFileSync(f, "utf-8");

  // Inbound counting & link extraction
  const aRegex = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  const targetsSeen = new Set();
  const targetToAnchors = new Map();

  while ((m = aRegex.exec(html)) !== null) {
    let rawHref = m[1].trim();
    const anchorText = m[2].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

    if (rawHref.startsWith("https://mylocationlab.com")) {
      rawHref = rawHref.replace("https://mylocationlab.com", "");
    }

    // Ignore mailto, tel, external http
    if (rawHref.startsWith("http://") || rawHref.startsWith("https://") || rawHref.startsWith("mailto:") || rawHref.startsWith("tel:")) {
      continue;
    }

    // Split target path and hash
    let [targetPath, hash] = rawHref.split("#");
    if (!targetPath && hash) {
      targetPath = sourceRoute;
    } else {
      if (targetPath && !targetPath.startsWith("/")) {
        targetPath = "/" + targetPath;
      }
      if (targetPath && !targetPath.endsWith("/") && !targetPath.endsWith(".html")) {
        targetPath = targetPath + "/";
      }
    }

    if (targetPath) {
      targetsSeen.add(targetPath);

      // Check if target page exists
      const targetFilePath = targetPath.startsWith("/") ? targetPath.slice(1) : targetPath;
      const fileExistsInDist = fs.existsSync(path.join("dist", targetFilePath)) || fs.existsSync(path.join("dist", targetFilePath, "index.html"));
      const isXml = targetPath.endsWith(".xml") || targetPath.endsWith(".xml/");
      const cleanXml = targetPath.replace(/\/$/, "");
      const xmlExists = fs.existsSync(path.join("dist", cleanXml.startsWith("/") ? cleanXml.slice(1) : cleanXml));
      if (!allRoutes.has(targetPath) && targetPath !== "/404.html" && !fileExistsInDist && !(isXml && xmlExists)) {
        if (!rawHref.includes("/404/")) brokenLinks.push({ source: sourceRoute, target: rawHref, reason: "Route does not exist in build output" });
      } else {
        // Check hash anchor existence if specified
        if (hash) {
          const ids = routeAnchors.get(targetPath);
          if (ids && !ids.has(hash)) {
            missingAnchors.push({ source: sourceRoute, target: rawHref, reason: `Anchor #${hash} not found on ${targetPath}` });
          }
        }

        // Cross-locale link leak check (exclude language selector switcher links)
        const targetLocale = getLocale(targetPath);
        const isLangSelector = m[0].includes("lang-dropdown-item");
        if (!isLangSelector && targetLocale !== sourceLocale && !sourceRoute.includes("404")) {
          crossLocaleLeaks.push({ source: sourceRoute, target: rawHref, sourceLocale, targetLocale });
        }

        // Check duplicate anchor text to the same target on this page
        if (!targetToAnchors.has(targetPath)) {
          targetToAnchors.set(targetPath, []);
        }
        targetToAnchors.get(targetPath).push(anchorText);
      }
    }
  }

  // Check contextual links inside <p> tags for guides, comparisons, tools, my-location
  // (Excluding nav, header, footer, cards)
  const isGuide = sourceRoute.includes("/guides/") && !sourceRoute.endsWith("/guides/");
  const isComparison = sourceRoute.includes("/comparisons/") && !sourceRoute.endsWith("/comparisons/");
  const isTool = sourceRoute.includes("/tools/") && !sourceRoute.endsWith("/tools/");
  const isMyLocation = sourceRoute.includes("/my-location/") && !sourceRoute.endsWith("/my-location/");

  let minExpected = 0;
  let pageType = "";
  if (isGuide) { minExpected = 4; pageType = "guide"; }
  else if (isComparison) { minExpected = 4; pageType = "comparison"; }
  else if (isTool) { minExpected = 3; pageType = "tool"; }
  else if (isMyLocation) { minExpected = 3; pageType = "my-location"; }

  if (minExpected > 0) {
    // Count <a> tags inside <p>...</p> tags
    const pRegex = /<p\b[^>]*>([\s\S]*?)<\/p>/gi;
    let pMatch;
    let pLinkCount = 0;
    while ((pMatch = pRegex.exec(html)) !== null) {
      const aInP = /<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi;
      let aMatch;
      while ((aMatch = aInP.exec(pMatch[1])) !== null) {
        let h = aMatch[1];
        if (!h.startsWith("http") && !h.startsWith("mailto") && !h.includes("lang-dropdown")) {
          pLinkCount++;
        }
      }
    }
    if (pLinkCount < minExpected) {
      lowContextualLinkPages.push({ route: sourceRoute, type: pageType, count: pLinkCount, expected: minExpected });
    }
  }

  targetsSeen.forEach(t => {
    if (inboundCount.has(t)) {
      inboundCount.set(t, inboundCount.get(t) + 1);
    }
  });

  // Check duplicate anchor text (>2 occurrences)
  targetToAnchors.forEach((anchors, tgt) => {
    const textCounts = new Map();
    anchors.forEach(txt => {
      if (txt) {
        textCounts.set(txt, (textCounts.get(txt) || 0) + 1);
      }
    });
    textCounts.forEach((count, txt) => {
      if (count > 2 && !["Copy", "Copied!", "Share"].includes(txt)) {
        duplicateAnchorsOnPage.push({ source: sourceRoute, target: tgt, anchor: txt, count });
      }
    });
  });
});

// Check orphan pages
inboundCount.forEach((count, r) => {
  if (count === 0 && !r.includes("404")) {
    orphanPages.push(r);
  }
});

console.log("=== CRAWL REPORT ===");
console.log("Broken links:", brokenLinks.length);
console.log("Cross-locale leaks:", crossLocaleLeaks.length);
console.log("Missing hash anchors:", missingAnchors.length);
console.log("Orphan pages:", orphanPages.length);
console.log("Pages below contextual link threshold:", lowContextualLinkPages.length);
console.log("Duplicate anchor instances (>2 times):", duplicateAnchorsOnPage.length);

if (brokenLinks.length > 0) {
  console.log("Sample broken links:", brokenLinks.slice(0, 5));
}
if (crossLocaleLeaks.length > 0) {
  console.log("Sample cross-locale leaks:", crossLocaleLeaks.slice(0, 5));
}
if (missingAnchors.length > 0) {
  console.log("Sample missing anchors:", missingAnchors.slice(0, 5));
}
