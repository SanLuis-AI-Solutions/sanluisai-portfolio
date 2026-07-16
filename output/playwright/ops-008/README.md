# OPS-008 Screenshot Evidence

Generated locally by `npm run review:scorecard`.

## Result routes

Each of the seven reviewed routing cases has a desktop and mobile capture:

- `desktop-case-1.png` through `desktop-case-7.png`
- `mobile-case-1.png` through `mobile-case-7.png`

## Validation states

- `desktop-validation-error.png`
- `mobile-validation-error.png`

The browser review also verifies inert CTAs, no prohibited personal-data controls, labels, keyboard completion, reduced-motion behavior, and zero external network requests from the Scorecard route.

## Shared-layout correction handoff

Correction pass completed 2026-07-16 without changing dependencies, Vercel settings, production configuration, analytics configuration, credentials, integrations, or route exposure.

### Public regression

- Home, booking, and `/blog/ai-cost-roi-breakdown`: HTTP 200 with meaningful content, navigation, footer, and no framework overlay.
- Navigation: `/` → `/services` completed and retained the shared shell.
- Page transition: observed partial opacity/Y translation at navigation start and opacity 1/no transform after settlement.
- Footer motion control: toggled `html.reduce-motion` and updated its accessible label.
- Mobile sticky CTA: moved from 44px below the viewport to the visible bottom edge after the hero.
- Exit intent: stayed closed before arming and opened after 12.2 seconds plus a top-edge mouse leave.
- Reduced motion: media query matched, main content stayed visible, and the template wrapper used no transform/opacity animation.
- Google Analytics: public pages rendered the existing loader and inline configuration and initiated the existing loader request.

The current production booking page has pre-existing CSP errors for Cal.com framing and Google Analytics collection; the local headless run logged a Cal.com service-worker permission error. These are recorded as existing observations only. No CSP, analytics, or integration configuration was changed.

### Private-route boundary

- Production build: Scorecard returned HTTP 404, rendered no Scorecard UI or Analytics script, and made zero external requests in a fresh browser context.
- Vercel preview: the exact `vercel[bot]` URL redirected 302 → Vercel SSO, 307 → Vercel login, and never rendered the Scorecard or called any app/integration surface.

### Deployment evidence

- `vercel[bot]` created the branch preview and GitHub recorded a successful `Vercel` status for commit `4648c82bc6464d6757c197f09a464d46c158e67a`.
- The existing mechanism is Vercel for GitHub: branch pushes create previews and a merge to the configured production branch (`main`) creates/promotes a production deployment.
- No repository deployment workflow, `vercel.json`, `.vercel` project file, or deploy-hook configuration was found or added.

### Environment and checks

- Chromium 149; desktop 1440×1000; mobile 390×844.
- Managed Browser localhost access was blocked by `ERR_BLOCKED_BY_CLIENT`; the repository's existing Playwright package was used as the rendered-test fallback.
- `npm run test:scorecard`: 12/12 passed.
- `npm run typecheck`: passed.
- `npm run build`: passed; 48/48 static pages generated.
