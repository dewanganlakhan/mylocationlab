# 🌍 MyLocationLab

> **High-performance, privacy-first geospatial utilities, geodetic calculators, and location intelligence suite.**

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE.svg?style=flat&logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9.4-199900.svg?style=flat&logo=leaflet)](https://leafletjs.com/)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-F38020.svg?style=flat&logo=cloudflare)](https://pages.cloudflare.com/)
[![GitHub Repository](https://img.shields.io/badge/GitHub-dewanganlakhan%2Fmylocationlab-181717.svg?style=flat&logo=github)](https://github.com/dewanganlakhan/mylocationlab)
[![i18n](https://img.shields.io/badge/Locales-7%20Languages-007ACC.svg?style=flat)](#-internationalization-i18n)
[![Zero Data Retention](https://img.shields.io/badge/Privacy-Zero%20Data%20Retention-success.svg?style=flat)](#-privacy--security-architecture)

**Live Production Site:** [mylocationlab.com](https://mylocationlab.com) • **Source Code:** [github.com/dewanganlakhan/mylocationlab](https://github.com/dewanganlakhan/mylocationlab)

---

## 📌 Overview

**MyLocationLab** is an open web platform engineered to provide instant, precise, and completely private geolocation tools. Built on modern web standards with **Astro**, **Leaflet**, and **Cloudflare Workers/Pages**, it eliminates the need for invasive tracking brokers, ad bloat, or native mobile app downloads.

All spatial transformations, coordinate conversions, and distance calculations execute strictly **client-side** in browser memory according to the **WGS 84 (EPSG:4326)** ellipsoidal datum. When address lookups are requested, calls route through an edge-cached, privacy-preserving Cloudflare Function proxy that rounds coordinates to shield raw user device positions.

---

## 💡 Why I Developed This Project

Most geolocation utilities across the web suffer from critical issues that undermine user trust and experience:

1. **Invasive Tracking & Monetized Location Histories:** Common coordinate lookups and IP checkers embed invasive ad scripts, third-party analytics pixels, and location brokers that collect, log, and resell users' physical movement histories.
2. **App Store Gatekeeping & Bloat:** Users are frequently coerced into downloading heavy native apps (100MB+) just to read their current GPS coordinates, scan an elevation level, or convert a coordinate format.
3. **Cluttered UI & Ad Overload:** Existing web tools are often overwhelmed with popups, banners, and layout shifts (CLS), making emergency location retrieval frustrating, slow, or nearly impossible on low-bandwidth mobile connections.
4. **Lack of Mathematical Rigor & Education:** Many converters treat coordinates as flat Cartesian grids, disregarding geodetic reference datums like WGS 84 or failing to explain *why* GPS differs from IP geolocation.

### The Mission
**MyLocationLab** was developed with a clear mandate: **build the world's cleanest, fastest, and most privacy-respecting geospatial utility suite on the open web.**

- **Zero installation:** Accessible on any modern browser across mobile, tablet, and desktop.
- **Zero data retention:** Never store, log, or sell a user's location.
- **Accessible worldwide:** Multi-lingual support across 7 languages, ensuring vital location tools are usable globally without language barriers.
- **Educational depth:** Comprehensive technical guides and mathematical breakdowns for students, GIS developers, emergency responders, travelers, and field technicians.

---

## ⚙️ How It Works (Technical Architecture & Flow)

The platform operates on a **client-first, zero-knowledge** architecture designed to keep sensitive physical coordinates inside the user's browser runtime:

```
┌────────────────────────────────────────────────────────────────────────┐
│                          USER BROWSER / DEVICE                         │
│                                                                        │
│  1. W3C Geolocation API   ───▶  Raw GPS Telemetry (Lat, Lng, Alt, Acc) │
│                                         │                              │
│                                         ▼                              │
│  2. Client Math Engine    ───▶  In-Memory Conversions (DD, DMS, UTM)   │
│                                 Haversine Geodesic Distance            │
│                                 QR Code Matrix Generation              │
│                                         │                              │
│                                         ▼                              │
│  3. Leaflet & Canvas      ───▶  Hardware-accelerated Map Display       │
└─────────────────────────────────────────┬──────────────────────────────┘
                                          │
                  Address Lookup Only     │ (Coordinate-Rounded / Masked)
                  ────────────────────▶   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                   CLOUDFLARE EDGE WORKER / FUNCTION                    │
│                                                                        │
│  4. Privacy Proxy (/api/geocode)                                       │
│     • Rounds coordinates to 4 decimals (~11m grid radius)              │
│     • Masks client IP from upstream services                           │
│     • Edge Cache (s-maxage=604800, 7 days worldwide)                   │
└─────────────────────────────────────────┬──────────────────────────────┘
                                          │
                  Edge Cache Miss Only    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                   OPENSTREETMAP / NOMINATIM CLUSTER                    │
│                                                                        │
│  5. Open Geodata Resolution (Reverse & Forward Geocoding)              │
└────────────────────────────────────────────────────────────────────────┘
```

### Detailed Execution Stages:

1. **Client-Side Hardware Telemetry:**
   When the user clicks "Find My Location" or visits a tool, the browser requests one-time permission via the standard W3C Geolocation API (`navigator.geolocation.getCurrentPosition`). The device's hardware GNSS receiver (GPS, GLONASS, Galileo, BeiDou) resolves latitude, longitude, elevation, and accuracy radius directly into local JavaScript variables.

2. **Zero-Latency In-Browser Calculations:**
   Transformations between **Decimal Degrees (DD)**, **Degrees Minutes Seconds (DMS)**, **Degrees Decimal Minutes (DDM)**, and **UTM projections** execute via pure JavaScript algorithms. Distance calculations apply the spherical Haversine formula based on the mean Earth radius ($R \approx 6,371\text{ km}$). Calculations never make server roundtrips.

3. **Privacy-Preserving Edge Reverse Geocoding (`/api/geocode`):**
   When resolving street names or postal addresses:
   - The browser sends coordinates to the project's Cloudflare Pages serverless function.
   - The edge function **rounds coordinates to 4 decimal places** (~11-meter precision). This prevents the upstream cartographic service from obtaining the exact pinpoint location of the user's home or office.
   - The edge proxy strips browser identifiers and caches the result for 7 days (`s-maxage=604800`), dramatically speeding up repeated lookups across identical neighborhood quadrants while respecting OpenStreetMap community infrastructure.

4. **Interactive Mapping via Leaflet:**
   Maps render asynchronously using Leaflet and OpenStreetMap raster tiles directly inside the DOM with pre-allocated container aspect ratios, guaranteeing zero layout shift (CLS: 0.00).

5. **Local QR Code Generation:**
   Location sharing QR codes are generated entirely client-side using JavaScript canvas drawing (`qrcode` library) and standard `geo:lat,lng` URIs or Google Maps universal URLs, ensuring no third-party tracking URLs are injected.

---

## ✨ Key Features & Tool Suite

### 🛠️ Core Geolocation Tools (`/tools/`)
- **GPS Coordinates Finder** (`/tools/gps-coordinates/`): Real-time WGS 84 latitude, longitude, and elevation lookup with live accuracy radius.
- **Latitude & Longitude Finder** (`/tools/latitude-longitude/`): Interactive Leaflet map picker with one-click coordinate copy.
- **Address Finder** (`/tools/address-finder/`): High-resolution physical address resolution for current position or selected coordinates.
- **Reverse Geocoder** (`/tools/reverse-geocoding/`): Instantly transform GPS decimal coordinates into verified postal and street addresses.
- **Geocoder** (`/tools/geocoding/`): Forward geocode search converting landmarks, cities, and addresses into precise spatial coordinates.
- **Distance Calculator** (`/tools/distance-calculator/`): Geodesic distance calculation between two worldwide coordinates using the Haversine formula (km, miles, nautical miles).
- **Coordinate Converter** (`/tools/coordinate-converter/`): Instant multi-format transformation across:
  - Decimal Degrees (DD)
  - Degrees, Minutes, Seconds (DMS)
  - Degrees Decimal Minutes (DDM)
  - Universal Transverse Mercator (UTM)
- **Elevation Finder** (`/tools/elevation-finder/`): Exact topographic elevation and altitude above sea level.
- **GPS Accuracy Checker** (`/tools/gps-accuracy/`): Live browser hardware signal diagnostic, horizontal dilution estimation, and tips to resolve GPS drift.
- **Location QR Code Generator** (`/tools/location-qr-code/`): Dynamic QR code generator formatting standard `geo:` URIs and Google Maps deep-links for seamless scanning.

### 📍 Granular Location Silos (Simplified URLs)
Dedicated, indexable, ultra-fast pages tailored to specific device attributes with clean, simplified root routes (with permanent 301 redirects from legacy `/my-location/*` URLs):
- `/location/` — Complete consolidated location dashboard
- `/ip/` — Public IP address and network ISP geolocation
- `/gps/` — Hardware GPS sensor telemetry
- `/latitude-longitude/` — Detailed latitude and longitude breakdown
- `/coordinates/` — Multi-format coordinate breakdown (DD, DMS, UTM)
- `/address/` — Resolved physical street address
- `/city/` — City and municipality boundaries
- `/state/` — State / province / administrative region
- `/country/` — Country-level sovereign boundaries and ISO codes

> **Note on URL Architecture:** All legacy `/my-location/*` URLs (including international variations such as `/es/my-location/*`) automatically 301 permanently redirect at the Cloudflare Edge to their simplified counterparts (`/location/`, `/gps/`, `/address/`, etc.).

### 🗺️ Interactive Maps & Location Sharing
- **Full-Screen Interactive Map** (`/maps/`): High-performance OpenStreetMap-powered Leaflet explorer with custom pins, coordinate readouts, and tile layer controls.
- **Share Location Utility** (`/share-location/`): Share position via SMS, WhatsApp, direct coordinates link, or scannable QR code without storing location state on any server.

### 📚 Technical Guides & Geospatial Comparisons
- **Technical Guides** (`/guides/`): Deep engineering and educational articles covering browser Geolocation API internals, UTM datums, GPS security, mock location testing, and IP accuracy limits.
- **Side-by-Side Comparisons** (`/comparisons/`): In-depth technical breakdowns:
  - *GPS vs. IP Location*
  - *Geocoding vs. Reverse Geocoding*
  - *Decimal Degrees vs. DMS*
- **Geospatial Glossary** (`/glossary/`): A–Z reference guide of spatial, geodetic, and GIS terminology.
- **Editorial Standards** (`/editorial-policy/`): Verified E-E-A-T accuracy standards, math formulations, and reference datums.

---

## 🌐 Internationalization (i18n)

Full localization and native translations across **7 major world languages**:

| Code | Language | Route Prefix |
| :---: | :--- | :--- |
| `en` | **English** | `/` (Default locale, prefix-free) |
| `es` | **Spanish** (*Español*) | `/es/` |
| `fr` | **French** (*Français*) | `/fr/` |
| `de` | **German** (*Deutsch*) | `/de/` |
| `pt` | **Portuguese** (*Português*) | `/pt/` |
| `hi` | **Hindi** (*हिन्दी*) | `/hi/` |
| `id` | **Indonesian** (*Bahasa Indonesia*) | `/id/` |

- **Zero-Redirect Routing**: Configured with static route generation and dynamic fallback rewrite.
- **SEO Ready**: Multilingual sitemap generation with bidirectional `xhtml:link rel="alternate" hreflang` mappings for every localized route.

---

## 🔒 Privacy & Security Architecture

1. **Zero Data Retention**: Coordinates and location requests are strictly processed inside the client browser session. No location telemetry, IP coordinates, or user profiles are stored in any database.
2. **Edge Privacy Proxy (`functions/api/geocode.js`)**:
   - Outgoing geocoding queries pass through Cloudflare Pages Functions.
   - Coordinates are automatically rounded to 4 decimal places before querying upstream providers, shielding precise pinpoint coordinates.
   - Long-term edge caching (`s-maxage=604800`) prevents upstream rate-limiting while protecting client IP origin.
3. **Open Standards**: Adheres to the **WGS 84** reference ellipsoid (EPSG:4326) and open datasets from OpenStreetMap under ODbL.

---

## ⚡ Performance & Core Web Vitals Standards

Engineered under strict Core Web Vitals and layout stability principles:
- **Zero CLS (Cumulative Layout Shift)**: Layouts reserve strict explicit heights and aspect ratios for maps, cards, and dynamic containers.
- **Fast INP & Minimal Main-Thread Blocking**: Lightweight vanilla scripts for coordinate conversion, debounced geocoding inputs, and deferred non-critical resources.
- **CSS Inlining & Static Generation (SSG)**: Fast TTFB via pre-rendered HTML on Cloudflare’s global edge CDN.

---

## 🏗️ Project Architecture

```text
MyLocation/
├── astro.config.mjs         # Astro configuration (SSG, i18n locales, sitemap, prefetch)
├── deploy.sh                # Production / preview Cloudflare Pages deployment script
├── package.json             # NPM dependencies, scripts, and Node engine requirements
├── tsconfig.json            # TypeScript configuration
├── functions/               # Cloudflare Pages Functions (Edge serverless runtime)
│   ├── _middleware.js       # Canonical hostname redirect (pages.dev -> mylocationlab.com)
│   └── api/
│       └── geocode.js       # Edge-cached reverse & forward geocoding privacy proxy
├── public/                  # Static assets (favicons, manifest, robots.txt, icons)
├── scripts/                 # Maintenance & build-time utilities
│   ├── check-links.mjs      # Internal link, anchor, orphan, and locale crawler
│   ├── generate-social-images.mjs # Automated OpenGraph image generator
│   └── zip-dist.mjs         # Production archive bundle generator
└── src/
    ├── components/          # Reusable Astro & UI components
    │   ├── comparisons/     # Comparison page templates
    │   ├── guides/          # Technical guide templates
    │   ├── my-location/     # Granular location attribute components
    │   └── tools/           # Specialized tool view components
    ├── data/                # Metadata, navigational silos, tool registries, FAQs
    ├── i18n/                # Translation dictionaries and localized route configurations
    ├── layouts/             # ContentLayout, ToolLayout, BaseLayout
    ├── pages/               # Multi-locale route tree (en, es, fr, de, pt, hi, id)
    ├── scripts/             # Client-side spatial math, Leaflet init, sharing, and geolocation
    └── styles/              # Global typography, color tokens, and layout CSS
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `>= 22.12.0`
- **npm**: `>= 10.x`

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/dewanganlakhan/mylocationlab.git
cd mylocationlab
npm install
```

### Local Development

Start the Astro local development server:

```bash
npm run dev
```

The application will be accessible at:
```text
http://localhost:4321
```

### Building for Production

Compile optimized static pages into the `./dist/` folder:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🧪 Quality Assurance & Scripts

| Command | Description |
| :--- | :--- |
| `npm run build` | Builds static HTML, bundles assets, and generates multi-locale sitemaps. |
| `npm run deploy` | Deploys `dist/` directly to Cloudflare Pages via Wrangler. |
| `npm run zip` | Packages production build into a compressed release artifact. |
| `npm run social` | Generates localized OpenGraph social preview cards across all tools. |
| `node scripts/check-links.mjs` | Audits 500+ generated routes for broken links, anchor mismatches, orphan pages, and cross-locale leaks. |

---

## ☁️ Deployment

The project is configured for seamless deployment to **Cloudflare Pages**.

### One-Command Deployment

Ensure you are authenticated with Cloudflare via Wrangler:

```bash
npx wrangler login
```

Deploy using the provided deployment script:

```bash
# Production deploy (main branch)
./deploy.sh

# Preview deploy to a feature branch
./deploy.sh --branch dev

# Dry-run (build only, no upload)
./deploy.sh --dry-run
```

---

## 📄 License & Attribution

- **Cartography & Geocoding**: Data by [OpenStreetMap](https://www.openstreetmap.org/copyright), licensed under the [Open Database License (ODbL)](https://opendatacommons.org/licenses/odbl/).
- **Project**: Proprietary & Confidential. All rights reserved by **MyLocationLab**.
