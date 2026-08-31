# Production Domain Launch Checklist

This checklist covers all steps needed when the custom domain (`conversordevideo.com`) is purchased and DNS/production deployment is configured.

## Pre-Launch Prerequisites

- [ ] Purchase the `conversordevideo.com` domain from a registrar
- [ ] Set up DNS records pointing to Cloudflare Pages
- [ ] Add custom domain in Cloudflare Pages dashboard
- [ ] Verify SSL/TLS certificate is issued and active

## Canonicalization & Redirects

- [ ] Verify `SITE_CONFIG.url` in `src/lib/seo/meta.ts` is set to `https://conversordevideo.com`
- [ ] Add a 301 redirect from `conversordevideo.pages.dev/*` → `conversordevideo.com/*`
- [ ] Optionally add `X-Robots-Tag: noindex` header to `*.pages.dev` origin to prevent duplicate indexing
- [ ] Verify all canonical tags resolve to the custom domain (spot-check 5 pages)
- [ ] Verify all OG URLs (`og:url`) resolve to the custom domain
- [ ] Verify all JSON-LD schema `url` and `@id` fields resolve correctly

## Sitemap & robots.txt

- [ ] Verify `robots.txt` is accessible at `https://conversordevideo.com/robots.txt`
- [ ] Verify `Sitemap:` directive in `robots.txt` points to `https://conversordevideo.com/sitemap-index.xml`
- [ ] Verify sitemap XML files are accessible and valid
- [ ] Confirm sitemap lists only the custom domain URLs (not `pages.dev`)

## Google Search Console

- [ ] Add and verify `https://conversordevideo.com` property in Google Search Console
- [ ] Submit `sitemap-index.xml` to Search Console
- [ ] Submit `sitemap-0.xml` to Search Console
- [ ] Request indexing of the homepage and top 5 tool pages

## Structured Data Validation

- [ ] Run Google Rich Results Test on homepage (PT)
- [ ] Run Rich Results Test on 3 representative tool pages
- [ ] Run Rich Results Test on the `/ferramentas` directory page
- [ ] Run Rich Results Test on 1 localized page (e.g., `/en/`)
- [ ] Fix any warnings or errors found

## Cross-Origin Headers

- [ ] Verify `Cross-Origin-Opener-Policy: same-origin` header is present on custom domain
- [ ] Verify `Cross-Origin-Embedder-Policy: require-corp` header is present
- [ ] Test SharedArrayBuffer availability (required for multi-threaded FFmpeg)

## Post-Launch Monitoring (First 2 Weeks)

- [ ] Monitor indexation rate in Search Console daily for 14 days
- [ ] Check for crawl errors in Search Console
- [ ] Verify hreflang tags are recognized (International Targeting report)
- [ ] Monitor Core Web Vitals report for any regressions
- [ ] Verify the `pages.dev` origin is not being indexed (search `site:conversordevideo.pages.dev`)
- [ ] Test all 301 redirects from consolidated pages are working

## Final Smoke Test

- [ ] Load homepage on desktop Chrome, Safari, Firefox
- [ ] Load homepage on mobile Chrome (Android) and Safari (iOS)
- [ ] Run one video conversion end-to-end on the custom domain
- [ ] Verify language switcher works across all 9 locales
- [ ] Verify all navigation links resolve correctly
