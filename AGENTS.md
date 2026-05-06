# SanLuis AI Portfolio — Agent Instructions

## Tech Stack
Next.js 16.2 (Turbopack), TypeScript, Tailwind CSS 4
Deployed: Vercel (sanluisai-portfolio.vercel.app)
36 static routes, 2 API routes (assessment, cal-webhook)

## Design System
- Colors: Atlantic Navy #1A3160, Heritage Gold #D9A434, Bone #FAF7F1
- Type: Cormorant Garamond (display/h1-h4), Inter (body/UI/h5-h6), JetBrains Mono (data)
- Radius: 4px (sharp, no rounded-xl/lg)
- No glassmorphism, tonal navy shadows
- Brand assets: flame-mark.svg, diamond.svg, ornament-divider.svg, logo-primary.jpg

## File Conventions
- Components in `components/` (e.g., `FaqEntry.tsx` is a `'use client'` component)
- Page routes in `app/`
- Design assets in `public/assets/`
- Version meta: `build-version` in `app/layout.tsx`

## Skill Routing
When the user's request matches an available skill, invoke it via the Skill tool. When in doubt, invoke the skill.

### Gstack Skills (Hermes /skill prefix)

| Trigger | Skill | What it does |
|---|---|---|
| "audit design", "visual QA", "does it look good" | `gstack-design-review` | Browser-based visual QA with before/after screenshots |
| "QA this", "find bugs", "test the site" | `gstack-qa` | Systematic browser testing + auto-fix bugs |
| "review this code", "check my diff" | `gstack-review` | Pre-landing PR review (SQL safety, concurrency, trust boundaries) |
| "design the page", "mock this up" | `gstack-design-html` | Production-quality HTML/CSS from design specs |
| "ship it", "deploy this" | `gstack-ship` | Merge + CI + deploy workflow |
| "what's the plan", "review strategy" | `gstack-plan-ceo-review` | CEO-level plan review |
| "check architecture" | `gstack-plan-eng-review` | Engineering architecture review |
| "save my context" | `gstack-context-save` | Save working state for session recovery |
| "restore my session" | `gstack-context-restore`| Restore previously saved context |

### Core Skills

| Trigger | Skill | What it does |
|---|---|---|
| "score this", "evaluate quality" | `expert-panel` | Multi-criteria scoring across pages/sections |
| Design system work | `taste-frontend` + `ui-ux-pro-max` | Design intelligence for web |
| Brand content | `hermes-content-framework` | Content generation following brand voice |
| Browser investigation | `gstack-investigate` | Root cause debugging via browser |
| Website audit | `website-conversion-audit` | Score site through conversion lenses |
| Elite polish | `elite-gauntlet-website` | 6-phase website enhancement protocol |

## Quality Standards
- Build must pass: `npm run build` (0 errors)
- Version tag updated on every deploy
- No rounded-xl/lg — use rounded (4px)
- GoldThread: max one per page
- Diamond bullets: CSS pseudo-elements + inline SVG
- No em dashes, no AI-isms
- Never deploy mid-edit state
