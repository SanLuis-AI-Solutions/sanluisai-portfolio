# SanLuis AI Solutions — Design System

> *High-status AI studio for operators who are serious about leverage.*

---

## 1. Company Context

**SanLuis AI Solutions** is a premium AI consulting firm. Not a SaaS vendor, not a subscription product — a **studio** that performs **surgical AI implementations** for serious operators. The brand promise is precision and impact: identify the exact bottleneck killing growth, remove it, leave.

### Positioning vocabulary
- **Surgery, not software.** Engagements are bespoke. Time-bounded. Outcome-priced.
- **Operators, not users.** The audience is founders, executives, COOs — people with revenue P&Ls.
- **Leverage.** The core promise. Every engagement is measured in points of margin or time recovered, not features shipped.
- **High-status, low-noise.** SanLuis competes with management consultancies and elite engineering shops, not other AI tools.

### Tone in one sentence
> Old-money confidence applied to new-economy machinery. Stately serifs and a single gold flame, atop ruthless operator copy.

---

## 2. Source Materials

The brand started as a name + visual identity. The artifacts in `uploads/` are the input set:

| File | What it is |
|---|---|
| `uploads/Screenshot Capture - 2025-08-22 - 14-47-50.jpg` | Primary stacked logo. Navy serif "SAN LUIS" wordmark with two gold flame accents inside the letterforms, gold ornamental divider, and "AI SOLUTIONS" caplock subtitle. Off-white bone background. |
| `uploads/image_cd1d5ddd-3348-497c-a60d-d39bbe021239.png` | Lobby signage mockup — backlit logo on a stone wall in a modern hotel-grade lobby. Sets the *physical* world the brand inhabits: marble, brushed metal, low warm lighting. |
| `uploads/image_7bd449ba-dcfe-43cf-9956-a7d418934d3e.png` | Conference room signage — brushed steel placard with the logo + "CONFERENCE ROOM" subplate. Reinforces the corporate, high-status aesthetic. |

Copies of all three live in `assets/` for design use.

> ⚠️ **No codebase, Figma, or live website was provided.** This system is derived from the logo identity + brand brief alone. UI components, motion, and screen designs are inferred extrapolations consistent with the visual DNA — they should be reviewed before being treated as canon.

---

## 3. Content Fundamentals

The voice is **the surgeon's voice**: short, declarative, expensive. Never cute. Never apologetic. Never "we just want to help you on your journey."

### Voice rules
- **Declarative > descriptive.** "We remove the bottleneck." Not "We help you identify and remove bottlenecks."
- **Verbs over nouns.** "Cut," "compress," "remove," "ship," "deploy."
- **No hedging.** No "maybe," "might," "could potentially," "we believe."
- **No SaaS verbs.** Never "empower," "unlock," "supercharge," "transform your business."
- **Numbers anchor claims.** "37% margin recovery in 90 days," not "significant improvements."

### Pronouns
- **We** — the studio. Used confidently, without false plurals. ("We do three engagements per quarter.")
- **You** — the operator. Direct address, no flinching. ("Your bottleneck is not your tech stack.")
- Avoid "us," "our team," "our family of clients." This is not a community.

### Casing
- **Sentence case** for body, headings, navigation.
- **Title Case** for proper engagement names ("The 90-Day Margin Audit").
- **ALL CAPS** sparingly: eyebrow tags, button labels, the wordmark itself, plaque-style section dividers.
- **Italic serif** for pull quotes and the brand's "rare honest moment" voice — see examples below.

### Punctuation
- **Em dashes** — they are the brand's signature beat. They imply asymmetry between thought clauses, the way a surgeon pauses mid-sentence to look up.
- **Periods** end every UI string. Including buttons that are full sentences.
- **No exclamation marks.** Ever.
- **No emoji.** Ever.

### Sample copy

> **Hero:** *We don't sell software. We perform surgery.*
>
> **Subhead:** Precise, time-bounded AI implementations for operators serious about leverage. One engagement. One bottleneck. Removed.

> **Service tile:** **The Margin Audit** — 14 days. We map every workflow, find the three places AI compounds, and quantify the ceiling. You get a deployment plan or your money back.

> **About line:** SanLuis runs three engagements per quarter. We turn down nine.

> **Italic lede (rare honest moment):** *Most AI consulting is theatre. Slide decks, pilot purgatory, six-month "discovery" phases. We ship working systems in weeks.*

### What we never say
- "AI-powered." (everything is.)
- "Cutting-edge," "next-gen," "revolutionary."
- "Reach out," "circle back," "let's chat."
- "Solutions" as a soft synonym for product. (Ironically — the brand name uses "Solutions" with full weight.)

---

## 4. Visual Foundations

### 4.1 Color
The palette is **two colors and a paper**: **Atlantic Navy**, **Heritage Gold**, on **Bone**. That's it. Everything else is a tonal step within those families plus a graphite ink for body copy.

- **Atlantic Navy** (`#1A3160`) is the primary brand color — drawn directly from the logo wordmark. Used for headlines, primary buttons, dark surfaces, structural ink.
- **Heritage Gold** (`#D9A434`) is the flame — used **sparingly** as accent, divider, active state, and for "high-status moments." NEVER as a fill across large surfaces. It is a glint, not a wash.
- **Bone** (`#FAF7F1`) is the warm off-white from the logo background — the default light canvas. Cooler than cream, warmer than pure white.
- **Graphite Ink** (`#353D49`) — body copy on bone surfaces.

Pure black and pure white are reserved for high-contrast affordances (input borders, photo overlays). The brand prefers `--sl-navy-950` (#0B1A33) for "near black" and `#FFFFFF` only for `--bg-surface` cards floating on bone.

### 4.2 Type
- **Display: Cormorant Garamond** (free, Google Fonts). High-contrast transitional serif standing in for the custom hand-drawn wordmark in the logo. Used for h1–h4, hero copy, italic ledes. *(See substitution flag in §6.)*
- **Sans: Inter** (free). The operator's voice — crisp geometric grotesque for body, UI, data.
- **Mono: JetBrains Mono** — for terminal moments, code, precise numerics.

The serif/sans split is **intentional and structural**: serifs for *what we are saying*, sans for *how the system reports*. h5 and h6 break to sans deliberately, signaling we have stopped speaking and the data has started.

### 4.3 Spacing
4-pixel base grid. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160. **Generous** by default — SanLuis uses negative space as a luxury signal. Section padding minimum 96px on desktop.

### 4.4 Backgrounds
- **Default:** flat bone (`--bg-canvas`). No noise, no texture, no gradients across the canvas.
- **Hero / section breaks:** allow `--grad-navy-deep` (a 5% vertical gradient inside the navy family — almost imperceptible).
- **Imagery treatment:** photographic, never illustrated. Warm, low-key, architectural — marble, brushed steel, dim lighting. Subjects are lobbies, hands, documents, instruments. **No people-on-laptops stock.** **No abstract AI swooshes.** **No generated isometric vectors.**
- **No repeating patterns or textures.** No grain. No "glassmorphism." No mesh gradients.
- **Full-bleed hero photography** is encouraged for editorial moments; otherwise sections are framed and contained.

### 4.5 Borders & Cards
- Cards on light surfaces: 1px hairline (`--border-1`, navy at 10% alpha), `--rad-2` (4px) corners, white surface, subtle `--shadow-1` only on hover.
- Cards on dark navy surfaces: no border, internal hairlines in `rgba(255,255,255,0.08)`.
- "Premium" cards (engagement tiles, pricing) use a **single 1px solid navy border** with no shadow — the *plaque* treatment.
- **Corner radii are restrained.** Default UI radius is 4px. Pills (chips, status dots) use full radius. Brand believes in straight edges; soft corners are everywhere on the modern web — SanLuis is sharp on purpose.

### 4.6 Shadows / Elevation
Tonal navy shadows, never neutral gray. Four steps (`--shadow-1` through `--shadow-4`). Plus a `--shadow-gold-glow` reserved for the rare CTA-of-record moment.

### 4.7 Animation
- **Disposition: still.** The brand is more "library reading room" than "tech startup landing page." Default = no animation.
- When motion appears: **slow, soft, single-property fades** with `--ease-out` over `--dur-base` (220ms). No bouncing, no springs, no slide-ins from off-screen.
- A signature gesture: **the gold thread** — a 1px gold line drawing in horizontally as a section enters viewport (`--grad-gold-thread`). One per page maximum.
- Hover states: 140ms opacity + color easing. **Never scale-up on hover.**
- Press states: 80ms opacity to 0.85, no shrink, no shadow change. The button feels metal-on-metal, not rubbery.

### 4.8 Transparency & Blur
- **Used very sparingly.** Backdrop blur is reserved for nav bar on scroll (8px blur, 80% bone tint).
- No glassmorphism panels, no frosted hero overlays, no translucent CTAs. The brand believes in solid materials.

### 4.9 Imagery vibe
- **Warm, low-key, architectural.** Slightly underexposed. Wood, marble, brushed metal, leather, vellum.
- **No grain filter** — this is not a 2014 film-emulation brand. Photography is clean and sharp; the warmth comes from the actual scene.
- **Cool tech imagery is forbidden.** No screens-of-code shots, no neon, no "futuristic" datacenters.

### 4.10 Layout rules
- Generous left/right margins on desktop. Content max-width 1180px; reading width 68ch.
- Asymmetric grids preferred over centered everything.
- Page chrome is minimal: thin nav (top), no sidebars on marketing surfaces.
- The **gold ornamental divider** (see `assets/ornament-divider.svg`) is the only horizontal rule used between major sections. Standard `<hr>` is forbidden in production layouts.

---

## 5. Iconography

**SanLuis does not use a heavy iconography system.** The brand relies on type and white space far more than glyphs. When icons are required:

- **Primary set: Lucide Icons** (CDN) — selected because of its **thin 1.5px stroke**, square caps, and minimal personality. No filled icons. No two-tone icons. No emoji-style icons.
- Stroke weight is locked at **1.5px** (Lucide default). Never 2px. Never 1px.
- Icon size matches the cap-height of the adjacent text. Default 16px in body, 20px in nav, 24px in feature lists.
- Icons inherit `currentColor` and live at `--fg-2` or `--fg-3`. Gold icons are reserved for the *one* accent moment per surface.

**Brand-specific glyphs (in `assets/`):**
- `flame-mark.svg` — the flame from the logo. Use as favicon, loader, or single-letter avatar. Never use it inline as a substitute for a Lucide icon.
- `diamond.svg` — small gold diamond. Used as a list bullet in editorial copy and as a separator between metadata (`Author · ◆ · Date`).
- `ornament-divider.svg` — the rule-diamond-rule horizontal break.

**Emoji: never used.** Anywhere. Including marketing copy, in-app empty states, and CEO LinkedIn posts.

**Unicode symbols** (`→`, `·`, `—`, `§`, `№`) **are encouraged** — they slot into the typographic voice without breaking it.

> Substitution flag: Lucide is a stand-in for a future bespoke icon set commissioned to match the wordmark's curl. If/when a custom set ships, swap the CDN reference.

---

## 6. Substitutions & Open Questions ⚠️

Items below are **best-guesses** awaiting client confirmation:

1. **Display typeface.** The wordmark in the logo is hand-drawn, with custom curls on the S/N/L/U. The closest free analog is **Cormorant Garamond** (used here). Recommended next step: license a high-contrast didone (e.g. *Canela*, *Saol Display*) or commission a custom display cut. **Please send the canonical brand font if it exists.**
2. **Exact brand hex codes.** Navy and gold values were sampled from the JPEG. Please confirm: is the navy `#1A3160` (sampled) or a Pantone-spec reference?
3. **Iconography.** Lucide is a placeholder. If a brand icon set exists, drop it into `assets/icons/` and update §5.
4. **Photography library.** No real brand photos provided — `assets/` includes only the three uploads. Recommend commissioning an architectural photo shoot (lobby/desk/document close-ups) before launch.

---

## 7. File Index

```
README.md                  ← you are here
SKILL.md                   ← skill manifest for cross-tool use
colors_and_type.css        ← all color + type tokens, ready to import

assets/
  logo-primary.jpg              full stacked logo on bone bg
  logo-lobby-mockup.png         backlit logo, lobby environment
  logo-conference-mockup.png    brushed-steel plaque mockup
  flame-mark.svg                glyph-only flame mark (favicon-ready)
  diamond.svg                   small gold diamond bullet
  ornament-divider.svg          rule-diamond-rule horizontal break

preview/                   ← design system tab cards
  *.html

ui_kits/
  marketing-site/          ← marketing site UI kit (recreated from brand brief)
    README.md
    index.html
    Nav.jsx, Hero.jsx, Engagements.jsx, Proof.jsx, Footer.jsx
```

---

## 8. Quick-start

To use these tokens in any HTML artifact:

```html
<link rel="stylesheet" href="/colors_and_type.css">
```

Then reach for the semantic classes:

```html
<span class="sl-eyebrow">No. 01 — The Studio</span>
<h1 class="sl-display-lg">We don't sell software. We perform surgery.</h1>
<p class="sl-body-lg">…</p>
<p class="sl-lede">Most AI consulting is theatre.</p>
```

Or use the raw CSS variables directly: `var(--sl-navy-900)`, `var(--font-display)`, `var(--sp-7)`, etc.
