# Phase 2: Design Reference Synthesis

## Systems Studied
| System | Best Pattern | Key Takeaway for Us |
|--------|-------------|---------------------|
| **Stripe** | Weight-300 lightness as authority | Our Navy headings are already strong — but could benefit from lighter-weight subtext to create the "whispered authority" effect |
| **Vercel** | Shadow-as-border, generous whitespace | Replace some of our `border-navy-200` with Vercel's `0px 0px 0px 1px` shadow-border technique for cards |
| **Notion** | Warm neutrals, whisper borders (rgba(0,0,0,0.1)) | Our Bone canvas + Navy scale already achieves this — but our borders are too heavy (navy-200 = #D0D9E8 at ~0.18 contrast on bone) |
| **Apple** | Binary light/dark rhythm, single accent color | Our Navy sections (dark) alternating with Bone sections (light) is correct — but Gold should be used as sparingly as Apple uses Blue. Currently gold appears too often. |

## What Stays, What Changes

### Keep (Already Correct)
- **Cormorant Garamond** serif display headlines — unique positioning, sets us apart
- **Bone canvas** (#FAF7F1) + **Atlantic Navy** (#1A3160) hierarchy
- **Gold as accent** (#D9A434) — not a primary UI color
- **Sharp 4px edges** — no glassmorphism
- **4-step process** (Discover→Build→Ship→Maintain)

### Improve (Phase 3 Targets)
| Area | Current | Target |
|------|---------|--------|
| Section rhythm | All Bone sections | Alternating Navy dark ↔ Bone light (Apple inspiration) |
| Card borders | `border-navy-200` (#D0D9E8) on white | Shadow-as-border: `0px 0px 0px 1px rgba(26,49,96,0.08)` (Vercel/Notion inspiration) |
| Gold usage | Appears in eyebrow labels, stat numbers, thread line, hover shadows | Reduce gold to 2-3 intentional moments per page (Apple discipline) |
| Whitespace | Adequate but not generous | Increase vertical section padding 1.25x (Vercel inspiration) |
| Sub-text weight | Same weight as headings | Lighten sub-text to weight 300 where possible (Stripe inspiration) |
| Hero layout | Centered column | Asymmetric split: text left, visual right (taste-frontend rule) |

## Hero Sketch Plan — 3 Variants

Will produce 3 self-contained HTML mockups of the hero section:

1. **"Editorial"** — Dark Navy hero, asymmetric serif headline with gold thread, right-side decorative element
2. **"Bone Canvas"** — Light hero on bone background, asymmetric split, brand image right
3. **"Split Frame"** — 50/50 split: navy text block left, brand image right with overlay
