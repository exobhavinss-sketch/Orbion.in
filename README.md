# Orbion — AI Operating System for Modern Businesses

> Official Initial Website Architecture & Web Platform
> Target Domain: [https://orbion.in](https://orbion.in)

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
├── public/
│   ├── brand/
│   │   ├── svg/             # Official Orbion vector logos, marks, and app icons
│   │   ├── png/             # Multi-contrast PNG renders (dark, white, transparent)
│   │   └── favicons/        # Multi-resolution favicons (16px to 512px)
│   ├── favicon.svg          # Primary vector favicon
│   └── favicon.png          # Fallback raster favicon
├── src/
│   ├── app/
│   │   ├── globals.css      # Design tokens, custom scrollbars, subtle technical grids
│   │   ├── layout.tsx       # Root layout with Geist fonts, theme color, SEO metadata
│   │   └── page.tsx         # Architectural verification canvas
│   ├── components/          # Modular component library (Phase 2+)
│   ├── lib/
│   │   ├── constants.ts     # Centralized brand, founder, and company constants
│   │   └── utils.ts         # Class merging and layout utilities (clsx + twMerge)
│   └── types/
│       └── index.ts         # Core TypeScript schemas and data interfaces
├── tailwind.config.ts       # Tonal Pitch & Void design system configuration
├── tsconfig.json            # Strict TypeScript configuration with @/* path alias
├── next.config.mjs          # Production Next.js config with modern image formats
└── package.json             # Unified scripts and dependencies
```

---

## 4. Local Development & Deployment

### Run Locally
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### Production Build
```bash
npm run build
npm run start
```

### Deployment Targets
The project is fully pre-configured for zero-friction continuous deployment to:
* **Vercel**: Native Next.js App Router detection.
* **Netlify**: Auto-detects `@netlify/plugin-nextjs`.
* **Render / Docker**: Standard `npm run build` and `npm run start` commands.
