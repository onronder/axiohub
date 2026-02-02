

## Landing Page Transformation: Category-Defining Enterprise AI Platform

### Overview
Transform the Axio Hub landing page from a generic knowledge tool into a **Category-Defining Zero-Retention AI Platform** with authoritative, enterprise-grade messaging. This involves fixing a build error, updating the Hero with new copy, replacing the current features section with Value Props, and creating a new Solutions Grid component.

---

### Phase 0: Fix Build Error (Required First)

**File: `src/lib/analytics.ts`**

The `QuickNavSection.tsx` imports `type UserType` which no longer exists. Add the type export:

```typescript
// Add at top of file
export type UserType = 'individuals' | 'teams' | 'enterprise';

// Update function to use the exported type
export const trackQuickNavClick = (userType: UserType) => {
  trackEvent('quicknav_click', { user_type: userType });
};
```

---

### Phase 1: Transform Hero Section

**File: `src/components/landing/HeroSection.tsx`**

Update with enterprise-focused copy:

| Element | Current | New |
|---------|---------|-----|
| H1 | "Your Knowledge, Unified" | "Deploy Enterprise AI. **Eliminate Data Liability.**" |
| Subheadline | "The AI that knows which source to trust." | "The world's first **Zero-Retention Agent**. We analyze your most sensitive financial and legal documents in volatile memory, deliver the insight, and then **cryptographically destroy** the source. Pure intelligence. Zero paper trail." |
| Primary CTA | "See How It Works" | "Deploy Your Ghost Agent" |
| Secondary CTA | (none) | "Read the Security Whitepaper" (links to /security) |

**Visual Enhancement**: Add a subtle file-to-binary animation near the CTA showing data destruction concept using Framer Motion.

---

### Phase 2: Create Value Props Section (Replace/Enhance Problem Section)

**File: `src/components/landing/ValuePropsSection.tsx` (New)**

Section header: "Why Risk Your IP with 'Private' Clouds?"

Three cards with hover glow effects:

| Card | Icon | Title | Body |
|------|------|-------|------|
| 1 | `Eraser` | Radical Ephemerality | "We don't just encrypt your data; we process it in **RAM-only SmartBuffers**. Once the task is done, the data is wiped from physical existence using DoD 5220.22-M standards. You can't leak what you don't hold." |
| 2 | `EyeOff` | Blind Indexing Engine™ | "Our 'Decoupled Search' technology indexes only the *stems* of words, never the sentences. We hold the map, but we can never see the territory. Your secrets remain mathematically invisible to us." |
| 3 | `Lock` | Fail-Closed Architecture | "Security isn't a setting; it's our physics. Without your encryption keys, the system physically cannot boot. If a threat is detected, the airlock seals instantly." |

Design: Glass-card styling with shield/lock glow on hover using `box-shadow` animation.

---

### Phase 3: Create Solutions Grid

**File: `src/components/landing/SolutionsGrid.tsx` (New)**

Section header: "Intelligence for the 'Do Not Leak' Economy"

Three industry cards:

| Industry | Headline | Copy | Tag |
|----------|----------|------|-----|
| Finance | The Ephemeral Analyst | "Ingest 100MB+ merger documents. Extract alpha. Destroy the evidence. Perfect for M&A due diligence where leaks cost millions." | Finance |
| Legal | The Clean-Room Associate | "Review privileged contracts without uploading them to a permanent cloud. Client privilege remains absolute, even against subpoenas." | Legal |
| R&D | The IP Guardian | "Accelerate drug discovery or engineering cycles. Query patent databases ensuring your trade secrets never leave the volatile session." | R&D |

---

### Phase 4: Update Page Structure

**File: `src/pages/Index.tsx`**

Reorganize sections for maximum impact:

```text
1. Header
2. HeroSection (transformed)
3. QuickNavSection (keep as-is for persona routing)
4. ValuePropsSection (NEW - replaces ProblemSectionSimplified)
5. SolutionsGrid (NEW - industry use cases)
6. GhostProtocolSection (enhanced security section)
7. LiveDemoStatic (keep)
8. PricingSectionSimplified (keep)
9. FinalCTASection (update copy to match tone)
10. Footer
```

---

### Phase 5: Design System Enhancements

**File: `src/index.css`**

Add new utility classes for the enterprise aesthetic:

```css
/* Secure gradient for "Eliminate Data Liability" */
.secure-gradient {
  background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Shield glow hover effect for value prop cards */
.shield-glow:hover {
  box-shadow: 
    0 0 30px hsla(var(--primary), 0.3),
    inset 0 0 20px hsla(var(--primary), 0.1);
}

/* Industry tag styling */
.industry-tag {
  @apply text-xs font-semibold px-3 py-1 rounded-full 
         bg-primary/10 text-primary border border-primary/20;
}
```

---

### Phase 6: Update Final CTA

**File: `src/components/landing/FinalCTASection.tsx`**

Match the authoritative tone:

| Element | Current | New |
|---------|---------|-----|
| Headline | "Ready to Unlock Your Knowledge?" | "Ready to **Deploy Without Liability**?" |
| CTA | "Start Your Free Trial" | "Deploy Your Ghost Agent" |

---

### Summary of Changes

| File | Change Type | Description |
|------|-------------|-------------|
| `src/lib/analytics.ts` | Modify | Add `UserType` export to fix build error |
| `src/components/landing/HeroSection.tsx` | Modify | New enterprise copy, dual CTAs, file destruction animation |
| `src/components/landing/ValuePropsSection.tsx` | Create | "Radical Ephemerality" value proposition cards |
| `src/components/landing/SolutionsGrid.tsx` | Create | Finance/Legal/R&D industry solutions |
| `src/pages/Index.tsx` | Modify | New section order with ValueProps and SolutionsGrid |
| `src/index.css` | Modify | Add secure-gradient, shield-glow, industry-tag utilities |
| `src/components/landing/FinalCTASection.tsx` | Modify | Update copy to match enterprise tone |

---

### Technical Notes

- **Font**: Inter is already configured in Tailwind (`fontFamily: { sans: ['Inter', ...] }`)
- **Responsive**: All new components will follow existing mobile-first patterns with `py-16 md:py-24` spacing
- **Analytics**: New CTAs will use existing `trackCTA` and `trackEvent` functions
- **Motion**: Use Framer Motion for animations (already installed)
- **Accessibility**: Maintain focus-visible styles and ARIA labels

