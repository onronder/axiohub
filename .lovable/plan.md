

# Google Search Console SEO Fixes

## Analysis of the 3 Issues

### Issue 1: "Page with redirect" (3 pages)
This is almost certainly caused by **trailing slash** redirects. Lovable's hosting serves SPAs and typically redirects `/features/` → `/features`. If Google crawls URLs with trailing slashes (from internal links or sitemap), it sees a 301 redirect and reports these as "Page with redirect."

Additionally, the `BlogPost.tsx` component does a client-side `<Navigate to="/blog" replace />` for invalid slugs — this could contribute if Google crawls a non-existent blog slug.

### Issue 2: "Excluded by 'noindex' tag" (2 pages)
The codebase has NO `noIndex={true}` usage anywhere. This means these are likely:
- The Lovable preview URL (`id-preview--*.lovable.app`) which has noindex injected by Lovable's hosting
- Or old cached pages that previously had noindex

No code change needed — just verify in GSC which exact URLs are affected and exclude the preview domain.

### Issue 3: "Crawled - currently not indexed" (1 page)
This is Google's editorial decision — the page was crawled but Google chose not to index it (thin content, low value signal, or new page). Common for legal pages like `/terms` or `/privacy`.

**Fix**: Improve internal linking to these pages and ensure they have unique, rich content signals.

---

## Implementation Plan

### 1. Add trailing slash canonical normalization (prevent redirect indexing)

**File: `src/components/SEO.tsx`**

Add logic to strip trailing slashes from canonical URLs to ensure Google always sees the clean URL. Also add an explicit `<link rel="canonical">` on every page (currently only added when `canonical` prop is provided — make it always present using `window.location.pathname` as fallback).

### 2. Update `index.html` — add explicit canonical for homepage

**File: `index.html`**

Add `<link rel="canonical" href="https://axiohub.io/" />` to the static HTML head so crawlers that don't execute JS still get a canonical signal.

### 3. Add `noindex` to the 404 page

**File: `src/pages/NotFound.tsx`**

Add `<SEO noIndex={true} title="Page Not Found" />` to prevent 404 pages from being submitted/indexed.

### 4. Update sitemap `<lastmod>` dates to current date

**File: `public/sitemap.xml`**

Update all `<lastmod>` to `2026-03-08` (today) since content was just updated. Stale lastmod dates signal to Google that pages haven't changed, reducing crawl priority.

### 5. Improve internal linking signals

**File: `src/components/landing/Footer.tsx`**

Verify all key pages are linked from the footer (they likely already are). This helps Google discover and value pages.

---

## Summary

| Fix | File | Purpose |
|-----|------|---------|
| Canonical normalization | `src/components/SEO.tsx` | Strip trailing slashes, always emit canonical |
| Static canonical | `index.html` | Canonical for JS-disabled crawlers |
| 404 noindex | `src/pages/NotFound.tsx` | Prevent 404 indexing attempts |
| Sitemap freshness | `public/sitemap.xml` | Update all lastmod to 2026-03-08 |

### What NOT to change
- "Excluded by noindex" — likely Lovable preview URLs, not your production domain. Verify in GSC which exact URLs are flagged.
- "Crawled not indexed" — content quality signal; no code fix. Consider adding more internal links to the affected page and resubmitting in GSC.

