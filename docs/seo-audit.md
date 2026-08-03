# SEO Audit — pradx.in

**Date:** 2026-08-03
**Scope:** Technical SEO of the PRADXCLUSIVE Next.js App Router site.
**Method:** Audit against the `nextjs-seo` skill checklist, source review, and build verification.

---

## Summary

The site has a strong technical SEO foundation: fully static rendering, complete
metadata on every route, canonicals everywhere, valid robots + sitemap, and a
rich set of JSON-LD structured data. This pass added **generated Open Graph
images** (home + every project) and **icon file conventions**, and removed the
now-redundant metadata entries so the head contains no duplicate tags.

**Status by category:**

| Category | Status |
|---|---|
| Technical foundation | ✅ Solid (one optional cleanup left) |
| Rendering | ✅ SSG everywhere, `next/font`, `next/image` |
| Structured data | ✅ Strong (Org/Person/WebSite/FAQ/Profile/Breadcrumb/CreativeWork) |
| Open Graph & Social | ✅ Fixed this pass (generated 1200×630 images) |
| Icons / favicon | ✅ Fixed this pass (`icon.tsx` / `apple-icon.tsx`) |
| Core Web Vitals | ⚠️ Needs field measurement (see below) |

---

## ✅ Passing

### Technical foundation
- `metadataBase` set to `https://pradx.in` in the root layout.
- Title template (`%s | PRADXCLUSIVE®`) + unique title/description on every page:
  home, 8 project pages (`generateMetadata`), privacy, terms.
- `robots.ts` present, allows crawling, declares the sitemap. Nothing blocks
  `/_next/`. `/api/*` is kept out of the index via an `X-Robots-Tag: noindex`
  header in `next.config.ts` (better than robots.txt disallow for hygiene).
- `sitemap.ts` present, lists home + 8 projects + privacy + terms.
- Self-referencing `alternates.canonical` on every route.
- `lang="en"` on `<html>`.
- Security headers added in `next.config.ts` (HSTS, nosniff, referrer-policy,
  permissions-policy, CSP) — non-ranking but good hygiene; CSP `img-src 'self'
  data:` permits the data-URI images used by the generated OG/icon images.

### Rendering
- All indexable pages are statically generated (SSG) — content is in the initial
  HTML, no client-side-only SEO text.
- Fonts via `next/font` (Inter + DM Serif Display), images via `next/image`.
- `/projects` 301-redirects to `/#work`.

### Structured data (JSON-LD via a shared `JsonLd` component)
- **Home / root layout:** `@graph` with `Person` (founder), `Organization`
  (absolute logo URL, email, founder reference, `areaServed`, slogan), and
  `WebSite` (publisher reference) — all cross-linked via `@id`.
- **Home:** `FAQPage` (5 questions — AI-search/LLM citation signal) and
  `ProfilePage`.
- **Project pages:** `BreadcrumbList` + `CreativeWork` (name, description,
  image, category, author/publisher/isPartOf references).
- **Privacy / Terms:** `BreadcrumbList`.

### Open Graph & Social (fixed this pass)
- Root: `src/app/opengraph-image.tsx` generates a branded 1200×630 card
  (lockup, motto, studio descriptor) via `ImageResponse` — emits
  `og:image` + `:type/:width/:height/:alt`.
- Projects: `src/app/projects/[slug]/opengraph-image.tsx` generates a per-project
  1200×630 card (category, project name, disciplines) — statically generated at
  build for all 8 slugs.
- Twitter cards fall back to `og:image` (`summary_large_image` retained).
- Removed the old hard-coded `openGraph.images` / `twitter.images` entries so the
  head has exactly one `og:image` per page (file conventions take priority).

### Icons / favicon (fixed this pass)
- `src/app/icon.tsx` (512×512) and `src/app/apple-icon.tsx` (180×180) generate
  the emerald logo on the brand dark background via `ImageResponse`. Removed the
  previous 1807×1716 (102 KB) PNG referenced through metadata `icons`.

### PWA / completeness
- `app/manifest.ts`, `not-found.tsx`, `error.tsx` present. (Manifest is PWA
  nicety, no ranking effect.)

---

## ⚠️ Recommended but not applied

These are safe, low-risk refinements that were **not** part of this change set.
Apply them if/when you want:

1. **Remove the `keywords` meta field** in `src/app/layout.tsx`. Google has
   ignored it for years — it is noise, not a signal.
2. **Add an explicit `viewport` export** in `src/app/layout.tsx` with
   `themeColor` (brand emerald `#2d7a4f` / dark `#0a0a0a`). Viewport must be a
   separate export (it cannot live inside `metadata`); the current default is
   fine, this just adds browser-theme polish.
3. **Sitemap `lastModified`:** `src/app/sitemap.ts` currently uses
   `lastModified: new Date()`, which marks every URL "just changed" on every
   build — Google learns to ignore `lastmod`. Either drop `lastModified` or use
   stable dates (file mtimes, git dates).
4. **Drop `changeFrequency` / `priority`** from the sitemap — Google ignores
   both. (Harmless, just dead config.)
5. **Hero video** (`public/video/pradxclusive-hero-mobile.mp4`, ~2.5 MB) is the
   LCP candidate. Consider compressing it and/or adding a `poster` frame.
6. **Verify metadata for bots in production** before/after launch:
   ```bash
   curl -sA "Googlebot" https://pradx.in/ | grep -E '<title>|rel="canonical"|name="description"|property="og:image"'
   curl -sA "GPTBot" https://pradx.in/ | grep -E '<title>|rel="canonical"'
   ```
   Next.js 16.2.x has known PPR + streaming-metadata bugs that can drop
   `<title>`/canonical/description for some bots (vercel/next.js #93401, #95406).

---

## 🚀 Post-deploy verification checklist

- [ ] Submit `https://pradx.in/sitemap.xml` in Google Search Console.
- [ ] Run pages through the Rich Results Test (search.google.com/test/rich-results)
      — expect Organization, WebSite, FAQPage, BreadcrumbList, CreativeWork.
- [ ] Check OG previews (Facebook Sharing Debugger / opengraph.xyz) for the
      generated 1200×630 cards on home and a project page.
- [ ] Measure Core Web Vitals on **field** data via PageSpeed Insights
      (pagespeed.web.dev) — Lighthouse is lab-only and can't measure INP.
- [ ] Verify favicon appears in the browser tab and Google SERPs (it can take
      time to refresh).
- [ ] Search `site:pradx.in` a few weeks after launch; request indexing for key
      URLs via the URL Inspection tool (once is enough).
