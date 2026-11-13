# Deployment Checklist

Use this checklist before publishing the portfolio to production.

## 1) Local environment

Create or update `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com

NEXT_PUBLIC_CONTACT_EMAIL=mkadmiaziz0203@gmail.com
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/mohamed-aziz-mkadmini-84b274221
NEXT_PUBLIC_GITHUB_URL=https://github.com/Aziz-Mkadmini

NEXT_PUBLIC_RESUME_URL=/cv-mohamed-aziz-mkadmini.pdf

# Optional
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/216XXXXXXXX
NEXT_PUBLIC_BOOK_CALL_URL=https://cal.com/your-link
NEXT_PUBLIC_KAIZEN_GITHUB_URL=https://github.com/Aziz-Mkadmini/your-kaizen-repo
```

## 2) Local verification

Run:

```bash
npm run lint
npm run build
```

Then verify in browser:

- `/` loads correctly
- Resume buttons open the PDF
- Navbar `Work` opens `/projects`
- LinkedIn / GitHub / Email links work
- `/projects` shows both projects and image galleries
- Mobile menu and buttons are usable

## 3) Production environment variables

In your hosting provider (Vercel/Netlify), add the same variables as `.env.local`.

Most important:

- `NEXT_PUBLIC_SITE_URL` must exactly match production URL
- `NEXT_PUBLIC_RESUME_URL` must point to a valid file or URL
- `NEXT_PUBLIC_BOOK_CALL_URL` should be set if you use a scheduling link
- `RESEND_API_KEY` must be added only in host secrets (never in GitHub code)

## 4) GitHub security before push

- Verify `.env.local` is never committed (already ignored by `.gitignore`)
- Keep `.env.local.example` with placeholders only (no real keys)
- Add repository secrets for CI/deploy instead of hardcoding values
- If a key was exposed previously, rotate it immediately in provider dashboard

## 5) Deploy

- Push to your main branch
- Trigger deployment from hosting dashboard (or CI)
- Re-test `/`, `/projects`, and contact links in production

## 6) Post-deploy quick QA

- OpenGraph title/description looks correct when sharing link
- No broken links in footer/contact
- CV download works from navbar, hero, and CTA
