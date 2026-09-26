---
name: Orbion Design System
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#b7c4ff'
  on-secondary: '#002682'
  secondary-container: '#0040cb'
  on-secondary-container: '#b2c0ff'
  tertiary: '#ffb786'
  on-tertiary: '#502400'
  tertiary-container: '#df7412'
  on-tertiary-container: '#461f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b7c4ff'
  on-secondary-fixed: '#001551'
  on-secondary-fixed-variant: '#0039b5'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb786'
  on-tertiary-fixed: '#311400'
  on-tertiary-fixed-variant: '#723600'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Geist
    fontSize: 72px
    fontWeight: '600'
    lineHeight: 76px
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.03em
  display-lg:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 60px
    letterSpacing: -0.035em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.025em
  headline-xl:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: -0.025em
  headline-sm:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-tablet: 1.5rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style
The design system establishes an architectural, editorial aesthetic rooted in restrained high-contrast minimalism and technical discipline. Engineered for executive decision-makers, machine learning engineers, and modern enterprise operators, the interface evokes sovereign control, technical precision, and quiet authority. 

Drawing structural discipline from high-end technical instruments and computational publications, the visual language avoids decorative noise, cartoonish graphics, and neon glow effects. Spatial balance is governed by razor-sharp layout structures, micro-borders, deep monochromatic field contrasts, and surgical typographic scale. The atmosphere feels deliberate, dense with utility, and unmistakably premium.

## Colors
The palette is built on strict light-absorbent architecture. Pure pitch black (`#000000`) and void black (`#050505`) anchor base environments. Layered surfaces build depth using elevated off-black tiers (`#0E0E0E`, `#121212`, `#161616`) bound by disciplined structural hairline dividers (`#222222` to `#2A2A2A`).

Typography maintains razor-sharp contrast: pure white (`#FFFFFF`) for primary titles and active readouts, silver ash (`#A1A1AA`) for secondary narrative, muted graphite (`#71717A`) for metadata, and deep slate (`#3F3F46`) for inactive structure.

A singular Electric Cobalt (`#3B82F6` primary, `#1D4ED8` hover/active) serves as the high-potency strategic accent. Its presence is restricted to less than 7% of total screen real estate—confined strictly to focused inputs, critical primary triggers, dynamic state markers, and analytical peaks. No diffuse multi-color gradients are permitted.

## Typography
Type conveys structural rigor and functional clarity. Geist serves as the primary instrument for display, heading, and body layers, deploying negative tracking on large scales to compact letterforms into architectural statements. Headings utilize tight tracking and measured leading to evoke the deliberate cadence of Swiss editorial prints.

JetBrains Mono provides typographic tension across data grids, operational telemetry, system tags, micro-labels, and algorithmic outputs. Monospaced typography is always set slightly smaller with generous positive tracking, giving computational readouts immediate distinction from operational narrative.

## Layout & Spacing
A non-negotiable 8-pixel mechanical grid governs every spatial increment across the operating system canvas. Outer envelopes conform to a strict 12-column layout on desktop viewports (>1280px), transitioning to an 8-column system on tablet (768px–1279px) and a dense 4-column system on mobile (<768px).

Content frames prioritize deliberate density over hollow expanse. Gaps between related parameters sit at 8px (`space-sm`), component interior padding scales systematically in steps of 16px (`space-md`) and 24px (`space-lg`), while distinct functional workspaces are divided by structural 32px (`space-xl`) breaks or hairline borders. Structural alignment is absolute: every bounding edge, trigger boundary, and status label aligns to the structural sub-grid.

## Elevation & Depth
Depth is constructed through tonal layering and micro-borders rather than physical drop shadows. Surfaces elevate by stepping up from deep charcoal blacks (`#050505`) to structural planes (`#0E0E0E`, `#121212`, `#161616`).

Every card, modal window, and floating palette utilizes a crisp 1px hairline border (`#222222`) that catches ambient light. Interactive hovers advance the border tone to `#333333` while keeping the background static or shifting it by a negligible 2% luminance increase.

When overlays (such as floating execution commands or context palettes) require detachment from the base layer, they rely on a deep directional ambient occluding drop: `0px 16px 40px rgba(0, 0, 0, 0.85)` accompanied by a backdrop filter blur of `16px` on a semi-opaque background (`rgba(14, 14, 14, 0.85)`). Glows, synthetic volumetric shines, and skeuomorphic highlights are forbidden.

## Shapes
Geometry is engineered, crisp, and disciplined. The design system uses minimal soft rounding to maintain an instrument-grade aesthetic without feeling harsh or brutalist.

Base interactive components—including inputs, standard buttons, telemetry cells, and inline status badges—feature a disciplined 4px radius (`rounded-sm`). Medium structural modules such as analytical panels, tables, and workflow nodes step up to 8px (`rounded-lg`). Overlays, executive modals, and root workspace containers terminate at a maximum of 12px (`rounded-xl`). Circular contours are restricted solely to system avatars and radial status indicators.

## Components

### Buttons
- **Primary:** Solid pure white background (`#FFFFFF`), pure black text (`#000000`), 4px corner radius, font weight 500. On hover, background shifts to crisp silver (`#E4E4E7`). Focus state renders an offset 2px ring in Electric Cobalt (`#3B82F6`).
- **Strategic Accent:** Reserved exclusively for high-intent conversion or decisive system deployment. Background is Electric Cobalt (`#3B82F6`), pure white text (`#FFFFFF`). On hover, color transitions to deep cobalt (`#1D4ED8`).
- **Secondary / Ghost:** Off-black surface (`#121212`), hairline boundary (`#222222`), pure white text (`#FFFFFF`). On hover, boundary sharpens to `#3F3F46` with background shifting to `#18181B`.

### Input Fields
- Built on an off-black base (`#0E0E0E`) with a solid 1px border (`#222222`) and a 4px corner radius. Padding is locked to 10px vertical by 14px horizontal. Text is set in 13px Geist.
- Active focus state immediately drops the neutral border in favor of a crisp 1px `#3B82F6` hairline edge. Placeholders sit strictly in muted graphite (`#52525B`).

### Cards & Panels
- Structured with `#0E0E0E` internal fill encased in a 1px border (`#222222`). Header zones feature a rigid bottom divider separating titles from analytical content. Padding defaults to 24px across desktop environments and 16px on mobile viewports.

### Data Chips & System Tags
- Compact, monospaced metadata badges. Background sits at `#161616` with a `#27272A` perimeter stroke, 4px corner radius, and JetBrains Mono text (`10px`, uppercase, tracking `0.06em`). When paired with live telemetry, a 6px solid dot indicates state: Green (`#10B981`) for nominal, Amber (`#F59E0B`) for elevated load, Electric Cobalt (`#3B82F6`) for active routing.

### Checkboxes & Radios
- Square 16px footprint with a 2px radius (checkbox) or circular 16px frame (radio). Default state: transparent background, 1.5px border (`#3F3F46`). Selected state: background shifts to pure white (`#FFFFFF`) with pitch-black glyph centering, or Electric Cobalt (`#3B82F6`) when managing critical pipeline executions.

### System Tables & Telemetry Lists
- Bordered horizontal tabular matrices. Table headers feature subdued monospaced labels (`#71717A`), 1px bottom border (`#222222`), with zero vertical internal borders. Rows use a 48px fixed height with seamless hover transitions to `#141414`.