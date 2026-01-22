import { SEO } from '@/components/SEO';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { motion } from 'framer-motion';
import { 
  Database, 
  MessageSquare, 
  ShieldAlert, 
  Shield, 
  Users, 
  Building2,
  Check,
  X,
  AlertTriangle,
  ShieldCheck,
  Lock,
  Quote,
  Search,
  Zap,
  RefreshCw,
  Clock
} from 'lucide-react';

const scopeThresholds = [
  {
    threshold: '≥85%',
    label: 'DOMINANT',
    color: 'scope-dominant',
    description: 'Answer confidently. Cite the source. Move on.',
    example: '"Based on Backend Docs: Here\'s how authentication works…"',
  },
  {
    threshold: '60-84%',
    label: 'CONTESTED',
    color: 'scope-contested',
    description: 'Answer from primary. Show alternatives.',
    example: '"Based on Backend Docs: [answer]\nAlso found in: Product Manual, Engineering Wiki"',
  },
  {
    threshold: '<60%',
    label: 'FRAGMENTED',
    color: 'scope-fragmented',
    description: "Don't guess. Clarify.",
    example: '"I found relevant information in 3 sources.\nWhich should I focus on?"',
  },
];

const intelligenceFeatures = [
  {
    icon: Lock,
    title: 'Sticky Scope Sessions',
    description: 'Tell us once. We remember. When you select a scope—or when one source dominates 3 times in a row—we lock it for the entire conversation.',
    highlight: '🔒 Searching in: Engineering Wiki',
    note: 'Say "search all sources" anytime to unlock',
  },
  {
    icon: Quote,
    title: 'Source Citations',
    description: 'Every answer includes clickable citations to the exact document and passage. Verify AI responses instantly. Never wonder "where did that come from?"',
    highlight: '📎 Sources: auth-guide.md, api-docs.pdf',
    note: 'Click any citation to jump to the original',
  },
  {
    icon: Search,
    title: 'Hybrid Search',
    description: "Combines keyword matching with semantic understanding. Find information even when you don't know the exact words.",
    highlight: '🔍 "login flow" → auth, SSO, OAuth docs',
    note: 'Semantic + keyword matching combined',
  },
];

const reliabilityStats = [
  { value: '99.9%', label: 'Uptime SLA', icon: Zap },
  { value: '3', label: 'AI Providers', icon: RefreshCw },
  { value: '<30s', label: 'Failover Time', icon: Clock },
];

const featureSections = [
  {
    icon: Database,
    title: 'Unified Data Connectivity',
    description: 'Connect all your knowledge sources in one place. Google Drive, Notion, GitHub, Dropbox, SharePoint, Box, S3, SFTP, and more. OAuth-based authentication means your credentials are never stored.',
    features: [
      'Multiple native integrations',
      'OAuth 2.0 secure authentication',
      'Incremental sync support',
      'File upload (PDF, DOCX, TXT, CSV, XLSX)',
      'Web crawler with configurable depth',
      'YouTube video transcription',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Intelligent AI Chat',
    description: 'Ask questions in natural language and get accurate answers with source citations. Our AI understands context, follows up on previous questions, and always shows its sources.',
    features: [
      'Streaming responses',
      'Conversation memory',
      'Follow-up questions',
      'Source citations with links',
      'Multiple AI model support',
      'Token usage tracking',
    ],
  },
  {
    icon: Shield,
    title: 'Ghost Protocol Security',
    description: 'Zero-retention architecture ensures your original files are securely wiped after processing. AES-256 encryption at rest. Forensic-grade deletion. Malware scanning.',
    features: [
      'Zero-copy processing',
      'AES-256 encryption',
      'Forensic-grade secure wipe',
      'SmartBuffer memory protection',
      'ClamAV malware scanning',
      'Emergency cleanup handlers',
    ],
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Invite your team and share knowledge. Role-based access control ensures the right people see the right data.',
    features: [
      'Team workspaces',
      'Role-based access (Owner, Admin, Editor, Viewer)',
      'Bulk invite via CSV',
      'Plan inheritance',
      'Audit logging',
      'Usage tracking per member',
    ],
  },
  {
    icon: Building2,
    title: 'Enterprise Ready',
    description: 'Built for organizations that need security, compliance, and scale.',
    features: [
      'Organization-level isolation',
      'Row-level security (RLS)',
      'Multi-tenant architecture',
      'GDPR-compliant deletion',
      'Audit logs',
      'SLA options',
    ],
  },
];

const comparisonData = [
  { capability: 'Multi-source ingestion', traditional: 'limited', others: 'varies', axio: 'yes', axioLabel: 'Multiple connectors' },
  { capability: 'Source disambiguation', traditional: 'no', others: 'no', axio: 'yes', axioLabel: 'Scope Guard' },
  { capability: 'Asks before assuming', traditional: 'no', others: 'no', axio: 'yes', axioLabel: 'Clarification flow' },
  { capability: 'Conversation scope memory', traditional: 'no', others: 'no', axio: 'yes', axioLabel: 'Sticky scope' },
  { capability: 'Multi-provider failover', traditional: 'no', others: 'no', axio: 'yes', axioLabel: '3 providers' },
  { capability: 'Zero-retention security', traditional: 'no', others: 'varies', axio: 'yes', axioLabel: 'Ghost Protocol' },
  { capability: 'Token quota management', traditional: 'no', others: 'varies', axio: 'yes', axioLabel: 'Per-plan limits' },
];

const StatusIcon = ({ status }: { status: string }) => {
  if (status === 'yes') {
    return <Check className="w-5 h-5 text-scope-dominant" />;
  } else if (status === 'no') {
    return <X className="w-5 h-5 text-destructive" />;
  } else if (status === 'limited' || status === 'varies') {
    return <AlertTriangle className="w-5 h-5 text-scope-contested" />;
  }
  return null;
};

const Features = () => {
  return (
    <>
      <SEO 
        title="Enterprise RAG Features"
        description="Scope Dominance Guard, sticky scope sessions, multi-provider failover. Enterprise RAG features that actually solve real problems. The AI knowledge base built for teams."
        canonical="/features"
        keywords={['enterprise RAG platform', 'AI knowledge base', 'chat with documents', 'multi-source document AI']}
      />
      <main className="bg-background min-h-screen">
        <Header />
        
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-foreground">Features That Actually </span>
                <span className="gradient-text">Solve the Problem</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Context intelligence no other tool has. Enterprise security. Multiple native connectors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Scope Dominance Guard - Deep Dive */}
        <section className="py-20 bg-void relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">Scope Dominance Guard™</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our AI doesn't guess—it calculates. For every query, we analyze which sources the answer comes from.
              </p>
            </motion.div>

            {/* Decision Tree */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              {scopeThresholds.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl border-2 glass-card"
                  style={{
                    borderColor: `hsl(var(--${item.color}) / 0.5)`,
                    backgroundColor: `hsl(var(--${item.color}) / 0.1)`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span 
                      className="text-3xl font-bold"
                      style={{ color: `hsl(var(--${item.color}))` }}
                    >
                      {item.threshold}
                    </span>
                    <span 
                      className="px-2 py-1 rounded text-xs font-semibold uppercase"
                      style={{ 
                        backgroundColor: `hsl(var(--${item.color}) / 0.2)`,
                        color: `hsl(var(--${item.color}))` 
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                  
                  <p className="text-foreground font-medium mb-4">{item.description}</p>
                  
                  <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
                    <p className="text-sm text-muted-foreground font-mono whitespace-pre-line">
                      {item.example}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-lg font-medium"
            >
              <span className="text-foreground">No other AI knowledge tool does this. </span>
              <span className="text-muted-foreground">They all blend and hope.</span>
            </motion.p>
          </div>
        </section>

        {/* Additional Intelligence Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">More </span>
                <span className="gradient-text">Intelligent Features</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {intelligenceFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 group hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
                  
                  <div className="p-3 rounded-lg bg-secondary/10 border border-secondary/30 mb-2">
                    <p className="text-sm text-secondary font-mono">{feature.highlight}</p>
                  </div>
                  
                  <p className="text-xs text-muted-foreground italic">{feature.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Always-On Reliability */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Always-On </span>
                <span className="gradient-text">Reliability</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Triple-redundant AI ensures you're never left without answers. When one provider fails, we automatically switch to the next.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              {reliabilityStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold gradient-text mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 max-w-2xl mx-auto"
            >
              <h3 className="font-semibold text-foreground mb-4">How It Works</h3>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">1.</span>
                  Primary provider (OpenAI) handles your query
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">2.</span>
                  If unavailable, automatic fallback to Anthropic
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">3.</span>
                  Third-tier backup (Google) for maximum uptime
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">4.</span>
                  All failovers are seamless—you never notice
                </li>
              </ol>
            </motion.div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-void">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">How We </span>
                <span className="gradient-text">Compare</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comparison based on standard RAG implementations and publicly documented features as of January 2026.
              </p>
            </motion.div>

            {/* Desktop Table */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="hidden md:block max-w-4xl mx-auto"
            >
              <div className="glass-card rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left p-4 text-muted-foreground font-medium">Capability</th>
                      <th className="text-center p-4 text-muted-foreground font-medium">Traditional RAG</th>
                      <th className="text-center p-4 text-muted-foreground font-medium">Other AI Tools</th>
                      <th className="text-center p-4 text-secondary font-semibold bg-secondary/10">Axio Hub</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, i) => (
                      <tr key={row.capability} className={i !== comparisonData.length - 1 ? 'border-b border-border/30' : ''}>
                        <td className="p-4 text-foreground font-medium">{row.capability}</td>
                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <StatusIcon status={row.traditional} />
                            {row.traditional !== 'no' && row.traditional !== 'yes' && (
                              <span className="text-sm text-muted-foreground capitalize">{row.traditional}</span>
                            )}
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <StatusIcon status={row.others} />
                            {row.others !== 'no' && row.others !== 'yes' && (
                              <span className="text-sm text-muted-foreground capitalize">{row.others}</span>
                            )}
                          </div>
                        </td>
                        <td className="p-4 text-center bg-secondary/5">
                          <div className="flex items-center justify-center gap-2">
                            <StatusIcon status={row.axio} />
                            <span className="text-sm text-secondary font-medium">{row.axioLabel}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {comparisonData.map((row) => (
                <motion.div
                  key={row.capability}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-4"
                >
                  <h3 className="font-semibold text-foreground mb-3">{row.capability}</h3>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="text-center">
                      <p className="text-muted-foreground text-xs mb-1">Traditional</p>
                      <StatusIcon status={row.traditional} />
                    </div>
                    <div className="text-center">
                      <p className="text-muted-foreground text-xs mb-1">Others</p>
                      <StatusIcon status={row.others} />
                    </div>
                    <div className="text-center bg-secondary/10 rounded-lg py-1">
                      <p className="text-secondary text-xs mb-1 font-medium">Axio</p>
                      <div className="flex flex-col items-center">
                        <StatusIcon status={row.axio} />
                        <span className="text-xs text-secondary mt-1">{row.axioLabel}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">All </span>
                <span className="gradient-text">Capabilities</span>
              </h2>
            </motion.div>

            <div className="space-y-20">
              {featureSections.map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Icon/Visual */}
                  <div className="flex-shrink-0">
                    <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <section.icon className="w-14 h-14 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                    <p className="text-muted-foreground mb-6">{section.description}</p>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                          <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-muted/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to get started?
              </h2>
              <a
                href="https://app.axiohub.io/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex holographic-glow px-8 py-4 rounded-full text-lg font-semibold text-white transition-transform hover:scale-105"
              >
                Start Your Free Trial
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Features;
