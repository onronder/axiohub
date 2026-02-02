

# Fix Pricing Cards: Unified Expand & Badge Visibility

## Problems Identified

### 1. Expand Button Shows Generic "+X more" Instead of Actual Features
Currently each card shows "+6 more features", "+4 more features" etc. You want each card to show the **actual extra feature names** in the collapsed state, and when any card's expand button is clicked, **all three plans expand together**.

### 2. "Most Popular" Badge Still Clipped
The badge at `-top-3` is still being cut off. The current `pt-4` on the grid container isn't enough because the parent section has `overflow-hidden`.

---

## Implementation Plan

### File: `src/components/landing/PricingSectionSimplified.tsx`

**A. Change State to Boolean (Global Expand)**

```typescript
// Line 94: Change from per-plan expand to global expand
const [isExpanded, setIsExpanded] = useState(false);
```

**B. Update Toggle Function**

```typescript
// Line 106-111: Simplified toggle
const toggleExpand = () => {
  trackEvent('pricing_expand', { expanded: !isExpanded });
  setIsExpanded(!isExpanded);
};
```

**C. Update Feature Display Logic**

```typescript
// Line 165: Use global isExpanded instead of per-plan
{(isExpanded ? plan.allFeatures : plan.features).map((feature) => (
```

**D. Show Actual Extra Features in Button Text**

Instead of "+6 more features", show the first 2-3 extra feature names:

```typescript
// Lines 173-180: Replace button content
{plan.allFeatures.length > plan.features.length && (
  <button
    onClick={toggleExpand}
    className="text-sm text-primary hover:text-primary/80 mb-3 md:mb-4 flex items-center gap-1 transition-colors touch-manipulation min-h-[44px]"
  >
    {isExpanded 
      ? 'Show less' 
      : `+ ${plan.allFeatures.slice(plan.features.length).slice(0, 2).join(', ')}${plan.allFeatures.length - plan.features.length > 2 ? '...' : ''}`
    }
  </button>
)}
```

**E. Fix Badge Clipping - Remove overflow-hidden from Section**

```typescript
// Line 114: Remove overflow-hidden
<section className="py-20 md:py-32 bg-background relative">
```

---

## Summary

| Change | Location | Description |
|--------|----------|-------------|
| Global expand state | Line 94 | `useState<string \| null>` → `useState(false)` |
| Toggle function | Lines 106-111 | Simplified to toggle boolean |
| Feature display | Line 165 | Use `isExpanded` instead of per-plan check |
| Button text | Lines 173-180 | Show actual feature names instead of "+X more" |
| Badge clipping | Line 114 | Remove `overflow-hidden` from section |

This ensures:
- Each card shows meaningful preview of extra features
- Clicking any "expand" toggles all three plans together
- The "Most Popular" badge is fully visible

