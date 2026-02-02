

## Complete Content & Structural Overhaul: Zero-Retention Enterprise Agent Positioning

### Executive Summary
Transform the Axio Hub website from a generic "Knowledge Base" positioning to a **"Zero-Retention Enterprise Agent"** positioning. This involves a comprehensive content rewrite, terminology shift, and structural updates across 15+ files.

---

### Phase 1: Global Glossary Implementation

**Create a centralized glossary reference and apply across all files:**

| Banned Terms | Replacement Terms |
|--------------|-------------------|
| Upload | Ingest |
| Store | Process |
| Save | Encrypt/Wipe |
| Chatbot | Agent |
| Knowledge Base | Intelligence Engine |
| Chat | Ephemeral Session |
| Cloud storage | Secure Pipeline |
| Files | Documents/Data |

**Files requiring terminology updates:**
- `src/pages/Index.tsx`
- `src/components/landing/HeroSection.tsx`
- `src/components/landing/ValuePropsSection.tsx`
- `src/components/landing/SolutionsGrid.tsx`
- `src/components/landing/QuickNavSection.tsx`
- `src/pages/solutions/Individuals.tsx`
- `src/pages/solutions/Teams.tsx`
- `src/pages/solutions/Enterprise.tsx`
- `src/pages/Features.tsx`
- `src/pages/Security.tsx`
- `src/pages/Integrations.tsx`
- `src/pages/About.tsx`
- `src/pages/FAQ.tsx`
- `src/components/SEO.tsx`
- `docs/sitetexts.md`

---

### Phase 2: Home Page Transformation (`src/pages/Index.tsx` & Components)

#### A. Hero Section Updates (`src/components/landing/HeroSection.tsx`)

| Element | Current | New |
|---------|---------|-----|
| H1 | "Deploy Enterprise AI. Eliminate Data Liability." | "Deploy Enterprise AI. **Eliminate Data Liability.**" (keep, matches spec) |
| H2 | "Zero-Retention Agent" | "Zero-Retention **Employee Agent**" |
| Trust Bar | (missing) | Add: "Architected for SOC 2 Type II • HIPAA Compliant • DoD 5220.22-M Wiping" |

**New Trust Bar Component:**
```tsx
<motion.div className="flex flex-wrap justify-center gap-4 mt-6">
  <span className="text-xs text-muted-foreground">SOC 2 Type II</span>
  <span className="text-xs text-muted-foreground">•</span>
  <span className="text-xs text-muted-foreground">HIPAA Compliant</span>
  <span className="text-xs text-muted-foreground">•</span>
  <span className="text-xs text-muted-foreground">DoD 5220.22-M Wiping</span>
</motion.div>
```

#### B. Solutions Grid Updates (`src/components/landing/SolutionsGrid.tsx`)

| Card | Current Icon | New Icon | Updated Copy |
|------|--------------|----------|--------------|
| Finance | TrendingUp | BarChart3 | "Ingest 100MB+ merger documents into RAM. Extract alpha, analyze risks, and wipe the data instantly. **Zero audit risk.**" |
| Legal | Scale | Scale (keep) | "Review privileged contracts without uploading them to a permanent cloud. Client privilege remains absolute via **Decoupled Indexing**." |
| R&D | Microscope | FlaskConical | "Query sensitive patent databases and clinical trial results ensuring trade secrets never leave the **volatile session**." |

**Update Section Header:**
- Current: "Intelligence for the 'Do Not Leak' Economy"
- New: "Built for the 'Do Not Leak' Economy"

#### C. New Technology Section (Replace/Enhance ValuePropsSection)

**Current Section Header:** "Why Risk Your IP with 'Private' Clouds?"

**New Section Header:** "Security is Not a Feature. It's Physics."

**Updated Cards:**

| Card | New Title | New Body |
|------|-----------|----------|
| 1 | SmartBuffer™ | "RAM-First Processing (No Disk I/O). Your data never touches permanent storage." |
| 2 | Decoupled Indexing | "We search stems, not sentences. Your secrets remain mathematically invisible." |
| 3 | Fail-Closed Architecture | "No key? No boot. The system physically cannot operate without your encryption keys." |

---

### Phase 3: Segment Pages Rebranding

#### A. Individuals Page → "Solo Analysts" (`src/pages/solutions/Individuals.tsx`)

| Element | Current | New |
|---------|---------|-----|
| URL | `/solutions/individuals` | Keep URL, update content |
| Badge | "For Individuals" | "Solo Analysts" |
| H1 | "Your Personal Second Brain" | "Your Second Brain. **Off the Record.**" |
| Target | Generic individuals | Whistleblowers, Journalists, Traders |
| Value Prop | "Personal knowledge management" | "Digital Burner Mode. Perform deep analysis on leaked documents or market intel without creating a digital footprint." |
| Key Feature | Generic | "Single-Session Memory: Close the tab, wipe the universe." |

**Update `individualFeatures` array:**
```typescript
const individualFeatures = [
  {
    icon: Ghost,
    title: 'Digital Burner Mode',
    description: 'Analyze sensitive documents without creating a digital footprint.',
  },
  {
    icon: Timer,
    title: 'Single-Session Memory',
    description: 'Close the tab, wipe the universe. Nothing persists.',
  },
  {
    icon: Shield,
    title: 'Zero-Trace Operations',
    description: 'Perfect for market intel, leaked documents, and sensitive research.',
  },
  {
    icon: Zap,
    title: 'Instant Analysis',
    description: 'Ingest, analyze, and destroy in one ephemeral session.',
  },
];
```

#### B. Teams Page → "Secure War Rooms" (`src/pages/solutions/Teams.tsx`)

| Element | Current | New |
|---------|---------|-----|
| Badge | "For Teams" | "Secure War Rooms" |
| H1 | "Your Team's Knowledge, Instantly Accessible" | "Collaborate in a **Digital Clean Room.**" |
| Target | Generic teams | M&A Deal Teams, Litigation Units |
| Value Prop | Generic collaboration | "A shared intelligence workspace that exists only while you need it. Perfect for deal rooms and internal investigations." |
| Key Feature | Generic | "Privilege by Design: We cannot be subpoenaed for data we do not have." |

**Update `teamFeatures` array:**
```typescript
const teamFeatures = [
  {
    icon: Users,
    title: 'Ephemeral Deal Rooms',
    description: 'Shared intelligence that exists only while you need it.',
  },
  {
    icon: Scale,
    title: 'Privilege by Design',
    description: 'We cannot be subpoenaed for data we do not have.',
  },
  {
    icon: Lock,
    title: 'Session-Based Access',
    description: 'Collaborate on sensitive M&A or litigation matters securely.',
  },
  {
    icon: Trash2,
    title: 'Automatic Cleanup',
    description: 'When the deal closes, the data room disappears.',
  },
];
```

#### C. Enterprise Page → "Sovereign Infrastructure" (`src/pages/solutions/Enterprise.tsx`)

| Element | Current | New |
|---------|---------|-----|
| Badge | "For Enterprise" | "Sovereign Infrastructure" |
| H1 | "AI Knowledge at Enterprise Scale" | "Intelligence Without **Liability.**" |
| Target | Generic enterprise | Banks, Defense, Healthcare |
| Value Prop | Generic scale | "Eliminate the 'Data at Rest' attack vector entirely. Run Axio Hub inside your VPC or use our Zero-Retention Cloud." |
| Key Features | Generic SSO/SAML | "BYOK (Bring Your Own Key) & 24/7 Kill Switch." |

**Update `enterpriseFeatures` array:**
```typescript
const enterpriseFeatures = [
  {
    icon: Key,
    title: 'BYOK (Bring Your Own Key)',
    description: 'Your encryption keys never leave your control.',
  },
  {
    icon: Power,
    title: '24/7 Kill Switch',
    description: 'Instant data destruction on demand.',
  },
  {
    icon: Server,
    title: 'VPC Deployment',
    description: 'Run Axio Hub inside your own infrastructure.',
  },
  {
    icon: Shield,
    title: 'Zero-Retention Cloud',
    description: 'Or use our cloud with guaranteed data ephemerality.',
  },
];
```

---

### Phase 4: Features & Integrations Pages

#### A. Features Page (`src/pages/Features.tsx`)

**New Hero:**
- H1: "The Ingestion Pipeline That Forgets"
- Subheadline: "We don't sync your data; we stream it. Read-Once, Wipe-After operations for maximum security."

**New Section: "Ingestion Pipeline"**
```typescript
const ingestionFeatures = [
  {
    icon: Cpu,
    title: 'Stream Processing',
    description: 'Data flows through RAM, never touching disk.',
  },
  {
    icon: Trash2,
    title: 'Read-Once, Wipe-After',
    description: 'Every connector built for ephemeral operations.',
  },
  {
    icon: Link,
    title: 'Secure Connectors',
    description: 'Google Drive, Notion, S3—all zero-retention.',
  },
];
```

**Update existing feature descriptions to emphasize "ingest" over "store".**

#### B. Integrations Page (`src/pages/Integrations.tsx`)

**New Hero:**
- H1: "Connect Your Data. **Keep Your Secrets.**"
- Subheadline: "We pull data into RAM, answer the question, and disconnect. We are not a backup solution."

**Update integration descriptions:**
- Replace "Import" with "Ingest"
- Replace "Sync" with "Stream"
- Add note to each: "Zero-retention processing"

---

### Phase 5: Security Page → "The Manifesto" (`src/pages/Security.tsx`)

**Complete Rewrite:**

| Element | Current | New |
|---------|---------|-----|
| H1 | "Ghost Protocol™ Security" | "We Don't Want Your Data. We Built a System That Rejects It." |
| Subheadline | Generic security message | "The industry's first truly zero-retention AI platform." |

**Technical Proof Points (New Section):**
```typescript
const technicalProofs = [
  {
    title: 'AES-256 Encryption',
    description: 'Data is encrypted before it touches the buffer.',
    spec: 'AES-256-CBC (Fernet)',
  },
  {
    title: 'OS-Level Wiping',
    description: 'We use os.urandom to overwrite disk blocks if RAM overflows.',
    spec: 'DoD 5220.22-M compliant',
  },
  {
    title: 'Malware Sandboxing',
    description: 'Every ingest is detonated in an isolated environment first.',
    spec: 'ClamAV + isolated containers',
  },
];
```

**Update flow steps to emphasize "ingest" and "wipe":**
```typescript
const flowSteps = [
  { icon: Download, label: 'Ingest', description: 'Data received' },
  { icon: Shield, label: 'Sandbox', description: 'Malware detonation' },
  { icon: Cpu, label: 'Process', description: 'RAM-only extraction' },
  { icon: Lock, label: 'Encrypt', description: 'AES-256 before buffer' },
  { icon: Trash2, label: 'Wipe', description: 'os.urandom overwrite' },
  { icon: Database, label: 'Index', description: 'Only encrypted vectors remain' },
];
```

---

### Phase 6: SEO Metadata Updates

#### A. Update `src/components/SEO.tsx`

```typescript
const SITE_NAME = 'Axio Hub';
const DEFAULT_DESCRIPTION = 'Zero-Retention Enterprise AI Agent. Analyze sensitive documents in ephemeral memory and destroy the source. Eliminate data liability.';
const DEFAULT_KEYWORDS = [
  'Enterprise RAG',
  'Zero-Retention AI',
  'Secure AI',
  'Privacy-Preserving LLM',
  'Ghost Protocol',
  'Ephemeral AI',
  'HIPAA AI',
  'SOC2 AI Agent',
];
```

#### B. Update Page-Specific SEO

| Page | New Title | New Description |
|------|-----------|-----------------|
| Home | "Axio Hub - Zero-Retention Enterprise AI Agent" | "Deploy Enterprise AI. Eliminate Data Liability. Zero-Retention Agent for M&A, Legal, and R&D." |
| Security | "Security Manifesto - Axio Hub" | "We don't want your data. We built a system that rejects it. Zero-retention architecture." |
| Features | "Ingestion Pipeline - Axio Hub" | "Stream data, extract intelligence, destroy the source. Enterprise RAG built for privacy." |
| Integrations | "Secure Connectors - Axio Hub" | "Connect your data. Keep your secrets. Read-once, wipe-after integrations." |
| Individuals | "Solo Analysts - Axio Hub" | "Your second brain, off the record. Digital burner mode for sensitive analysis." |
| Teams | "Secure War Rooms - Axio Hub" | "Collaborate in a digital clean room. Ephemeral deal rooms for M&A and litigation." |
| Enterprise | "Sovereign Infrastructure - Axio Hub" | "Intelligence without liability. BYOK and zero-retention cloud for banks, defense, healthcare." |

---

### Phase 7: Quick Nav Updates (`src/components/landing/QuickNavSection.tsx`)

**Update navigation options:**
```typescript
const navOptions = [
  {
    icon: User,
    title: 'Solo Analysts',
    description: 'Off-the-record analysis',
    detailedDescription: 'Digital burner mode for sensitive work',
    href: '/solutions/individuals',
    userType: 'individuals' as UserType,
  },
  {
    icon: Users,
    title: 'Secure War Rooms',
    description: 'Ephemeral collaboration',
    detailedDescription: 'Deal rooms that disappear after closing',
    href: '/solutions/teams',
    userType: 'teams' as UserType,
  },
  {
    icon: Building2,
    title: 'Sovereign Infrastructure',
    description: 'Zero-liability enterprise',
    detailedDescription: 'BYOK and VPC deployment options',
    href: '/solutions/enterprise',
    userType: 'enterprise' as UserType,
  },
];
```

---

### Phase 8: Documentation Update (`docs/sitetexts.md`)

Complete rewrite of `sitetexts.md` to reflect all content changes, organized by:
1. Global Glossary
2. Home Page (with new copy)
3. Solution Pages (Solo Analysts, War Rooms, Sovereign)
4. Features & Integrations
5. Security Manifesto
6. SEO Metadata

---

### Summary of Files to Modify

| File | Change Type | Priority |
|------|-------------|----------|
| `src/components/landing/HeroSection.tsx` | Modify | High |
| `src/components/landing/ValuePropsSection.tsx` | Major rewrite | High |
| `src/components/landing/SolutionsGrid.tsx` | Modify | High |
| `src/components/landing/QuickNavSection.tsx` | Modify | High |
| `src/pages/solutions/Individuals.tsx` | Major rewrite | High |
| `src/pages/solutions/Teams.tsx` | Major rewrite | High |
| `src/pages/solutions/Enterprise.tsx` | Major rewrite | High |
| `src/pages/Security.tsx` | Major rewrite | High |
| `src/pages/Features.tsx` | Modify | Medium |
| `src/pages/Integrations.tsx` | Modify | Medium |
| `src/components/SEO.tsx` | Modify | Medium |
| `src/pages/About.tsx` | Modify | Medium |
| `src/pages/FAQ.tsx` | Modify | Low |
| `docs/sitetexts.md` | Complete rewrite | Low |

---

### Technical Notes

- **Icons**: Import `BarChart3`, `FlaskConical`, `Ghost`, `Timer`, `Key`, `Power`, `Download` from lucide-react
- **Responsive**: All updates maintain existing mobile-first patterns
- **Analytics**: Existing tracking functions remain compatible
- **No new dependencies required**
- **Estimated implementation time**: 2-3 hours for full overhaul

