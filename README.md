# ProGrade Cleanouts — Next.js Site

A hyper-local-SEO junk removal site for ProGrade Cleanouts (Hampton Roads, VA),
modeled on the same data-driven structure we used for The Junk Lord.

## What's here

- **38 pages total**, all generated from data files:
  - Home, Services overview, Service Areas hub, Pricing, FAQ, Testimonials, Get a Quote, About, Contact
  - **16 service pages** (`/services/[slug]`) from `lib/services.ts`
  - **14 city pages** (`/service-areas/[slug]`) from `lib/cities.ts`
  - **Grizzly Dumpster Bags** page (`/services/grizzly-dumpster-bags`), single $299 combo
- LocalBusiness schema, sitemap.xml, robots.txt
- Mobile sticky Call / Quote bar
- Tailwind styling

## Single source of truth

Edit these three files and every page updates automatically:

- `lib/site.ts` — phone, email, hours, region, image URLs, pricing tiers
- `lib/services.ts` — add/edit a service (becomes a page automatically)
- `lib/cities.ts` — add/edit a city (becomes a page automatically)

## Photos

The current images point at the live site's Cloudflare CDN so the site looks
complete immediately. To swap in new photos: drop files in `public/images/`
and update the URLs in `lib/site.ts` → `site.images`. See `public/images/README.md`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (run this before deploying)
```

## Ship it (GitHub → Vercel)

From this project folder in your terminal:

```bash
# 1. Install + verify it builds
npm install
npm run build

# 2. Initialize git and push to GitHub
git init
git add .
git commit -m "Initial ProGrade Cleanouts site"
gh repo create prograde-cleanouts --public --source=. --push
# (or: create the repo on github.com, then git remote add origin <url> && git push -u origin main)

# 3. Deploy to Vercel
vercel            # link + preview deploy
vercel --prod     # production deploy
```

Vercel auto-detects Next.js — no config needed. After the first deploy,
every `git push` to main auto-deploys.

## Before launch — checklist

- [ ] Confirm phone `(518) 833-9416` is correct in `lib/site.ts`
- [ ] Swap CDN image URLs for real files in `public/images/`
- [ ] Wire the quote form to a real endpoint (Formspree / GoHighLevel) —
      currently it falls back to a mailto link in `app/get-a-quote/page.tsx`
- [ ] Point the `progradecleanups.com` domain at Vercel
- [ ] Update `site.url` in `lib/site.ts` if the domain changes
