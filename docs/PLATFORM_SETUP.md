# ClastarHub Platform Setup

This repository contains the application and integration scaffolding. External accounts and secrets are intentionally not committed.

## 1. Supabase
1. Create a Supabase project.
2. Open SQL Editor and run `supabase/migrations/202611260001_platform_core.sql`.
3. In Project Settings > API, copy Project URL and anon key.
4. Add `SUPABASE_URL`, `SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` to Vercel. The service-role key is secret and server-only.
5. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` only if using the browser auth client.
6. Enable email authentication and configure redirect URLs for the preview and production domains.
7. Create the first staff user through Supabase Auth, then set that user's profile role to admin using the SQL editor:
   `insert into public.profiles(id,full_name,role) values ('AUTH_USER_UUID','ClastarHub Admin','admin') on conflict(id) do update set role='admin';`
8. Keep the client-files storage bucket private. Never make client deliverables public.

## 2. Vercel environment variables
Copy values from `.env.example` into Vercel Project Settings > Environment Variables. Configure Preview first; only promote values to Production after testing. Never put service-role or OpenAI secrets in variables prefixed with VITE_.

## 3. OpenAI
Create an API key and set `OPENAI_API_KEY`. Optionally set `OPENAI_MODEL` and `OPENAI_BASE_URL`. The assistant endpoint is `POST /api/assistant`. It uses a deliberately small approved company knowledge base; extend it with reviewed CMS retrieval before allowing answers from unpublished content.

## 4. API endpoints
- `POST /api/leads`: validates and stores project/contact enquiries.
- `POST /api/newsletter`: stores consented newsletter subscriptions. Double opt-in and unsubscribe email delivery still need to be connected to a verified email provider.
- `POST /api/assistant`: grounded company assistant; returns a clear not-configured response until the AI key is set.
- `GET /api/admin?resource=articles|labs|leads|projects`: staff-only list.
- `POST /api/admin?resource=articles|labs|leads|projects`: staff-only create.
- `PATCH /api/admin?resource=...&id=UUID`: staff-only update.
- `DELETE /api/admin?resource=...&id=UUID`: staff-only delete.
- `GET /api/portal`: authenticated project and milestone view.

Admin and portal endpoints require Supabase Auth access tokens in the Authorization Bearer header. Staff role is checked against public.profiles. Keep API secrets server-side.

## 5. Important production hardening
- Add rate limiting/WAF protection to public form and AI endpoints.
- Add CAPTCHA or another abuse control before public launch.
- Add verified Resend sender and double opt-in confirmation/unsubscribe flows.
- Add storage upload/download endpoints that validate project membership and issue short-lived signed URLs.
- Add automated tests for RLS, tenant isolation, staff roles, input validation and file access.
- Review privacy policy, terms, data retention and cookie consent with appropriate legal advice.
- Set APP_ORIGIN to the exact preview/production origin; do not leave wildcard CORS for production.
- Review and test SQL policies in a non-production Supabase project first.

## 6. Client authentication UI
The portal API expects a Supabase Auth access token. Connect the chosen Supabase browser auth flow to the sign-in page and pass the current session token to /api/portal. Do not store service-role credentials in the browser.
