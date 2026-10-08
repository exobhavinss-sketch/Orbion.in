import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Extract the glyph paths for "orbion"
const horizontalSvg = fs.readFileSync('public/brand/svg/orbion-logo-horizontal.svg', 'utf8');

// Match the wordmark paths
const glyphsMatch = horizontalSvg.match(/<g transform="scale\(1,-1\)" fill="#5B4FFF">([\s\S]*?)<\/g><\/g>/);
if (!glyphsMatch) {
  console.error('Could not find glyphs');
  process.exit(1);
}
const rawGlyphs = glyphsMatch[1].trim();

// Orbion symbol vector definition
const symbolSvgGroup = `
  <path d="M 871.70 420.99 A 380.00 380.00 0 1 1 579.01 128.30" fill="none" stroke="#5B4FFF" stroke-width="88" stroke-linecap="round"/>
  <circle cx="500" cy="500" r="142" fill="#5B4FFF"/>
  <circle cx="805.47" cy="194.53" r="56" fill="#00E0D6"/>
`;

const bannerSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="460" viewBox="0 0 1200 460">
  <defs>
    <!-- Background Radial Glow -->
    <radialGradient id="heroGlow" cx="50%" cy="40%" r="55%">
      <stop offset="0%" stop-color="#5B4FFF" stop-opacity="0.22"/>
      <stop offset="35%" stop-color="#5B4FFF" stop-opacity="0.08"/>
      <stop offset="65%" stop-color="#00E0D6" stop-opacity="0.02"/>
      <stop offset="100%" stop-color="#040407" stop-opacity="0"/>
    </radialGradient>

    <!-- Symbol Core Glow Filter -->
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <!-- Linear Gradient for Badge -->
    <linearGradient id="badgeBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.18)"/>
      <stop offset="100%" stop-color="rgba(91,79,255,0.25)"/>
    </linearGradient>

    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#E4E4E7"/>
    </linearGradient>
  </defs>

  <style>
    .font-mono { font-family: 'Geist Mono', 'JetBrains Mono', 'SF Mono', Menlo, Monaco, Consolas, monospace; }
    .font-sans { font-family: 'Geist Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
  </style>

  <!-- Deep Canvas -->
  <rect width="1200" height="460" rx="12" fill="#040406"/>

  <!-- Radial Atmosphere -->
  <rect width="1200" height="460" rx="12" fill="url(#heroGlow)"/>

  <!-- Architectural Background Grid -->
  <g opacity="0.18" stroke="rgba(255,255,255,0.15)" stroke-width="0.5">
    <!-- Horizontal Grid Lines -->
    <line x1="20" y1="80" x2="1180" y2="80" stroke-dasharray="2 4"/>
    <line x1="20" y1="140" x2="1180" y2="140" stroke-dasharray="1 8"/>
    <line x1="20" y1="200" x2="1180" y2="200" stroke-dasharray="1 8"/>
    <line x1="20" y1="260" x2="1180" y2="260" stroke-dasharray="1 8"/>
    <line x1="20" y1="320" x2="1180" y2="320" stroke-dasharray="1 8"/>
    <line x1="20" y1="380" x2="1180" y2="380" stroke-dasharray="2 4"/>

    <!-- Vertical Grid Lines -->
    <line x1="160" y1="30" x2="160" y2="430" stroke-dasharray="1 8"/>
    <line x1="380" y1="30" x2="380" y2="430" stroke-dasharray="1 8"/>
    <line x1="600" y1="30" x2="600" y2="430" stroke-dasharray="2 6"/>
    <line x1="820" y1="30" x2="820" y2="430" stroke-dasharray="1 8"/>
    <line x1="1040" y1="30" x2="1040" y2="430" stroke-dasharray="1 8"/>
  </g>

  <!-- Precision Orbital Rings around Core Symbol -->
  <g transform="translate(600, 126)" opacity="0.6">
    <!-- Inner orbital ring -->
    <circle cx="0" cy="0" r="88" fill="none" stroke="rgba(91, 79, 255, 0.25)" stroke-width="1" stroke-dasharray="2 6"/>
    <!-- Middle telemetry ring -->
    <circle cx="0" cy="0" r="132" fill="none" stroke="rgba(255, 255, 255, 0.05)" stroke-width="1"/>
    <!-- Outer orbital ring with satellite markers -->
    <circle cx="0" cy="0" r="185" fill="none" stroke="rgba(91, 79, 255, 0.12)" stroke-width="1" stroke-dasharray="6 12"/>
    <circle cx="131" cy="-131" r="2.5" fill="#00E0D6" opacity="0.8"/>
    <circle cx="-131" cy="131" r="2" fill="#5B4FFF" opacity="0.6"/>
  </g>

  <!-- Outer Structural Hairline Frame -->
  <rect x="1" y="1" width="1198" height="458" rx="12" fill="none" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>
  <rect x="12" y="12" width="1176" height="436" rx="8" fill="none" stroke="rgba(255, 255, 255, 0.03)" stroke-width="1"/>

  <!-- Architectural Corner Crosshairs -->
  <g stroke="rgba(255, 255, 255, 0.25)" stroke-width="1">
    <!-- Top-Left -->
    <line x1="20" y1="26" x2="32" y2="26"/>
    <line x1="26" y1="20" x2="26" y2="32"/>
    <!-- Top-Right -->
    <line x1="1168" y1="26" x2="1180" y2="26"/>
    <line x1="1174" y1="20" x2="1174" y2="32"/>
    <!-- Bottom-Left -->
    <line x1="20" y1="434" x2="32" y2="434"/>
    <line x1="26" y1="428" x2="26" y2="440"/>
    <!-- Bottom-Right -->
    <line x1="1168" y1="434" x2="1180" y2="434"/>
    <line x1="1174" y1="428" x2="1174" y2="440"/>
  </g>

  <!-- Top Metadata Navigation / Telemetry -->
  <g class="font-mono">
    <!-- Left telemetry -->
    <text x="44" y="44" font-size="11" fill="#71717A" letter-spacing="1.5">ORBION TECHNOLOGIES // PLATFORM ARCHITECTURE</text>
    
    <!-- Right Live Status Pill -->
    <g transform="translate(930, 28)">
      <rect x="0" y="0" width="226" height="26" rx="13" fill="#0A0A0F" stroke="url(#badgeBorder)" stroke-width="1"/>
      <circle cx="16" cy="13" r="3.5" fill="#00E0D6"/>
      <circle cx="16" cy="13" r="6" fill="#00E0D6" opacity="0.25"/>
      <text x="28" y="17" font-size="10.5" fill="#EDEDED" letter-spacing="1">LIVE TELEMETRY: 99.99%</text>
    </g>
  </g>

  <!-- ================= CENTRAL BRAND IDENTITY ================= -->
  <!-- Official Orbion Symbol (Centered at X=600, Y=126, scaled to 84x84) -->
  <!-- Original symbol viewBox: -70 -70 1140 1140 (width 1140). Scale = 84 / 1140 = ~0.07368 -->
  <g transform="translate(600, 126)">
    <g transform="translate(-42, -42) scale(0.07368)">
      <g transform="translate(70, 70)">
        ${symbolSvgGroup}
      </g>
    </g>
  </g>

  <!-- Official Orbion Wordmark (Centered at X=600) -->
  <!-- Wordmark bbox width in original: ~3228 - 50 = ~3178. Scale = ~0.076 => width ~241px -->
  <g transform="translate(600, 206)">
    <g transform="translate(-124, 0) scale(0.076)">
      <g transform="translate(0, 0)">
        <g transform="scale(1,-1)" fill="url(#textGrad)">
          ${rawGlyphs}
        </g>
      </g>
    </g>
  </g>

  <!-- Primary Headline -->
  <text class="font-sans" x="600" y="262" font-size="17" font-weight="600" fill="#FFFFFF" text-anchor="middle" letter-spacing="3.2">
    THE AI OPERATING SYSTEM FOR MODERN BUSINESSES
  </text>

  <!-- Secondary Strategic Subtitle -->
  <text class="font-sans" x="600" y="296" font-size="13.5" font-weight="400" fill="#A1A1AA" text-anchor="middle" letter-spacing="0.8">
    Autonomous Agentic Workflows • Real-Time Systems Orchestration • Deep-Tech Reliability
  </text>

  <!-- Divider Line -->
  <line x1="380" y1="334" x2="820" y2="334" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>

  <!-- Bottom Technical Badges / Telemetry Chips -->
  <g class="font-mono" transform="translate(600, 376)">
    <!-- Badge 1: Next.js 15 -->
    <g transform="translate(-290, 0)">
      <rect x="-65" y="-14" width="130" height="28" rx="6" fill="#0C0C10" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      <text x="0" y="4" font-size="10.5" fill="#D4D4D8" text-anchor="middle" letter-spacing="1">NEXT.JS 15</text>
    </g>

    <!-- Badge 2: TypeScript 5.8 -->
    <g transform="translate(-145, 0)">
      <rect x="-65" y="-14" width="130" height="28" rx="6" fill="#0C0C10" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      <text x="0" y="4" font-size="10.5" fill="#D4D4D8" text-anchor="middle" letter-spacing="1">TYPESCRIPT 5.8</text>
    </g>

    <!-- Badge 3: Autonomous OS -->
    <g transform="translate(0, 0)">
      <rect x="-65" y="-14" width="130" height="28" rx="6" fill="#0C0C10" stroke="rgba(91,79,255,0.35)" stroke-width="1"/>
      <text x="0" y="4" font-size="10.5" fill="#5B4FFF" font-weight="600" text-anchor="middle" letter-spacing="1">AUTONOMOUS OS</text>
    </g>

    <!-- Badge 4: Zero-Latency Edge -->
    <g transform="translate(145, 0)">
      <rect x="-65" y="-14" width="130" height="28" rx="6" fill="#0C0C10" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      <text x="0" y="4" font-size="10.5" fill="#D4D4D8" text-anchor="middle" letter-spacing="1">TAILWIND CSS</text>
    </g>

    <!-- Badge 5: Production Domain -->
    <g transform="translate(290, 0)">
      <rect x="-65" y="-14" width="130" height="28" rx="6" fill="#0C0C10" stroke="rgba(0,224,214,0.3)" stroke-width="1"/>
      <circle cx="-42" cy="0" r="3" fill="#00E0D6"/>
      <text x="6" y="4" font-size="10.5" fill="#00E0D6" text-anchor="middle" letter-spacing="1">ORBION.IN</text>
    </g>
  </g>

  <!-- Bottom Coordinate Readout -->
  <g class="font-mono" opacity="0.45">
    <text x="44" y="424" font-size="9.5" fill="#71717A" letter-spacing="1.2">COORDINATES: 28.6139° N, 77.2090° E // ZERO-DRIFT INFRASTRUCTURE</text>
    <text x="1156" y="424" font-size="9.5" fill="#71717A" text-anchor="end" letter-spacing="1.2">SECURE PRODUCTION RELEASE</text>
  </g>
</svg>`;

// Save SVG banner to public/brand/svg and public/brand
fs.writeFileSync('public/brand/svg/orbion-banner.svg', bannerSvg);
fs.writeFileSync('public/brand/orbion-banner.svg', bannerSvg);

console.log('Saved SVG banner');

// Render high-resolution PNG using Sharp (2400x920 for retina crispness)
sharp(Buffer.from(bannerSvg))
  .resize(2400, 920)
  .png({ quality: 100, compressionLevel: 9 })
  .toFile('public/brand/png/orbion-banner.png')
  .then(() => {
    console.log('Saved public/brand/png/orbion-banner.png (2400x920)');
    // Also save standard 1200x460 copy to public/brand/banner.png and public/brand/orbion-banner.png for instant access
    return sharp(Buffer.from(bannerSvg))
      .resize(1200, 460)
      .png({ quality: 100 })
      .toFile('public/brand/orbion-banner.png');
  })
  .then(() => {
    console.log('Saved public/brand/orbion-banner.png (1200x460)');
  })
  .catch(err => {
    console.error('Error rendering PNG:', err);
    process.exit(1);
  });
