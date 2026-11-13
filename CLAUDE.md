# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal portfolio site for Mohamed Aziz Mkadmini (live at https://mohamedazizmkadmini.vercel.app/). Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 3, Framer Motion. No database, no auth — the only server code is the contact form endpoint.

## Commands

```bash
npm run dev        # dev server on http://localhost:3000
npm run build      # production build
npm run lint       # eslint, fails on any warning (--max-warnings 0)
npm run typecheck  # tsc --noEmit
```

There is no test suite. `DEPLOYMENT.md` asks for `npm run lint` and `npm run build` to pass before deploying.

Copy `.env.local.example` to `.env.local` for local work. All `NEXT_PUBLIC_*` variables have fallbacks in `src/lib/site.ts`; only `RESEND_API_KEY` is required, and only for the contact form to deliver mail.

## Architecture

### Content lives in three files, not in components

- `src/lib/site.ts` — identity and outbound links (email, LinkedIn, GitHub, WhatsApp, resume, booking), each overridable by a `NEXT_PUBLIC_*` env var. Also feeds metadata, sitemap and JSON-LD. The `services` array exported here is not used by the UI; the Services section renders `t.services.items` from the messages file.
- `src/lib/projects.ts` — the `projects` array: slug, stack, URLs, images, video. Its text fields (`type`, `summary`, `problem`, `impact`, `solution`, `highlights`, `outcomes`) are only a fallback.
- `src/lib/i18n/messages.ts` — every UI string in English and French, typed by a single `Dict`. `projectFields[slug]` holds the localized text for each project and overrides the fields in `projects.ts`.

**Adding or editing a project touches both files:** the entry in `projects.ts` plus a `projectFields[slug]` block in *both* the `en` and `fr` dictionaries. Likewise any new UI string must be added to the `Dict` type and to both locales, or typecheck fails.

### i18n is client-side only

There are no locale routes. `LocaleProvider` (`src/lib/i18n/LocaleProvider.tsx`) wraps the app in `layout.tsx`, renders French first, then on mount switches to the `portfolio-locale` value in localStorage or the browser language. Components read strings through `const { t, locale } = useLocale()`, so anything showing translated text must be a client component (`"use client"`). Server-rendered metadata in `layout.tsx` is static and comes from `site.ts`.

### Pages

- `/` (`src/app/page.tsx`) stacks the section components from `src/components/sections/` in order.
- `/projects` reuses the same `Projects` and `Contact` sections; there are no per-project routes — each case study is rendered inline by `Projects.tsx`.
- Navigation uses hash links to section ids (`/#services`, `#contact`, …), so keep section `id`s stable.

### Contact form

`ContactForm.tsx` posts to `src/app/api/contact/route.ts`, which validates with zod, applies an in-memory per-IP rate limit (5 requests / 10 min, reset on every cold start), HTML-escapes the input and sends through Resend. Env: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.

### Styling and motion

- Dark theme only. Colors are RGB-triplet CSS variables in `src/app/globals.css` (`--surface`, `--accent`, …) exposed as Tailwind colors (`bg-surface`, `text-accent`) in `tailwind.config.ts`. Fonts are Manrope (`font-sans`) and Sora (`font-display`) via `next/font`.
- Use the wrappers in `src/components/Motion.tsx` (`FadeIn`, `Stagger`, `StaggerItem`) for scroll animations; they already honor `prefers-reduced-motion`.
- `Projects.tsx` maps stack labels to brand icons by keyword (`stackIconByKeyword`); add an entry there when a new technology should show an icon.

### Assets and security headers

- Served assets live in `public/<project>/`. The root-level `kaizen/`, `shopify/`, `Nailsscan pro/` folders, `imageprofil.png` and the CV PDF are original source captures, not referenced by the site.
- `next.config.ts` sets a strict CSP (`default-src 'self'`, `media-src 'self'`, `form-action 'self'`) and only allows `images.unsplash.com` for remote `next/image`. Embedding third-party scripts, iframes, videos or fonts requires updating the CSP there.

## Misleading docs

`README.md` and `README1.md` describe other projects (the Kaizen SaaS and NailScan Pro: Prisma, NextAuth, Paddle). They do not describe this repository — ignore them when reasoning about this codebase. The short `readme` file is the actual project blurb.
