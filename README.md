<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/brand/png/orbion-banner.png">
    <source media="(prefers-color-scheme: light)" srcset="public/brand/png/orbion-banner.png">
    <img src="public/brand/png/orbion-banner.png" alt="Orbion — AI Operating System for Modern Businesses" width="100%">
  </picture>
</p>

<p align="center">
  <a href="https://orbion.in">
    <img src="public/brand/png/orbion-logo-transparent.png" alt="Orbion Logo" height="44">
  </a>
</p>

<h3 align="center">The AI Operating System for Modern Businesses</h3>

<p align="center">
  <em>Autonomous Agentic Workflows • Real-Time Systems Orchestration • Deep-Tech Reliability</em>
</p>

<p align="center">
  <a href="https://orbion.in"><img src="https://img.shields.io/badge/Production-orbion.in-5B4FFF?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Site"></a>
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Framework-Next.js%2015-050508?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 15"></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/Language-TypeScript%205.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5.8"></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Styling-Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"></a>
  <a href="ARCHITECTURE.md"><img src="https://img.shields.io/badge/Architecture-Instrument--Grade-111111?style=for-the-badge" alt="Architecture"></a>
</p>

<p align="center">
  <a href="https://orbion.in">🌐 <b>Live Platform</b></a> &nbsp;•&nbsp;
  <a href="#1-project-philosophy--design-direction">📐 <b>Design System</b></a> &nbsp;•&nbsp;
  <a href="ARCHITECTURE.md">🏛️ <b>Architecture</b></a> &nbsp;•&nbsp;
  <a href="#6-brand-identity--assets">🎨 <b>Brand Assets</b></a> &nbsp;•&nbsp;
  <a href="#4-local-development--scripts">⚡ <b>Quickstart</b></a>
</p>

---

## 1. Project Philosophy & Design Direction
Orbion is an early-stage deep-tech startup building an **AI Operating System** designed to help businesses automate and operate their everyday workflows through autonomous, intelligent agentic systems.

### Core Design Rules
* **No Generic AI Tropes**: Avoided robot illustrations, AI brain graphics, neon glows, particle fields, floating glass cards, and fake statistics.
* **Black & White Dominance**: High-contrast architectural minimalism inspired by Apple, Tesla, Stripe, Linear, Vercel, and Anthropic.
* **Sovereign Accent**: Single focused brand accent (`#5B4FFF` Electric Indigo with subtle `#00E0D6` cyan indicators) restricted to < 7% of surface area.
* **Typographic Hierarchy**: `Geist Sans` for display and editorial hierarchy; `Geist Mono` for telemetry, status badges, and technical specs.

---

## 2. Technology Stack
* **Framework**: [Next.js](https://nextjs.org/) 15 (App Router, Server Components by default)
* **Language**: [TypeScript](https://www.typescriptlang.org/) 5.8
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.4 + CSS Variables + PostCSS
* **Icons & Assets**: Native SVG vectors from [`public/brand`](public/brand/) + `lucide-react`
* **Performance**: 100% static prerendering, zero runtime overhead.

---

## 3. Project Structure
```
├── .github/
│   └── workflows/
│       └── deploy.yml       # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── .nojekyll            # Prevents GitHub Pages from ignoring _next assets
│   ├── CNAME                # Custom domain pointer (orbion.in)
│   ├── brand/
│   │   ├── orbion-banner.png# Official 2400x920 High-DPI architectural repository banner
│   │   ├── orbion-banner.svg# Official vector banner with telemetry & orbital geometry
│   │   ├── svg/             # Official Orbion vector logos, marks, and app icons
│   │   ├── png/             # Multi-contrast PNG renders (dark, white, transparent)
│   │   └── favicons/        # Multi-resolution favicons (16px to 512px)
│   ├── favicon.svg          # Primary vector favicon
│   └── favicon.png          # Fallback raster favicon
├── src/
│   ├── app/
│   │   ├── company/         # /company route
│   │   ├── contact/         # /contact route
│   │   ├── founder/         # /founder route
│   │   ├── technology/      # /technology route
│   │   ├── globals.css      # Design tokens, custom scrollbars, subtle technical grids
│   │   ├── layout.tsx       # Root layout with Geist fonts, theme color, SEO metadata
│   │   ├── page.tsx         # Architectural verification canvas
│   │   ├── robots.ts        # Dynamic/static robots.txt generator
│   │   └── sitemap.ts       # Dynamic/static sitemap.xml generator
│   ├── components/          # Modular UI design system components
│   ├── data/                # Static company, founder, and navigation data
│   ├── layouts/             # Persistent site navigation and footer layouts
│   ├── lib/
│   │   ├── constants.ts     # Centralized brand, founder, and company constants
│   │   └── utils.ts         # Class merging and layout utilities (clsx + twMerge)
│   └── types/
│       └── index.ts         # Core TypeScript schemas and data interfaces
├── .env.example             # Safe placeholder template for environment variables
├── netlify.toml             # Netlify deployment and Next.js plugin configuration
├── tailwind.config.ts       # Tonal Pitch & Void design system configuration
├── tsconfig.json            # Strict TypeScript configuration with @/* path alias
├── next.config.mjs          # Multi-target Next.js config (Node runtime + static export)
└── package.json             # Unified scripts and dependencies
```

---

## 4. Local Development & Scripts

### Run Locally
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### Type Check & Lint
```bash
npm run typecheck
npm run lint
```

### Production Build (Node / SSR / ISR)
Used by Vercel, Netlify, and Render:
```bash
npm run build
npm run start
```

### Static Export Build (HTML / CSS / JS)
Used by GitHub Pages (generates static output in `./out`):
```bash
npm run build:export
```

---

## 5. Deployment Architecture

The website is engineered for multi-cloud deployment agility. The primary production target is **Vercel**, with full zero-friction compatibility across **Netlify**, **Render**, and **GitHub Pages**.

### A. Vercel (Primary Recommendation)
1. Import repository `exobhavinss-sketch/Orbion.in` into Vercel.
2. Vercel automatically detects Next.js:
   - **Framework Preset**: Next.js
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
3. Add Custom Domain:
   - In Vercel Project Settings > **Domains**, add `orbion.in` and `www.orbion.in`.
   - Point your DNS A record to `76.76.21.21` and CNAME for `www` to `cname.vercel-dns.com`.

### B. GitHub Pages (Static CI/CD)
1. In repository **Settings > Pages**:
   - Under **Build and deployment > Source**, select **GitHub Actions**.
2. Push to the `main` branch:
   - The `.github/workflows/deploy.yml` workflow automatically runs `npm run build:export`.
   - It verifies `out/index.html`, `out/.nojekyll`, and `out/CNAME`.
   - The deployment artifact `./out` is uploaded and served by GitHub Pages.
3. Custom Domain:
   - `public/CNAME` automatically configures `orbion.in`.
   - In GitHub Pages settings, verify `orbion.in` and enable **Enforce HTTPS**.
   - Configure DNS A records to: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.

### C. Netlify (Secondary Target)
1. Import repository in Netlify dashboard.
2. The included `netlify.toml` automatically configures:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `.next`
   - **Plugin**: `@netlify/plugin-nextjs`
3. Add Custom Domain `orbion.in` in Netlify Domain Management.

### D. Render (Web Service)
1. Create a new **Web Service** on Render connected to `Orbion.in`.
2. Configure settings:
   - **Runtime**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
   - **Environment Variables**: `NODE_ENV=production`, `PORT=10000`
3. Add Custom Domain in Render dashboard.

---

## 6. Brand Identity & Visual Assets

All official vectors, logos, and high-resolution assets are organized under [`public/brand/`](public/brand/):

| Asset | Format | File Path | Usage & Description |
| :--- | :--- | :--- | :--- |
| **Repository Banner** | PNG (2400×920) | [`public/brand/png/orbion-banner.png`](public/brand/png/orbion-banner.png) | High-DPI banner with telemetry & orbital geometry |
| **Vector Banner** | SVG | [`public/brand/svg/orbion-banner.svg`](public/brand/svg/orbion-banner.svg) | Scalable architectural vector banner |
| **Horizontal Logo** | SVG | [`public/brand/svg/orbion-logo-horizontal.svg`](public/brand/svg/orbion-logo-horizontal.svg) | Signature Electric Indigo mark & typography |
| **Stacked Logo** | SVG | [`public/brand/svg/orbion-logo-stacked.svg`](public/brand/svg/orbion-logo-stacked.svg) | Centered vertical lockup for square profiles |
| **Orbital Symbol** | SVG | [`public/brand/svg/orbion-symbol.svg`](public/brand/svg/orbion-symbol.svg) | Sovereign icon (`#5B4FFF` ring with `#00E0D6` node) |
| **Dark Lockup** | PNG | [`public/brand/png/orbion-logo-dark.png`](public/brand/png/orbion-logo-dark.png) | High-contrast white typography on pitch black |
| **Mono White** | PNG | [`public/brand/png/orbion-logo-mono-white.png`](public/brand/png/orbion-logo-mono-white.png) | Monochrome white glyphs for dark overlays |
| **Transparent Logo** | PNG | [`public/brand/png/orbion-logo-transparent.png`](public/brand/png/orbion-logo-transparent.png) | 3600×887 transparent PNG render |
| **App Icons & Favicons**| PNG / SVG | [`public/brand/favicons/`](public/brand/favicons/) | Multi-scale favicons from 16px to 512px |

### Sovereign Brand Palette
* **Electric Indigo** (`#5B4FFF`): Primary focal point & active state trigger (< 7% surface area).
* **Pitch Void** (`#000000` / `#050505`): High-contrast architectural base canvas.
* **Cyan Telemetry** (`#00E0D6`): Real-time status indicators and satellite telemetry dot.
* **Monochrome Scale**: `#FFFFFF` (Pure Headlines), `#EDEDED` (Primary Text), `#A1A1AA` (Secondary), `#1C1C1E` (Hairline Border).

