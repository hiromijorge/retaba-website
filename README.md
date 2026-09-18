# RETABA Catering — Company Website

Marketing site for RETABA (PT. Receh Tapi Banyak), a Halal-certified corporate catering company.
Live at https://www.retaba.co.id, deployed on Vercel.

## Stack

- Next.js 16 (App Router, fully static output) · React 19 · TypeScript
- Tailwind CSS 3 · Framer Motion
- Images served from Cloudinary and optimised by `next/image`
- Vercel Analytics + Speed Insights (enable both in the Vercel project dashboard)

## Commands

```bash
npm run dev         # http://localhost:3000
npm run build       # production build (runs type check)
npm run lint        # ESLint (flat config in eslint.config.mjs)
npm run typecheck   # tsc --noEmit
npm run upload:cloudinary   # push images in public/food-images to Cloudinary (needs .env.local)
```

## Where things live

| What | File |
|------|------|
| Company facts: phone, email, WhatsApp link, service cities, cert number | `src/lib/site.ts` |
| Global metadata, fonts, layout shell | `src/app/layout.tsx` |
| Social share image (generated at build) | `src/app/opengraph-image.tsx` |
| Security headers, apex → www redirect, image hosts | `next.config.mjs` |
| Menu items (62) and client list | `src/data/menu.ts`, `src/data/clients.ts` |
| Brand colours | `tailwind.config.ts` |

Change contact details **only** in `src/lib/site.ts` — every page reads from it.

## Environment

Copy `.env.local.example` to `.env.local` and fill in the Cloudinary keys. They are only needed by the
upload script, not by the site itself.

## Before publishing content changes

- Testimonials in `src/data/clients.ts` must have written permission from the named company.
- Keep the service-city list in `src/lib/site.ts` in sync with what operations actually deliver.
