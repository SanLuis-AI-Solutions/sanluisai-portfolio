# OPS-008 Internal Review

Status: private synthetic MVP; not approved for merge, deployment, public exposure, or real-user testing

## Architecture

- Route: `/internal/ai-opportunity-scorecard`
- Access gate: available only under `next dev` when `SCORECARD_PRIVATE_MVP=enabled`
- Production behavior: HTTP 404
- Data: browser-memory synthetic answers only
- Scoring: deterministic rules in `lib/scorecard.ts`
- Results: on-screen only
- Analytics: local in-memory event list only
- CTAs: disabled buttons with no navigation or handlers
- Global shell: analytics, navigation, booking, contact, footer, sticky CTA, and exit-intent controls are suppressed on the private route

To disable the private route, unset `SCORECARD_PRIVATE_MVP`.

## Internal review command

```powershell
$env:SCORECARD_PRIVATE_MVP='enabled'
npm run dev -- --hostname 127.0.0.1 --port 3108
```

The route must not be shared, deployed, indexed, or used with real information.

## Validation evidence

- Seven reviewed routing cases: pass
- Incomplete input: fails closed
- Malformed input: fails closed
- Duplicate key: fails closed
- Personal/customer-data fields: rejected
- Non-synthetic input: rejected
- External Scorecard network requests: none
- External CTAs: inert
- Keyboard completion and validation-error path: pass
- Labels, focus entry, reduced motion, desktop, and mobile review: pass
- Production route: HTTP 404
- Build and type checks: pass
- Repository lint: zero errors; 25 pre-existing warnings outside OPS-008 files
- Dependency audit: six pre-existing advisories, including three high-severity advisories in Next.js, Nodemailer, and `ws`; no dependencies changed in OPS-008

Screenshots are indexed in `output/playwright/ops-008/README.md`.

## Shared-layout public regression

Verified on 2026-07-16 against the OPS-008 production build (`next build` plus `next start`) with Chromium 149 at 1440×1000 desktop and 390×844 mobile.

| Surface | Result | Evidence |
| --- | --- | --- |
| Home | Pass | `/` returned 200; title, H1, navigation, footer, Google Analytics loader, and inline configuration rendered; no framework error overlay. |
| Booking | Pass | `/booking` returned 200; booking H1, navigation, footer, Google Analytics loader, and inline configuration rendered. |
| Content page | Pass | `/blog/ai-cost-roi-breakdown` returned 200; article H1, navigation, footer, Google Analytics loader, and inline configuration rendered. |
| Navigation | Pass | Desktop Services link navigated from `/` to `/services`; the destination main content, navigation, and footer remained visible. |
| Footer | Pass | Footer rendered on all three sampled pages; `Reduce Motion` toggled `html.reduce-motion` and changed its label to `Enable Motion`. |
| Sticky CTA | Pass | At 390×844, the booking CTA began below the viewport with a 44px Y transform and moved to the visible bottom edge after scrolling beyond the hero. |
| Exit intent | Pass | Dialog stayed closed before arming, then opened after 12.2 seconds when a top-edge mouse leave was dispatched; its expected heading rendered. |
| Page transitions | Pass | On navigation to `/services`, the public template advanced from partial opacity/positive Y translation to opacity 1 and no transform. |
| Reduced motion | Pass | With `prefers-reduced-motion: reduce`, the media query matched, `html.reduce-motion` was applied, main content remained visible, and the template wrapper had no opacity/transform animation and a 0s transition. |
| Google Analytics outside Scorecard | Pass | `gtag.js?id=G-BE7FHSSCP8`, `#google-analytics`, and the loader request were observed on `/`, `/booking`, and the sampled content page. Analytics configuration was not changed. |

Current production already emits Content Security Policy errors that block the Cal.com frame and Google Analytics collection request, while the local production-mode booking test emitted a Cal.com service-worker permission error in headless Chromium. These are existing third-party/CSP observations, not changes introduced by the shared-layout refactor. OPS-008 does not alter CSP, analytics, Cal.com, integrations, or production configuration.

The managed Browser path blocked localhost with `ERR_BLOCKED_BY_CLIENT`, so the rendered regression used the repository's existing Playwright dependency and the installed Chromium runtime. No dependency declarations or lockfile entries changed.

## Existing Vercel deployment behavior

- **Merging to `main` triggers a production deployment:** yes, under the existing Vercel Git integration.
- **Mechanism:** the repository is connected through **Vercel for GitHub**. On the OPS-008 head, `vercel[bot]` posted the Ready preview deployment and GitHub recorded a successful `Vercel` commit status pointing to the same deployment. No GitHub Actions deployment workflow, `vercel.json`, `.vercel` project file, or repository deploy-hook configuration exists in this branch.
- **Production behavior:** Vercel for GitHub deploys branch pushes as previews and automatically creates/promotes a production deployment when changes reach the configured production branch, which for this repository is `main`. See the existing [Vercel Git deployment behavior](https://vercel.com/docs/git) and [Vercel for GitHub mechanism](https://vercel.com/docs/git/vercel-for-github).
- **Change boundary:** no Vercel setting, deployment protection, production branch, project configuration, GitHub integration, or production configuration was inspected through mutation or changed.

## Scorecard production and preview boundary

| Check | Result | Evidence |
| --- | --- | --- |
| Production build route | Pass | `GET /internal/ai-opportunity-scorecard` returned HTTP 404 under `next start`; Scorecard UI did not render. |
| Production build network | Pass | A fresh browser context recorded 24 same-origin document/chunk requests and zero external requests; Google Analytics was absent. |
| Vercel preview access | Pass | The exact `vercel[bot]` preview returned 302 to Vercel SSO, then 307 to Vercel login; the final page was `Login – Vercel`, not the Scorecard. |
| Vercel preview network | Pass | No Scorecard UI and no Google Analytics, assessment API, Cal webhook, Cal.com, Supabase, Stripe, Resend, or other Scorecard app/integration request occurred before authentication. |

The Vercel preview is therefore inaccessible to an unauthenticated reviewer before application code executes. Its project-level deployment protection was not changed.

## Correction-pass commands

```text
npm run test:scorecard   # 12/12 passed
npm run typecheck        # passed
npm run build            # passed; 48/48 static pages generated
next start               # /, /booking, and content sample 200; Scorecard 404
Playwright regression    # desktop, mobile, exit intent, transitions, reduced motion, analytics, and network boundary passed
```

## Launch-readiness checklist

- [ ] Approve final public name and promise.
- [ ] Approve real-user fields and prohibit sensitive free text.
- [ ] Approve consent, privacy, retention, deletion, and incident terms.
- [ ] Approve final CTA hierarchy and pricing language.
- [ ] Resolve dependency audit advisories before wider exposure.
- [ ] Approve analytics events and activation.
- [ ] Approve any form, email, CRM, booking, or payment integration separately.
- [ ] Approve public route exposure, indexing, deployment, and real-user testing.
- [ ] Approve evidence and public-claim language.
- [ ] Complete a controlled internal usability review with synthetic data.

## Exact next controlled task

Create OPS-009 for a bounded internal usability review using synthetic fixtures only. Reviewers may test clarity, keyboard flow, mobile layout, result comprehension, and route agreement. OPS-009 must not enable deployment, real-user data, external analytics, sending, CRM, booking, payments, or active CTAs.
