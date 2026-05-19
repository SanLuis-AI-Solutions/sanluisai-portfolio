# Claude Homepage Audit — Round 3 (Final)

## Context

You are auditing a Next.js B2B AI consulting website for SanLuis AI Solutions (Houston). The site has been through two full rounds of auditing and fixes. This is the **final quality gate** before domain connection.

**Live URL:** https://sanluisai-portfolio.vercel.app

## Tech Stack
Next.js 16.2 (Turbopack), TypeScript, Tailwind CSS 4, Framer Motion
Design system: Atlantic Navy (#1A3160), Heritage Gold (#D9A434), Bone (#FAF7F1)
Type: Cormorant Garamond (display), Inter (body), JetBrains Mono (data)
Radius: 4px throughout (no rounded-xl/lg). No glassmorphism.

## Brand Voice
Direct, Grounded, Empathetic, Confident. No em dashes (use hyphens or periods). No AI-isms ("unlock potential", "transformative"). Sales framework: Grand Slam Offer, Value Equation, Sell Promises.

## What's Been Fixed Since Previous Audit

Round 2 addressed 35 items including:
- CTA no longer duplicates Hero H1
- ROI calculator break-even math fixed
- Sticky mobile CTA now scroll-fades (hidden at top, visible after scrolling past hero)
- Founder headshot visible on mobile, larger on desktop
- What We Don't Do section contrast fixed (navy-800 cards on navy-900 bg, gold-600/30 gutters)
- Services: dropped Discovery Session card, now leads with 3 higher-ticket offers
- Testimonials: LoveFlow removed (anonymous), only Garza + Susie with real names
- Lead magnet unified to "AI Automation Audit" everywhere
- HeroStats "5,400+ hours" now includes methodology: "3 Houston operators. 3 industries. Hours recovered tracked monthly."
- Process copy no longer contradicts FAQ (no "runs itself")
- Footer updated, $300 trimmed from 9 to 5 homepage mentions
- Online-only positioning added to What We Don't Do, footer, JSON-LD
- Case study mobile dots now clickable with active indicator
- Process arrows repositioned between circles, not under descriptions
- OG image verified, build version updated, em dashes removed from schema

## Current Homepage Section Flow

1. **Hero** — Navy bg. "Reclaim 20 hours a week with custom AI." H1. Parallax hand background (18% opacity). Single CTA: "Book a Discovery Session. $300." Assessment as text link below. Stats: "5,400+ hours recovered. 3 Houston operators, 3 industries."

2. **Problem** — Bone bg. Founder POV with headshot (80px circle, gold ring, visible on all screens). 6 industry cards in 3×2 grid.

3. **ROI Calculator** — Interactive sliders for hours/week, cost, people. Live monthly/annual savings. Break-even logic corrected. CTA + money-back guarantee.

4. **Case Studies** — Navy section. 3 horizontal scroll cards (Garza: 60% faster quoting, Susie: 3x leads, LoveFlow: removed). Clickable mobile dots with active indicator.

5. **What We Don't Do** — Navy section. 4 cards: no templates, no lock-in, no pitches, no black boxes. Gold gutters, navy-800 cards, online-only badge below.

6. **Services** — 3 cards: Automation (from $1,200), Agents (from $5,000), Custom AI (from $5,000). "Start with a Discovery Session" bottom link. Detail + bonus visible on mobile.

7. **Social Proof** — 2 testimonials: Carlos Garza + Susie Castellano with real names.

8. **Process** — 4 steps. Desktop: circle/arrow title row + description row.

9. **FAQ** — "We've Heard These Before" / "Your honest questions. Straight answers." 8 Q&A pairs.

10. **CTA** — "Ready?" eyebrow. "Book your Discovery Session." H2. "$300. 60 minutes." subhead. Free AI Automation Audit in bordered box. Urgency: "Booking through Q3 · 3 of 4 build slots taken." Garza quote sidebar.

## What I Need From You

A final quality gate pass. Be ruthless but surgical. I want:

### 1. Fresh Eyes Scan
Review the live homepage start to finish without referencing previous audit notes. List everything that catches your eye — good or bad.

### 2. Conversion Optimization
- Is the single most important action (booking a Discovery Session) obvious from any scroll position?
- Does urgency feel genuine?
- Is the free bonus visible enough?
- Are there still too many "$300" mentions competing with the higher-ticket offers?

### 3. Copy Consistency
- Are there any contradictory promises between sections?
- Does the "Online only. No office lease." badge in What We Don't Do feel like it belongs?
- Is the brand voice consistent throughout (Direct, Grounded, Empathetic, Confident)?

### 4. Mobile UX
- Check at 375px and 768px
- Sticky CTA appearing/disappearing correctly?
- Founder headshot readable at 56px?
- Service card detail/bonus text not overwhelming?

### 5. Technical
- Any console errors, broken links, or rendering issues?
- Are all images loading with proper alt text?
- Is the FAQPage schema structured data still valid after the heading changes?

### 6. The "Is It Ready" Assessment
- Give me a grade: Ship-ready, Ship-with-minor-fixes, or Needs-another-round
- If ship-ready, what are the 3 biggest remaining risks?
- If not, what are the absolute minimum fixes before connecting sanluisai.com?

## Constraints
- Do NOT suggest: em dashes, glassmorphism, rounded corners > 4px, adding blog posts/FAQ items, changing the color palette, or adding a physical address
- Be specific — reference component names, CSS classes, line numbers

## Your Report
Tier it: **Go / No-go / Go-with-notes**. If Go-with-notes, list exactly what needs fixing and estimate effort (minutes/hours) per item.
