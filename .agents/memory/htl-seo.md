---
name: HTL SEO setup
description: How SEO, favicons, PWA, and structured data are wired for the htl-website artifact.
---

## SEO component

`artifacts/htl-website/src/components/SEO.tsx` — wraps `react-helmet-async` Helmet.
- Accepts: title, description, canonical, ogImage, ogType, noIndex, keywords, jsonLd
- Full title format: `"Page Title | Health Tech Liberia"` (homepage omits prefix)
- Default OG image: `/og-image.jpg` (1200×630, stored in `public/`)
- Default description set in component

## App wrapper

`App.tsx` wraps everything in `<HelmetProvider>` (outermost provider).

## Pages

All 18 pages in `src/pages/` import SEO and place `<SEO ... />` as first child inside the root div/element. Login + Register use `noIndex={true}`.

## Public assets

- `favicon.ico` — multi-size (16, 32, 48px) from HTL logo
- `favicon-16x16.png`, `favicon-32x32.png`
- `apple-touch-icon.png` (180×180)
- `android-chrome-192x192.png`, `android-chrome-512x512.png`
- `og-image.jpg` — 1200×630 from org group photo
- `site.webmanifest` — PWA manifest
- `sitemap.xml` — all public routes
- `robots.txt` — disallows /login, /register; references sitemap

**Why:** All icons generated from `attached_assets/1784331190411_1784331478727.jpg` (HTL logo, 715×505) using ImageMagick with navy `#0A2D7A` square background padding.

## index.html

Has full base-level metadata: OG, Twitter, all favicon links, manifest, JSON-LD Organization+WebSite schema. react-helmet-async overrides per page.
