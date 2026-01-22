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
  AlertTriangle
} from 'lucide-react';

const featureSections = [
  {
    icon: Database,
    title: 'Unified Data Connectivity',
    description: 'Connect all your knowledge sources in one place. Google Drive, Notion, GitHub, Dropbox, SharePoint, Box, S3, SFTP, and more. OAuth-based authentication means your credentials are never stored.',
    features: [
      '12 native integrations',
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
    icon: ShieldAlert,
    title: 'Scope-Aware Intelligence',
    description: 'Our unique Scope Guard technology prevents context collision. When your question could match multiple projects or sources, Axio asks for clarification before answering.',
    features: [
      'Scope Dominance Guard',
      'Smart Clarification Flow',
      'Multi-source search',
      'Scope identity cards',
      'Context sticky sessions',
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
  { capability: 'Multi-source ingestion', traditional: 'limited', others: 'varies', axio: 'yes', axioLabel: '12 connectors' },
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
        title="Features"
        description="Context intelligence no other RAG tool has. Scope Dominance Guard, Sticky Scope Sessions, and Ghost Protocol security. 12 native connectors."
        canonical="/features"
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
                Context intelligence no other tool has. Enterprise security. 12 native connectors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-muted/10">
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
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
                    <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <section.icon className="w-16 h-16 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-foreground mb-4">{section.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{section.description}</p>
                    
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
