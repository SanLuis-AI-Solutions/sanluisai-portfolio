---
name: SanLuis AI Solutions Design System
description: Premium light-theme design system for AI consulting brand — Claude canonical
colors:
  brand:
    navy:
      primary: "#1A3160"
      dark: "#0F1F3D"
    gold:
      primary: "#D9A434"
      dim: "rgba(217,164,52,0.15)"
      glow: "rgba(217,164,52,0.08)"
  background:
    bone: "#FAF7F1"
    white: "#FFFFFF"
  text:
    primary: "#1A3160"
    body: "#333333"
    muted: "#6B7280"
  utility:
    red: "#EF4444"
    green: "#10B981"
typography:
  fonts:
    display: "Cormorant Garamond"
    body: "Inter"
    code: "JetBrains Mono"
  scales:
    hero: "clamp(2.8rem, 6.5vw, 5.25rem)"
    h2: "clamp(1.9rem, 3.5vw, 2.75rem)"
    h3: "clamp(1.4rem, 2.5vw, 1.75rem)"
components:
  buttons:
    primary:
      background: "{colors.brand.navy.primary}"
      text: "{colors.background.white}"
      hoverGlow: "0 0 28px rgba(26, 49, 96, 0.35)"
    secondary:
      background: "transparent"
      border: "{colors.brand.gold.primary}"
      text: "{colors.brand.gold.primary}"
      hoverGlow: "0 0 24px rgba(217, 164, 52, 0.4)"
    cta:
      background: "{colors.brand.gold.primary}"
      text: "{colors.brand.navy.primary}"
      hoverGlow: "0 0 24px rgba(217, 164, 52, 0.5)"
rounded:
  buttonRadius: "4px"
spacing:
  sectionPadding: "clamp(2rem, 5vw, 4rem)"
---

## Overview

Premium light-theme design system for SanLuis AI Solutions, a Houston-based AI consulting firm. The aesthetic embodies trust, precision, and Texas heritage — Atlantic Navy for stability, Heritage Gold for excellence, Bone for warmth. Sharp 4px edges. Cormorant Garamond for display authority, Inter for body readability, JetBrains Mono for data precision.

**This is the CANONICAL design system.** The old "Surgical Noir" dark theme (Space Grotesk, #0A0A0A, #D49E2C) is dead.

## Colors

- **Atlantic Navy (#1A3160):** Primary brand color — headers, buttons, dark sections
- **Navy Dark (#0F1F3D):** Deeper navy for hero backgrounds, footer
- **Heritage Gold (#D9A434):** Accent only — CTAs, highlights, gold thread signature gesture
- **Gold Dim (rgba(217,164,52,0.15)):** Muted gold for subtle backgrounds and dividers
- **Gold Glow (rgba(217,164,52,0.08)):** Very soft gold for gentle overlay effects
- **Bone (#FAF7F1):** Primary light background — warm, not sterile white
- **Text Primary (#1A3160):** Navy for headings in light sections
- **Text Body (#333333):** Near-black for body copy
- **Text Muted (#6B7280):** Gray for secondary content and captions
- **Red (#EF4444):** Error and attention states
- **Green (#10B981):** Success states

## Typography

Three-font system:
- **Cormorant Garamond:** Display, H1-H4. Elegant serif for authority.
- **Inter:** Body, UI, H5-H6. Clean sans-serif for readability.
- **JetBrains Mono:** Data, code, metrics. Monospace for precision.

### Heading Sizes
- Hero H1: clamp(2.8rem, 6.5vw, 5.25rem) — Cormorant Garamond
- Section H2: clamp(1.9rem, 3.5vw, 2.75rem) — Cormorant Garamond
- H3: clamp(1.4rem, 2.5vw, 1.75rem) — Cormorant Garamond
- H4-H6: Inter, scaled proportionally

## Components

### Buttons
Primary: Navy background, white text. Gold glow on hover.
Secondary: Transparent, gold border, gold text.
CTA: Gold background, navy text. Boldest hover glow.

### Visual Elements
- **Gold Thread:** Single signature gesture per page — subtle gold horizontal rule or accent
- **Diamond Bullets:** CSS `::before` pseudo-elements with inline SVG diamond
- **Ornament Divider:** SVG ornament between major sections
- **Navy Shadows:** Tonal navy shadows (not pure black) — `box-shadow: 0 4px 20px rgba(26, 49, 96, 0.08)`

## Spacing

Consistent padding system using viewport-relative units:
- Section Padding: clamp(2rem, 5vw, 4rem)
- 4pt/8dp base scale

## Rounded Corners

Standardized corner radius: 4px only. No rounded-xl, no rounded-lg.

## Do's and Don'ts

- Do use gold only for accent — CTAs, highlights, gold thread
- Do use three fonts only — Cormorant Garamond, Inter, JetBrains Mono
- Do maintain WCAG AA contrast ratios (4.5:1 for normal text)
- Do use tonal navy shadows, never pure black
- Don't use glassmorphism — not our aesthetic
- Don't center heroes (anti-slop rule) — asymmetric layouts preferred
- Don't use emojis in professional copy
- Don't use rounded-xl/lg — sharp 4px only
- Don't use the old Surgical Noir system — Space Grotesk, #0A0A0A, #D49E2C are dead

## Brand Assets

- `flame-mark.svg` — SanLuis flame mark
- `diamond.svg` — Diamond bullet
- `ornament-divider.svg` — Section ornament divider
- `logo-primary.jpg` — Primary logo

## Reference

This system is validated against 139 design systems in the vault at `04_Knowledge_Base/design-systems/open-design/`. Top-tier references: Linear, Stripe, Vercel, Anthropic, Supabase.
