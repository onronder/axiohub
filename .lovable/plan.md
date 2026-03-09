

# SEO Keyword Dominance Plan: "AI Agent", "RAG", "Employee Agent", "Zero Retention"

## Reality Check

Ranking top 3 for broad terms like "AI Agent" or "RAG" is extremely difficult — these are high-competition keywords dominated by Wikipedia, major AI companies, and tech media. However, we can realistically target **long-tail variants** and **compound phrases** that match your product positioning, which will also lift rankings for the broader terms over time.

## Current Gaps

| Target Keyword | Current Coverage | Problem |
|---|---|---|
| "AI Agent" | Barely mentioned; homepage says "Employee Agent" once | No dedicated page, not in titles/H1s |
| "RAG" / "Enterprise RAG" | In meta keywords and blog, but NOT in any H1 or page title | No pillar page targeting this term |
| "Employee Agent" | One mention in hero subtitle | Not in any title tag or H1 |
| "Zero Retention" | In meta descriptions, structured data | Not in any page title or H1 |

The homepage title is `Axio Hub | AI Knowledge Base - Chat with Documents` — none of your target keywords appear.

## Strategy: 4 Pillars

### Pillar 1: Optimize Existing Page Titles & H1s for Target Keywords

**Homepage (`index.html` + `Index.tsx`)**
- Change `<title>` to: `Axio Hub | Zero-Retention AI Agent & Enterprise RAG Platform`
- Update SEO component default title to match
- Add target keywords to homepage `keywords` array: `'AI Agent'`, `'Employee Agent'`, `'Zero-Retention AI Agent'`, `'Enterprise RAG Platform'`
- Update `index.html` static `<title>` and `<meta name="description">` to include "AI Agent" and "RAG"

**Features page**
- Title: `Enterprise RAG Features | AI Agent with Ghost Protocol & Zero Retention`
- Add "RAG" and "AI Agent" prominently in H1

**Security page**
- Title: `Zero-Retention AI Security | Ghost Protocol for Enterprise AI Agents`
- Keywords: add `'Zero-Retention AI Agent'`, `'AI Agent security'`

### Pillar 2: Create 4 New Keyword-Targeted Blog Posts

Create dedicated long-form content (pillar pages) targeting each keyword cluster:

1. **`/blog/what-is-an-ai-agent-for-enterprise`**
   - Title: "What Is an AI Agent? How Enterprise AI Agents Are Replacing Manual Knowledge Work"
   - ~1500 words, targets: "AI Agent", "Enterprise AI Agent", "AI Agent for business"

2. **`/blog/zero-retention-ai-the-future-of-secure-data-processing`**
   - Title: "Zero-Retention AI: Why the Future of Secure AI Means Destroying Your Data"
   - ~1500 words, targets: "Zero Retention AI", "Zero Retention", "secure AI processing"

3. **`/blog/what-is-rag-retrieval-augmented-generation-explained`**
   - Title: "What Is RAG? Retrieval-Augmented Generation Explained for Business Leaders"
   - ~1500 words, targets: "RAG", "Retrieval-Augmented Generation", "Enterprise RAG"

4. **`/blog/employee-agent-ai-that-works-like-your-best-analyst`**
   - Title: "The Employee Agent: AI That Works Like Your Best Analyst, Then Forgets Everything"
   - ~1500 words, targets: "Employee Agent", "AI Employee Agent", "AI analyst"

### Pillar 3: Strengthen On-Page Keyword Density on Homepage

**HeroSection.tsx**
- Update H1 to include "AI Agent": `"The Zero-Retention AI Agent."` + `"Eliminate Data Liability."`
- Update subtitle to explicitly say "Enterprise RAG" and "Employee Agent" naturally

**ValuePropsSection.tsx**
- Add a brief intro paragraph above the cards mentioning "enterprise RAG platform" and "AI agent"

**SolutionsGrid.tsx**
- Update section heading to include "AI Agent" naturally: `"AI Agent Solutions for the 'Do Not Leak' Economy"`

**Structured Data (`structured-data.ts`)**
- Update Organization description and SoftwareApplication keywords to include "AI Agent", "Employee Agent", "Zero-Retention AI Agent", "Enterprise RAG"

### Pillar 4: Update Sitemap & Internal Linking

**`public/sitemap.xml`**
- Add entries for the 4 new blog posts

**Footer links**
- Add a "Learn" or "Resources" section linking to the new blog posts

**Existing blog posts**
- Add internal links from existing posts to the new keyword-targeted posts

---

## Files to Change

| File | Change |
|---|---|
| `index.html` | Update `<title>` and `<meta description>` with target keywords |
| `src/components/SEO.tsx` | Update default title template to include "AI Agent" |
| `src/pages/Index.tsx` | Update SEO keywords and description |
| `src/components/landing/HeroSection.tsx` | Reword H1 and subtitle with target keywords |
| `src/components/landing/ValuePropsSection.tsx` | Add intro text with "enterprise RAG" and "AI agent" |
| `src/components/landing/SolutionsGrid.tsx` | Update section heading |
| `src/pages/Features.tsx` | Update title and H1 with "RAG" and "AI Agent" |
| `src/pages/Security.tsx` | Update title and keywords with "Zero-Retention" |
| `src/lib/structured-data.ts` | Add target keywords to descriptions |
| `src/data/blog-posts.ts` | Add 4 new blog posts |
| `public/sitemap.xml` | Add 4 new blog post URLs |
| `src/components/landing/Footer.tsx` | Add links to new blog posts |

## Expected Impact

- **Short-term (2-4 weeks)**: Rankings for long-tail variants like "zero-retention AI agent", "enterprise RAG platform", "employee agent AI"
- **Medium-term (2-3 months)**: Page 1 rankings for "enterprise RAG", "zero retention AI", "AI agent for enterprise"
- **Long-term (3-6 months)**: Improved rankings for broader terms "AI Agent", "RAG" as domain authority builds

