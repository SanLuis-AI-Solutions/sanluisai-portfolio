---
name: SanLuis AI Solutions Design System
description: Premium dark theme design system for AI consulting brand
colors:
  brand:
    gold:
      primary: "#D49E2C"
      dim: "rgba(212,158,44,0.15)"
      glow: "rgba(212,158,44,0.08)"
    navy:
      primary: "#2D527E"
      brand: "#1B3C72"
  background:
    dark: "#0A0A0A"
    surface: "#141414"
  text:
    primary: "#FFFFFF"
    muted: "#888888"
  utility:
    red: "#f87171"
typography:
  fonts:
    headings: "Space Grotesk"
    body: "Inter"
  scales:
    hero: "clamp(2.8rem, 6.5vw, 5.25rem)"
    section: "clamp(1.9rem, 3.5vw, 2.75rem)"
    stat: "clamp(5rem, 14vw, 10rem)"
    metric: "clamp(2.5rem, 5vw, 3.5rem)"
components:
  buttons:
    primary:
      background: "{colors.brand.gold.primary}"
      hoverGlow: "0 0 28px rgba(212, 158, 44, 0.35)"
    secondary:
      background: "{colors.brand.navy.primary}"
      hoverGlow: "0 0 24px rgba(45, 82, 126, 0.4)"
  utilities:
    grainOverlay:
      backgroundUrl: "data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E"
      opacity: "0.025"
rounded:
  buttonRadius: "4px"
spacing:
  sectionPadding: "clamp(2rem, 5vw, 4rem)"
---

## Overview

Premium dark theme design system for SanLuis AI Solutions, a Houston-based AI consulting firm. The aesthetic embodies sophistication and technical excellence with a refined dark palette accented by metallic gold and deep navy blue. The design system prioritizes readability, visual hierarchy, and subtle animations to create a premium experience that reflects our high-end positioning.

## Colors

- **Gold Primary (#D49E2C):** Our signature gold accent used for primary actions, highlights, and brand recognition
- **Gold Dim (rgba(212,158,44,0.15)):** Muted gold for subtle backgrounds and dividers
- **Gold Glow (rgba(212,158,44,0.08)):** Very soft gold for gentle overlay effects
- **Navy Brand (#1B3C72):** Deep naval blue representing stability and trust
- **Navy Primary (#2D527E):** Secondary brand color for alternative styling
- **Background Dark (#0A0A0A):** Primary dark background color
- **Surface (#141414):** Slightly lighter surface for cards and containers
- **Text Primary (#FFFFFF):** Pure white for optimal readability
- **Text Muted (#888888):** Gray for secondary content and captions
- **Red (#f87171):** Error and attention states

## Typography

Using a dual-font system:
- **Space Grotesk:** For all headings, creating strong visual hierarchy
- **Inter:** For body text, ensuring optimal readability

### Heading Sizes
- Hero H1: clamp(2.8rem, 6.5vw, 5.25rem) with -0.03em letter spacing
- Section H2: clamp(1.9rem, 3.5vw, 2.75rem) with -0.025em letter spacing
- Stat Display: clamp(5rem, 14vw, 10rem) with -0.04em letter spacing
- Metric Display: clamp(2.5rem, 5vw, 3.5rem) with -0.03em letter spacing

## Components

### Buttons
Primary buttons use gold backgrounds with glow effects on hover:
- Background: {colors.brand.gold.primary}
- Hover Effect: 0 0 28px rgba(212, 158, 44, 0.35)
- Transform: translateY(-1px) on hover

Secondary buttons use navy:
- Background: {colors.brand.navy.primary}
- Hover Effect: 0 0 24px rgba(45, 82, 126, 0.4)
- Transform: translateY(-1px) on hover

### Visual Effects
Grain Overlay provides subtle texture:
- Background Pattern: SVG noise filter with 0.025 opacity
- Applied to backgrounds for premium tactile feel

## Spacing

Consistent padding system using viewport-relative units:
- Section Padding: clamp(2rem, 5vw, 4rem)

## Rounded Corners

Standardized corner radius for UI elements:
- Buttons: 4px

## Do's and Don'ts

- Do use gold only for primary actions and highlights
- Don't use more than two font families on a single page
- Do maintain WCAG AA contrast ratios (4.5:1 for normal text)
- Don't use pure black (#000000) - always use our dark background (#0A0A0A)
- Do apply the grain overlay for premium质感 effect on dark surfaces
- Don't use both gold and navy as primary actions on the same screen