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
