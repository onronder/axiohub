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
  Check
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

const Features = () => {
  return (
    <>
      <SEO 
        title="Features - Axio Hub"
        description="Everything you need to chat with your data. Powerful features, enterprise security, simple pricing."
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
                <span className="text-foreground">Everything You Need to </span>
                <span className="gradient-text">Chat With Your Data</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Powerful features. Enterprise security. Simple pricing.
              </p>
            </motion.div>
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
