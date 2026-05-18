# Claude Homepage Audit — Round 2

## Context

You are auditing a Next.js B2B AI consulting website for SanLuis AI Solutions (Houston). The site is live at: **https://sanluisai-portfolio.vercel.app**

This is the homepage re-audit. Round 1 was completed and implemented. Now we need fresh eyes on the entire page to catch anything missed.

## Tech Stack
Next.js 16.2 (Turbopack), TypeScript, Tailwind CSS 4, Framer Motion
Design system: Atlantic Navy (#1A3160), Heritage Gold (#D9A434), Bone (#FAF7F1)
Type: Cormorant Garamond (display), Inter (body), JetBrains Mono (data)
Radius: 4px throughout (no rounded-xl/lg)
No glassmorphism — tonal navy shadows instead

## Brand Voice
Direct, Grounded, Empathetic, Confident.
No em dashes anywhere — use hyphens for ranges or periods.
No AI-isms ("unlock potential", "transformative", "revolutionary").
Sales framework: Grand Slam Offer, Value Equation, Sell Promises.

## Current Homepage Section Flow
1. **Hero** — Navy background, "Reclaim 20 hours a week with custom AI." H1. Parallax human+AI hand background (subtle 18% opacity). Tagline: "Custom AI for real problems. Shipped in weeks. Built for Houston." Single CTA button "Book a Discovery Session. $300." Assessment as text link below. Stats bar: "5,400+ hours recovered for Houston businesses."

2. **Problem** — Bone background. Founder POV block with Daniel San Luis headshot (80px circle with gold ring). Industry grid: Manufacturing ($50B hero), Healthcare, Real Estate (compact), Professional Services (60-80% hero), Logistics, Retail.

3. **Case Studies** (THE EVIDENCE) — Horizontal scroll with 3 case study cards: Garza International (60% faster quoting), Susie's Jewelry Repair (3x leads), LoveFlow (40% better matches). "View all case studies" link.

4. **What We Don't Do** — Navy section with 4 counter-positioning cards: "We don't resell templates", "We don't lock you in", "We don't pitch you", "We don't build black boxes."

5. **Services** (WHAT WE BUILD) — 4 service cards in alternating layout: Discovery Session ($300), AI Automation (from $1,200), AI Agents (from $5,000), Custom AI Systems (from $5,000). "Not sure?" CTA below.

6. **Social Proof** — OrnamentDivider separator, testimonials section.

7. **Process** — How it works section.

8. **ROI Calculator** — Interactive widget with sliders for hours/week, hourly cost, number of people. Shows live monthly hours saved, monthly cost, annual savings, break-even on $300 session. CTA to book.

9. **FAQ** — "We've Heard These Before" eyebrow. "Your honest questions. Straight answers." heading. 8 Q&A pairs covering Discovery Session, timeline, cost, team replacement, code ownership, team adoption, integrations, client effort.

10. **CTA** — Navy section. "What if your team could reclaim 20 hours every week?" $300 gold subheading. Free AI Automation Audit bonus. CTA button. Urgency: "2 slots remaining this quarter." Garza International quote sidebar with metrics.

## Specific Areas I Want Audited

### 1. Visual Polish & Layout
- Does every section feel properly spaced (padding, margins)?
- Are there any alignment issues on desktop?
- Does the hero background image (human+AI hands) look right at 18% opacity?
- Are the What We Don't Do card grid and ROI calculator two-column layout rendering correctly?
- Does the founder headshot look good at 80px circle with gold ring?

### 2. Copy Quality
- Scan every section for weak phrasing, passive voice, or generic statements
- Does the copy actually sell specific outcomes (not features)?
- Any remaining AI-isms, buzzwords, or fluff?
- Does the copy flow logically from problem → proof → trust → solution → FAQ → action?

### 3. Conversion
- Is there a clear, single primary CTA per section?
- Is the $300 price point visible and compelling?
- Does the urgency signal ("2 slots remaining this quarter") feel genuine or gimmicky?
- Is the "Not sure?" path in services helpful or confusing?
- Should the Free AI Automation Audit be more prominent?

### 4. Trust Signals
- Are the testimonials specific enough? Do they need real company names + results?
- Is the money-back guarantee visible enough?
- Does the "What We Don't Do" section build trust or feel defensive?
- Would a Houston address in the footer help?

### 5. Technical / UX
- Check the live site for any console errors, broken images, or missing styles
- Mobile responsiveness — check at 375px, 768px, 1024px, 1440px
- Are all links working (nav, CTAs, case study cards)?
- Does the ROI calculator slider interaction feel smooth?
- Is the sticky mobile CTA working properly and not overlapping content?
- Is there a favicon and are OG tags set correctly?

### 6. SEO / AEO
- Is the FAQPage JSON-LD schema working correctly?
- Does the metadata description match the page content?
- Any missing alt text on images?
- Are there opportunities for voice-search-friendly content blocks?

## What I Need From You
A structured report with:
1. **Critical** — anything broken or wrong
2. **High** — significant conversion/UX improvements
3. **Medium** — polish and refinement
4. **Low** — nice-to-haves

For each finding include: the exact section, the problem, and the fix. Be specific — reference CSS classes, content snippets, and component names where possible.

Do NOT suggest: em dashes, glassmorphism, rounded corners larger than 4px, adding blog articles, or changing the color scheme.
