# Images

Drop your real photo files here, then update the URLs in `lib/site.ts`
(the `site.images` object) to point at `/images/your-file.jpg` instead
of the current Cloudflare URLs.

For service and city page photos, you can add a gallery image array to
`lib/services.ts` / `lib/cities.ts` and render it in the templates.

Current placeholders reference the live site's CDN images so the site
looks complete on first deploy. Swap them before the old site comes down.
