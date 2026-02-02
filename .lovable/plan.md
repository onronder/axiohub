
# Fix Pricing Data & UI Badge Clipping

## Problems Identified

### 1. Pricing Data Incorrect
The `PricingSectionSimplified.tsx` on the home page shows wrong pricing:

| Plan | Current (Wrong) | Correct |
|------|-----------------|---------|
| Starter | $0/month | $4.99/month |
| Pro | $30/month | $29/month |

Features are also missing/incorrect based on your provided spec.

### 2. "Most Popular" Badge Cut Off
The badge uses `absolute -top-3` positioning, but the parent grid or section has `overflow-hidden`, which clips the top of the badge.

---

## Implementation Plan

### File 1: `src/components/landing/PricingSectionSimplified.tsx`

**A. Fix Starter Plan (lines 7-32):**
```typescript
{
  name: 'Starter',
  description: 'Perfect for individuals and small projects',
  price: '$4.99',
  period: '/month',
  features: [
    '50 files, 100 MB storage',
    '5 connected data sources',
    '1M AI tokens/month',
    'Axio Fast ⚡ AI model',
  ],
  allFeatures: [
    '50 files, 100 MB storage',
    '5 connected data sources',
    '1M AI tokens/month',
    'Axio Fast ⚡ AI model',
    'All 12 connectors (except S3)',
    'Ghost Protocol security',
    'Hybrid AI search',
    'Source citations',
    'Web crawling',
    'Community support',
  ],
  cta: 'Get Started',
  ctaUrl: 'https://app.axiohub.io/register?plan=starter',
  isExternal: true,
  popular: false,
}
```

**B. Fix Pro Plan (lines 33-58):**
```typescript
{
  name: 'Pro',
  description: 'For professionals and growing teams',
  price: '$29',
  period: '/month',
  features: [
    '2,000 files, 10 GB storage',
    '100 data sources',
    '10M AI tokens/month',
    'Axio Pro 🧠 + Fast ⚡ AI',
  ],
  allFeatures: [
    '2,000 files, 10 GB storage',
    '100 connected data sources',
    '10M AI tokens/month',
    'Axio Pro 🧠 + Fast ⚡ AI',
    'Team collaboration (5 members)',
    'Priority support',
    'API access',
    'Everything in Starter',
  ],
  cta: 'Start Free Trial',
  ctaUrl: 'https://app.axiohub.io/register?plan=pro',
  isExternal: true,
  popular: true,
}
```

**C. Fix Enterprise Plan (lines 59-86):**
```typescript
{
  name: 'Enterprise',
  description: 'For organizations at scale',
  price: 'Custom',
  period: '',
  features: [
    '100,000 files, 1 TB storage',
    '1,000 data sources',
    '100M AI tokens/month',
    '100 team members',
  ],
  allFeatures: [
    '100,000 files, 1 TB storage',
    '1,000 data sources',
    '100M AI tokens/month',
    '100 team members',
    'Amazon S3 connector',
    'DoD 5220.22-M secure wipe',
    'SSO & SAML',
    'Custom integrations',
    'Dedicated support + SLA',
    'Custom retention policies',
  ],
  cta: 'Contact Sales',
  ctaUrl: '/contact',
  isExternal: false,
  popular: false,
}
```

**D. Fix Badge Clipping (line 130):**
Add padding to the grid container to accommodate the badge overflow:
```tsx
// Change from:
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">

// Change to:
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto pt-4">
```

This adds top padding so the "Most Popular" badge isn't clipped.

---

## Summary

| Change | Location | Description |
|--------|----------|-------------|
| Starter price | Line 11 | $0 → $4.99 |
| Pro price | Line 37 | $30 → $29 |
| Feature lists | Lines 13-27, 38-53, 64-80 | Update to match real spec |
| Badge clipping | Line 130 | Add `pt-4` to grid container |

This ensures the pricing matches your actual product and the "Most Popular" badge displays correctly without being cut off.
