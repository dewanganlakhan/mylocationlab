/**
 * generate-social-images.mjs
 * ─────────────────────────────────────────────────────────────────────────────
 * Generates the complete social-media asset kit for MyLocationLab into
 * `social-media-kit/`, using the site's real brand system:
 *
 *   • Logo mark   — public/favicon.svg (blue rounded square + GPS target)
 *   • Colors      — --color-accent-primary #2563EB, secondary #4F46E5,
 *                   tertiary #0EA5E9, dark theme #060A13
 *   • Fonts       — Plus Jakarta Sans (display) + Inter (body)
 *
 * Run:  npm run social
 * Brand fonts are bundled in scripts/social-fonts/ (both are SIL OFL licensed).
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { execSync } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';

/* ── Brand constants (keep in sync with src/styles/global.css) ───────────── */
const BRAND = {
  domain: 'mylocationlab.com',
  name: 'MyLocation',
  nameAccent: 'Lab',
  blue: '#2563EB',
  indigo: '#4F46E5',
  sky: '#0EA5E9',
  blueLight: '#93C5FD',
  blueFaint: '#BFDBFE',
  dark: '#060A13',
  darkRaised: '#0B1424',
  ink: '#0F172A',
  slate: '#475569',
  mist: '#F8FAFC',
};

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'social-media-kit');
const FONT_DIR = join(ROOT, 'scripts', 'social-fonts');

/* ── Fontconfig setup (sharp's librsvg resolves fonts via fontconfig) ────── */
const confPath = join(tmpdir(), 'mylocation-social-fonts.conf');
await writeFile(
  confPath,
  `<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>${FONT_DIR}</dir>
  <cachedir>${join(tmpdir(), 'mylocation-social-fonts.cache')}</cachedir>
</fontconfig>`,
);
process.env.FONTCONFIG_FILE = confPath;
const { default: sharp } = await import('sharp');

/* ── Tiny SVG helpers ─────────────────────────────────────────────────────── */
const esc = (s) => s.replace(/&/g, '&amp;');

/** The favicon GPS-target mark, parameterised. scale = canvas / 32. */
function logoMark(x, y, size, { rx = 0.28, glow = true, bleed = false } = {}) {
  const k = size / 32;
  const corner = bleed ? 0 : 9 * k * (rx / 0.28);
  const id = `lg${Math.round(x)}${Math.round(y)}${Math.round(size)}`;
  return `
  <defs>
    <linearGradient id="${id}g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#3B82F6"/><stop offset=".55" stop-color="${BRAND.blue}"/><stop offset="1" stop-color="#1D4ED8"/>
    </linearGradient>
    ${glow ? `<radialGradient id="${id}hl" cx=".3" cy=".2" r="1"><stop offset="0" stop-color="#FFFFFF" stop-opacity=".28"/><stop offset=".5" stop-color="#FFFFFF" stop-opacity="0"/></radialGradient>` : ''}
  </defs>
  <g transform="translate(${x} ${y})">
    <rect width="${size}" height="${size}" rx="${corner}" fill="url(#${id}g)"/>
    ${glow ? `<rect width="${size}" height="${size}" rx="${corner}" fill="url(#${id}hl)"/>` : ''}
    <g transform="scale(${k})">
      <circle cx="16" cy="16" r="8" stroke="#BFDBFE" stroke-width="2" fill="none"/>
      <circle cx="16" cy="16" r="4" stroke="#FFFFFF" stroke-width="2" fill="none"/>
      <circle cx="16" cy="16" r="1.6" fill="#FFFFFF"/>
      <line x1="16" y1="4.5" x2="16" y2="7.5" stroke="#BFDBFE" stroke-width="1.6" stroke-linecap="round"/>
      <line x1="16" y1="24.5" x2="16" y2="27.5" stroke="#BFDBFE" stroke-width="1.6" stroke-linecap="round"/>
      <line x1="4.5" y1="16" x2="7.5" y2="16" stroke="#BFDBFE" stroke-width="1.6" stroke-linecap="round"/>
      <line x1="24.5" y1="16" x2="27.5" y2="16" stroke="#BFDBFE" stroke-width="1.6" stroke-linecap="round"/>
    </g>
  </g>`;
}

/** Wordmark: "MyLocation" + accented "Lab". Returns width estimate too. */
function wordmark(cx, baseline, fontSize, { dark = false, anchor = 'middle' } = {}) {
  const main = dark ? '#FFFFFF' : BRAND.ink;
  const accent = dark ? '#60A5FA' : BRAND.blue;
  const text = `<text x="${cx}" y="${baseline}" text-anchor="${anchor}" font-family="Plus Jakarta Sans" font-weight="800" font-size="${fontSize}" letter-spacing="-0.5"><tspan fill="${main}">${BRAND.name}</tspan><tspan fill="${accent}">${BRAND.nameAccent}</tspan></text>`;
  return text;
}
const wordmarkWidth = (fs) => fs * 0.56 * (BRAND.name.length + BRAND.nameAccent.length) * 0.92;

/** Concentric "radar" rings used as decorative motif. */
function rings(cx, cy, radii, color, opacity) {
  return radii
    .map((r, i) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="2" opacity="${(opacity * (1 - i * 0.22)).toFixed(3)}"/>`)
    .join('');
}

/** Dot grid covering the canvas. */
function dots(w, h, color, opacity, gap = 30) {
  const id = `dg${Math.round(w)}${gap}${color.replace('#', '')}`;
  return `<defs><pattern id="${id}" width="${gap}" height="${gap}" patternUnits="userSpaceOnUse"><circle cx="1.4" cy="1.4" r="1.4" fill="${color}" opacity="${opacity}"/></pattern></defs><rect width="${w}" height="${h}" fill="url(#${id})"/>`;
}

/** Dark navy backdrop: gradient + glow + dot grid + decorative rings. */
function darkBackdrop(w, h, ringAt = null) {
  const gid = `dbg${w}x${h}`;
  return `
  <defs>
    <linearGradient id="${gid}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0C1526"/><stop offset=".55" stop-color="${BRAND.dark}"/><stop offset="1" stop-color="#05070D"/>
    </linearGradient>
    <radialGradient id="${gid}glow" cx=".78" cy=".18" r=".9">
      <stop offset="0" stop-color="${BRAND.blue}" stop-opacity=".32"/><stop offset=".45" stop-color="${BRAND.indigo}" stop-opacity=".12"/><stop offset="1" stop-color="${BRAND.blue}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#${gid})"/>
  <rect width="${w}" height="${h}" fill="url(#${gid}glow)"/>
  ${dots(w, h, '#FFFFFF', 0.055)}
  ${ringAt ? rings(ringAt[0], ringAt[1], ringAt[2], BRAND.blue, ringAt[3] ?? 0.22) : ''}`;
}

/** Light backdrop matching the site's light theme. */
function lightBackdrop(w, h, ringAt = null) {
  const gid = `lbg${w}x${h}`;
  return `
  <defs>
    <linearGradient id="${gid}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#EAF1FE"/>
    </linearGradient>
    <radialGradient id="${gid}glow" cx=".82" cy=".12" r=".9">
      <stop offset="0" stop-color="${BRAND.blue}" stop-opacity=".12"/><stop offset="1" stop-color="${BRAND.blue}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#${gid})"/>
  <rect width="${w}" height="${h}" fill="url(#${gid}glow)"/>
  ${dots(w, h, BRAND.blue, 0.07)}
  ${ringAt ? rings(ringAt[0], ringAt[1], ringAt[2], BRAND.blue, ringAt[3] ?? 0.15) : ''}`;
}

/** Rounded pill with the domain, centred on cx. */
function pill(cx, cy, fontSize, { dark = false } = {}) {
  const label = BRAND.domain;
  const w = label.length * fontSize * 0.58 + fontSize * 1.9;
  const h = fontSize * 2.15;
  const stroke = dark ? 'rgba(147,197,253,.45)' : 'rgba(37,99,235,.4)';
  const bg = dark ? 'rgba(37,99,235,.16)' : 'rgba(37,99,235,.08)';
  const fg = dark ? BRAND.blueLight : BRAND.blue;
  return `
  <g>
    <rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="${h / 2}" fill="${bg}" stroke="${stroke}" stroke-width="1.5"/>
    <circle cx="${cx - w / 2 + h * 0.62}" cy="${cy}" r="${fontSize * 0.38}" fill="none" stroke="${fg}" stroke-width="${fontSize * 0.11}"/>
    <circle cx="${cx - w / 2 + h * 0.62}" cy="${cy}" r="${fontSize * 0.13}" fill="${fg}"/>
    <text x="${cx + fontSize * 0.45}" y="${cy + fontSize * 0.36}" text-anchor="middle" font-family="Inter" font-weight="600" font-size="${fontSize}" fill="${fg}">${label}</text>
  </g>`;
}

/** Small rounded chip with text (for stat badges / step rows). */
function chip(cx, cy, text, fontSize, { dark = false, anchor = 'middle', fixedW = null } = {}) {
  const w = fixedW ?? chipWidth(text, fontSize);
  const h = fontSize * 2.4;
  const bg = dark ? 'rgba(37,99,235,.18)' : '#FFFFFF';
  const stroke = dark ? 'rgba(147,197,253,.4)' : 'rgba(37,99,235,.28)';
  const fg = dark ? '#DBEAFE' : BRAND.ink;
  const x = anchor === 'middle' ? cx - w / 2 : cx;
  return `
  <g>
    <rect x="${x}" y="${cy - h / 2}" width="${w}" height="${h}" rx="${h / 2}" fill="${bg}" stroke="${stroke}" stroke-width="1.5"/>
    <text x="${x + w / 2}" y="${cy + fontSize * 0.36}" text-anchor="middle" font-family="Inter" font-weight="600" font-size="${fontSize}" fill="${fg}">${esc(text)}</text>
  </g>`;
}
const chipWidth = (text, fs) => text.length * fs * 0.56 + fs * 2.2;

/** A row of chips centred on cxCenter, spaced 40px apart. */
function chipsRow(cxCenter, cy, labels, fontSize, opts = {}) {
  const gap = 40;
  const total = labels.reduce((s, t) => s + chipWidth(t, fontSize), 0) + gap * (labels.length - 1);
  let x = cxCenter - total / 2;
  return labels
    .map((t) => {
      const svg = chip(x, cy, t, fontSize, { ...opts, anchor: 'start' });
      x += chipWidth(t, fontSize) + gap;
      return svg;
    })
    .join('');
}

const svgDoc = (w, h, body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${body}</svg>`;

/* ── Render queue ─────────────────────────────────────────────────────────── */
const renders = []; // { path, svg | from, resize? }

const addSvg = (relPath, w, h, body) => renders.push({ path: join(OUT, relPath), svg: svgDoc(w, h, body) });
const addResize = (relPath, fromRel, size) =>
  renders.push({ path: join(OUT, relPath), from: join(OUT, fromRel), resize: size });

/* 1 ─ Brand masters ------------------------------------------------------- */
addSvg(
  '_brand/logo-1024.png', 1024, 1024,
  logoMark(0, 0, 1024),
);
/** Full-bleed square avatar for circular-crop platforms (no corner radius). */
function fullbleedAvatar() {
  const s = 1024, c = s / 2, k = s / 32;
  const mark = (scale) => `
    <g transform="translate(${c} ${c}) scale(${scale}) translate(${-c} ${-c}) scale(${k})">
      <circle cx="16" cy="16" r="8" stroke="#BFDBFE" stroke-width="2" fill="none"/>
      <circle cx="16" cy="16" r="4" stroke="#FFFFFF" stroke-width="2" fill="none"/>
      <circle cx="16" cy="16" r="1.6" fill="#FFFFFF"/>
      <line x1="16" y1="4.5" x2="16" y2="7.5" stroke="#BFDBFE" stroke-width="1.6" stroke-linecap="round"/>
      <line x1="16" y1="24.5" x2="16" y2="27.5" stroke="#BFDBFE" stroke-width="1.6" stroke-linecap="round"/>
      <line x1="4.5" y1="16" x2="7.5" y2="16" stroke="#BFDBFE" stroke-width="1.6" stroke-linecap="round"/>
      <line x1="24.5" y1="16" x2="27.5" y2="16" stroke="#BFDBFE" stroke-width="1.6" stroke-linecap="round"/>
    </g>`;
  return `<defs>
    <radialGradient id="fbg" cx=".28" cy=".18" r="1.15">
      <stop offset="0" stop-color="#3B82F6"/><stop offset=".55" stop-color="${BRAND.blue}"/><stop offset="1" stop-color="#1E40AF"/>
    </radialGradient>
  </defs>
  <rect width="${s}" height="${s}" fill="url(#fbg)"/>
  ${rings(c, c, [300, 390], '#FFFFFF', 0.10)}
  ${mark(1.32)}`;
}
addSvg('_brand/avatar-fullbleed-1024.png', 1024, 1024, fullbleedAvatar());

/* 2 ─ X / Twitter --------------------------------------------------------- */
addSvg(
  'x-twitter/header-1500x500.png', 1500, 500,
  darkBackdrop(1500, 500, [1210, 250, [150, 235, 320], 0.16]) +
  logoMark(96, 168, 164) +
  wordmark(300, 246, 82, { dark: true, anchor: 'start' }) +
  `<text x="302" y="308" font-family="Inter" font-weight="400" font-size="29" fill="#94A3B8">GPS coordinates, address finder &amp; location tools — free, no sign-up.</text>` +
  pill(302 + (BRAND.domain.length * 24 * 0.58 + 24 * 1.9) / 2, 372, 24, { dark: true }),
);
addResize('x-twitter/avatar-400.png', '_brand/avatar-fullbleed-1024.png', 400);

/* 3 ─ Facebook ------------------------------------------------------------ */
/* Mobile crops the cover to a centred 640px-wide window → keep content inside
   x = 105..745 (canvas 851 wide). */
addSvg(
  'facebook/cover-851x315.png', 851, 315,
  darkBackdrop(851, 315, [760, 158, [90, 150, 210], 0.22]) +
  logoMark(115, 100, 115) +
  wordmark(265, 168, 56, { dark: true, anchor: 'start' }) +
  `<text x="267" y="216" font-family="Inter" font-weight="400" font-size="22" fill="#94A3B8">Free GPS coordinates &amp; location tools.</text>` +
  pill(267 + (BRAND.domain.length * 19 * 0.58 + 19 * 1.9) / 2, 256, 19, { dark: true }),
);
addResize('facebook/profile-720.png', '_brand/avatar-fullbleed-1024.png', 720);

/* 4 ─ Instagram ----------------------------------------------------------- */
addSvg(
  'instagram/post-1080x1080.png', 1080, 1080,
  lightBackdrop(1080, 1080, [540, 300, [190, 290], 0.14]) +
  logoMark(470, 130, 140, { rx: 0.24 }) +
  `<text x="540" y="470" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="84" letter-spacing="-2" fill="${BRAND.ink}">Know exactly</text>
   <text x="540" y="572" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="84" letter-spacing="-2" fill="${BRAND.ink}">where you are.</text>
   <text x="540" y="660" text-anchor="middle" font-family="Inter" font-weight="400" font-size="33" fill="${BRAND.slate}">Instant GPS coordinates, address lookup</text>
   <text x="540" y="710" text-anchor="middle" font-family="Inter" font-weight="400" font-size="33" fill="${BRAND.slate}">&amp; location tools — free, no sign-up.</text>` +
  pill(540, 810, 30) +
  `<text x="540" y="952" text-anchor="middle" font-family="Inter" font-weight="600" font-size="25" fill="#64748B">Free · No sign-up · Works on any device</text>`,
);
addSvg(
  'instagram/story-1080x1920.png', 1080, 1920,
  darkBackdrop(1080, 1920, [540, 960, [300, 430, 560], 0.16]) +
  `<text x="540" y="240" text-anchor="middle" font-family="Inter" font-weight="600" font-size="30" fill="${BRAND.blueLight}">${BRAND.domain}</text>` +
  logoMark(440, 350, 200, { rx: 0.24 }) +
  `<text x="540" y="880" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="96" letter-spacing="-2.5" fill="#FFFFFF">Find your</text>
   <text x="540" y="996" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="96" letter-spacing="-2.5" fill="#FFFFFF">current location</text>
   <text x="540" y="1112" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="96" letter-spacing="-2.5" fill="#60A5FA">in one tap</text>
   <text x="540" y="1210" text-anchor="middle" font-family="Inter" font-weight="400" font-size="34" fill="#94A3B8">Coordinates · Address · Share · Maps</text>` +
  pill(540, 1360, 34, { dark: true }) +
  `<g stroke="${BRAND.blueLight}" stroke-width="8" stroke-linecap="round" fill="none">
     <path d="M 505 1660 L 540 1695 L 575 1660" opacity=".9"/>
     <path d="M 505 1700 L 540 1735 L 575 1700" opacity=".55"/>
     <path d="M 505 1740 L 540 1775 L 575 1740" opacity=".28"/>
   </g>`,
);
addResize('instagram/profile-512.png', '_brand/avatar-fullbleed-1024.png', 512);

/* 5 ─ LinkedIn ------------------------------------------------------------ */
addSvg(
  'linkedin/cover-1584x396.png', 1584, 396,
  lightBackdrop(1584, 396, [1380, 198, [110, 180, 250], 0.18]) +
  logoMark(120, 128, 140, { rx: 0.24 }) +
  wordmark(310, 218, 68, { anchor: 'start' }) +
  `<text x="312" y="278" font-family="Inter" font-weight="400" font-size="28" fill="${BRAND.slate}">GPS coordinates, address finder &amp; location tools — free, no sign-up.</text>` +
  pill(312 + (BRAND.domain.length * 22 * 0.58 + 22 * 1.9) / 2, 322, 22),
);
addSvg(
  'linkedin/cover-1128x191.png', 1128, 191,
  lightBackdrop(1128, 191, [1020, 96, [70, 115, 160], 0.18]) +
  logoMark(56, 46, 100, { rx: 0.24 }) +
  wordmark(186, 108, 46, { anchor: 'start' }) +
  `<text x="188" y="150" font-family="Inter" font-weight="400" font-size="20" fill="${BRAND.slate}">Free GPS coordinates &amp; location tools</text>` +
  pill(1128 - 60 - (BRAND.domain.length * 17 * 0.58 + 17 * 1.9) / 2, 96, 17),
);
addResize('linkedin/logo-300.png', '_brand/logo-1024.png', 300);

/* 6 ─ YouTube ------------------------------------------------------------- */
/* Full 2560x1440 canvas; all content stays inside the 1546x423 TV safe area. */
{
  const cx = 1280;
  const safeTop = 508, safeBottom = 932;
  addSvg(
    'youtube/banner-2560x1440.png', 2560, 1440,
    darkBackdrop(2560, 1440) +
      rings(180, 220, [130, 210, 290], BRAND.blue, 0.20) +
      rings(2380, 1240, [130, 210, 290], BRAND.blue, 0.20) +
      logoMark(cx - 60, safeTop + 18, 120, { rx: 0.24 }) +
      wordmark(cx, 742, 74, { dark: true }) +
      `<text x="${cx}" y="800" text-anchor="middle" font-family="Inter" font-weight="400" font-size="29" fill="#94A3B8">GPS coordinates, address finder &amp; location tools — free, no sign-up.</text>` +
      pill(cx, 862, 24, { dark: true }),
  );
}
addResize('youtube/avatar-800.png', '_brand/avatar-fullbleed-1024.png', 800);

/* 7 ─ Pinterest ----------------------------------------------------------- */
{
  const cx = 500;
  let y = 700;
  const rows = [
    ['1', 'Open mylocationlab.com'],
    ['2', 'Allow location access'],
    ['3', 'Copy or share your coordinates'],
  ];
  const stepRows = rows
    .map(([n, t]) => {
      y += 120;
      return `
  <g>
    <rect x="90" y="${y - 46}" width="820" height="92" rx="46" fill="#FFFFFF" stroke="rgba(37,99,235,.25)" stroke-width="2"/>
    <circle cx="150" cy="${y}" r="30" fill="${BRAND.blue}"/>
    <text x="150" y="${y + 11}" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="32" fill="#FFFFFF">${n}</text>
    <text x="204" y="${y + 11}" font-family="Inter" font-weight="600" font-size="30" fill="${BRAND.ink}">${esc(t)}</text>
  </g>`;
    })
    .join('');
  addSvg(
    'pinterest/pin-1000x1500.png', 1000, 1500,
    lightBackdrop(1000, 1500, [880, 1300, [140, 220], 0.16]) +
      chip(cx, 150, 'FREE LOCATION GUIDE', 26) +
      `<text x="${cx}" y="330" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="92" letter-spacing="-2.5" fill="${BRAND.ink}">How to find</text>
       <text x="${cx}" y="440" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="92" letter-spacing="-2.5" fill="${BRAND.ink}">your exact</text>
       <text x="${cx}" y="550" text-anchor="middle" font-family="Plus Jakarta Sans" font-weight="800" font-size="92" letter-spacing="-2.5" fill="${BRAND.blue}">GPS coordinates</text>
       <text x="${cx}" y="632" text-anchor="middle" font-family="Inter" font-weight="400" font-size="31" fill="${BRAND.slate}">No app required — works in any browser.</text>` +
      stepRows +
      (() => {
        const logoSize = 90, gap = 30, wmSize = 44, baseline = 1245;
        const total = logoSize + gap + wordmarkWidth(wmSize);
        const x0 = cx - total / 2;
        return (
          logoMark(x0, 1180, logoSize, { rx: 0.24 }) +
          wordmark(x0 + logoSize + gap, baseline, wmSize, { anchor: 'start' })
        );
      })() +
      `<text x="${cx}" y="1350" text-anchor="middle" font-family="Inter" font-weight="600" font-size="28" fill="${BRAND.blue}">${BRAND.domain}</text>`,
  );
}
addResize('pinterest/avatar-512.png', '_brand/avatar-fullbleed-1024.png', 512);

/* 8 ─ TikTok / Reddit avatars --------------------------------------------- */
addResize('tiktok/avatar-512.png', '_brand/avatar-fullbleed-1024.png', 512);
addResize('reddit/avatar-256.png', '_brand/avatar-fullbleed-1024.png', 256);

/* 9 ─ Product Hunt -------------------------------------------------------- */
addSvg(
  'product-hunt/gallery-1270x760.png', 1270, 760,
  darkBackdrop(1270, 760, [1120, 620, [120, 190, 260], 0.22]) +
    logoMark(545, 96, 180, { rx: 0.24 }) +
    wordmark(635, 420, 80, { dark: true }) +
    `<text x="635" y="486" text-anchor="middle" font-family="Inter" font-weight="400" font-size="31" fill="#94A3B8">Find your current location instantly — coordinates,</text>
     <text x="635" y="530" text-anchor="middle" font-family="Inter" font-weight="400" font-size="31" fill="#94A3B8">address lookup, sharing &amp; maps in one free tool.</text>` +
    chipsRow(635, 610, ['100% Free', 'No sign-up', 'Works everywhere'], 26, { dark: true }),
);
addResize('product-hunt/logo-240.png', '_brand/logo-1024.png', 240);

/* 10 ─ Link preview / OG card (matches public/og-default.png size) ──────── */
addSvg(
  'link-preview/og-1200x630.png', 1200, 630,
  darkBackdrop(1200, 630, [1010, 315, [110, 180, 250], 0.26]) +
    logoMark(90, 175, 150) +
    wordmark(285, 260, 74, { dark: true, anchor: 'start' }) +
    `<text x="287" y="322" font-family="Inter" font-weight="400" font-size="27" fill="#94A3B8">Find your current location instantly.</text>
     <text x="287" y="366" font-family="Inter" font-weight="400" font-size="27" fill="#94A3B8">Free GPS coordinates, address finder</text>
     <text x="287" y="410" font-family="Inter" font-weight="400" font-size="27" fill="#94A3B8">&amp; location tools.</text>` +
    pill(287 + (BRAND.domain.length * 22 * 0.58 + 22 * 1.9) / 2, 480, 22, { dark: true }),
);

/* ── Run ─────────────────────────────────────────────────────────────────── */
await mkdir(OUT, { recursive: true });
for (const r of renders) {
  await mkdir(dirname(r.path), { recursive: true });
  if (r.svg) {
    await sharp(Buffer.from(r.svg), { density: 96 }).png({ compressionLevel: 9 }).toFile(r.path);
  } else {
    await sharp(r.from).resize(r.resize, r.resize).png({ compressionLevel: 9 }).toFile(r.path);
  }
  console.log('✓', r.path.replace(OUT + '/', ''));
}
console.log(`\nDone — ${renders.length} assets in ${OUT}`);
