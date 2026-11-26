# ClastarHub Complete Platform Development Roadmap

## Product direction
Build ClastarHub as a complete digital technology company platform while preserving the approved editorial design: warm paper backgrounds, charcoal/ash surfaces, ember-orange accents, restrained cyan where appropriate, Caveat/Kalam/Patrick Hand/Permanent Marker/Rock Salt handwritten accents, and a clean sans-serif for body copy and controls.

## Delivery principles
- Work on feature branches and preview deployments. Do not deploy to production without explicit approval.
- Reuse the current Vite + React + TypeScript application before considering a framework migration.
- No fake integrations, testimonials, metrics, customer records, or live-service claims.
- Clearly label prototypes and demo records.
- Server-side authorization is mandatory for client, CMS, file, and lead data.
- Respect reduced-motion preferences and mobile performance.

## Phase 1 — Design system and experience
- [x] Existing editorial and handwritten visual system retained.
- [x] Existing motion, scroll reveal, progress and interaction utilities retained.
- [ ] Audit duplicate CSS and consolidate tokens without changing approved appearance.
- [ ] Add automated visual and responsive regression checks.
- [ ] Add keyboard/focus and reduced-motion acceptance checks.

## Phase 2 — Public company experience
- [x] Company, projects, services, insights, case studies, FAQ and informational pages exist in the preview branch.
- [x] Project catalogue and media galleries are represented.
- [ ] Verify all route links, page metadata, sitemap and canonical URLs.
- [ ] Add real content review for all project statuses and external destinations.
- [ ] Complete privacy, terms and cookie documents with jurisdiction-specific legal review.

## Phase 3 — Marketing and enquiries
- [x] Project brief builder and contact pathways exist in the website.
- [ ] Implement server-side enquiry endpoint and database persistence.
- [ ] Add admin lead pipeline and audit trail.
- [ ] Configure verified email delivery and delivery monitoring.
- [ ] Add newsletter provider, double opt-in and unsubscribe handling.
- [ ] Add consent-aware campaign attribution and conversion analytics.

## Phase 4 — Client portal
- [x] Client portal experience shell and information architecture added in this branch.
- [ ] Configure authentication provider and account recovery.
- [ ] Implement tenant/client membership model and server-side authorization.
- [ ] Implement projects, milestones, tasks, messages, notifications and approvals.
- [ ] Implement private object storage with signed, expiring download URLs.
- [ ] Add audit logs and authorization tests.

## Phase 5 — Clastar AI
- [x] AI workspace entry point and intended use cases documented in this branch.
- [ ] Select AI provider/model and configure secrets server-side.
- [ ] Build grounded retrieval from approved company content.
- [ ] Implement brief generation, usage limits, rate limiting and abuse controls.
- [ ] Add feedback, escalation and data-retention controls.
- [ ] Test prompt injection, hallucination, privacy and cost boundaries.

## Phase 6 — CMS
- [x] CMS workspace concept and editorial queue represented in this branch.
- [ ] Implement role-based author/editor/admin access.
- [ ] Implement article/project/case-study CRUD, drafts, review, scheduling and publishing.
- [ ] Add media library, validation, revisions and rollback.
- [ ] Add preview, SEO metadata, canonical URLs and sitemap regeneration.

## Phase 7 — Clastar Labs
- [x] Labs page/workspace concept and experiment lifecycle represented in this branch.
- [ ] Implement experiment records, categories, status, demos and release notes.
- [ ] Add admin editing and public feedback capture.
- [ ] Distinguish concept, prototype, experimental, beta, released and archived items.

## Phase 8 — Growth and platform quality
- [ ] Configure privacy-aware analytics and conversion events.
- [ ] Add error monitoring, uptime checks and alert routing.
- [ ] Add security headers, rate limits, dependency scanning and backups.
- [ ] Add accessibility and performance budgets.
- [ ] Add PWA support only after offline requirements are defined.
- [ ] Run end-to-end tests for enquiry, client, CMS, AI and Labs journeys.

## External prerequisites
Live authentication, database, storage, email, newsletter, AI and analytics services require provider selection, credentials, configuration and security review. This repository branch does not claim those integrations are active.

## Release gate
A feature is production-ready only after build and tests pass, permissions are verified, error states are handled, mobile/accessibility checks pass, and the preview has been explicitly approved.
