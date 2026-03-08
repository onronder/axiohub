

# Add JSON-LD Structured Data to Solutions Pages + Update docs/sitetexts.md

## Task 1: Add Structured Data to 3 Solution Pages

Add `WebPage` + `BreadcrumbList` JSON-LD to each solution page, following the existing pattern used by other pages.

### File: `src/lib/structured-data.ts`

Add a new `getSolutionPageSchema` helper:

```ts
export const getSolutionPageSchema = (name: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": name,
  "description": description,
  "url": url,
  "provider": { "@id": `${BASE_URL}/#organization` },
  "isPartOf": { "@id": `${BASE_URL}/#website` }
});
```

### File: `src/pages/solutions/Teams.tsx`

Import `getBreadcrumbSchema` and `getSolutionPageSchema`. Add structured data:
- BreadcrumbList: Home > Solutions > Teams
- WebPage schema with the page title/description

Pass as `structuredData={[breadcrumbData, pageSchema]}` to `<SEO>`.

### File: `src/pages/solutions/Individuals.tsx`

Same pattern — BreadcrumbList (Home > Solutions > Individuals) + WebPage schema.

### File: `src/pages/solutions/Enterprise.tsx`

Same pattern — BreadcrumbList (Home > Solutions > Enterprise) + WebPage schema.

---

## Task 2: Update `docs/sitetexts.md`

Sync the documentation to reflect all recent changes:

1. **Trust Bar** (line 34-36): `SOC 2 Type II — Architecture Ready` and `HIPAA-Ready Architecture`
2. **Solo Analysts section** (lines 80-106): Replace "Digital Burner Mode" → "Ephemeral Analysis Mode", "whistleblowers" → "independent consultants, legal professionals, research analysts", "leaked documents" → "confidential research, competitive analysis, and sensitive document review"
3. **Teams section** (lines 117, 125, 131): Replace subpoena language with "Minimal Discovery Surface" wording
4. **Enterprise section** (lines 146, 154, 162): "Kill Switch" → "Emergency Data Purge"
5. **SEO Metadata table** (lines 282-291): Update titles/descriptions to match current SEO props
6. **Default Keywords** (line 299): `HIPAA AI` → `HIPAA-Ready AI`
7. **Pricing table** (line 312): "Kill Switch" → "Emergency Data Purge"
8. **Compliance Badges** (lines 253-257): Update SOC 2 and HIPAA labels
9. **Quick Nav** (line 48): "Digital burner mode" → "Ephemeral analysis mode"

