import { SEO } from '@/components/SEO';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { motion } from 'framer-motion';
import { 
  Upload, 
  Search, 
  Cpu, 
  Lock, 
  Trash2, 
  Database,
  Shield,
  XCircle,
  Check,
  FileX2,
  KeyRound,
  Building2,
  ShieldX,
  ClipboardList,
  UserCheck
} from 'lucide-react';

const flowSteps = [
  { icon: Upload, label: 'Upload', description: 'File received' },
  { icon: Search, label: 'Scan', description: 'ClamAV malware check' },
  { icon: Cpu, label: 'Process', description: 'Extract text, create embeddings' },
  { icon: Lock, label: 'Encrypt', description: 'AES-256 encryption' },
  { icon: Trash2, label: 'Wipe', description: 'Cryptographic overwrite' },
  { icon: Database, label: 'Store', description: 'Only encrypted vectors remain' },
];

const ghostProtocolCategories = [
  {
    title: 'Zero-Retention Architecture',
    features: [
      { icon: FileX2, text: 'We never store your raw documents' },
      { icon: Lock, text: 'Content is encrypted, chunked, and indexed' },
      { icon: FileX2, text: 'Original files remain in your storage' },
      { icon: FileX2, text: 'Delete anytime—truly gone' },
    ],
  },
  {
    title: 'Encryption Standards',
    features: [
      { icon: KeyRound, text: 'AES-256 encryption at rest' },
      { icon: Lock, text: 'TLS 1.3 in transit' },
      { icon: KeyRound, text: 'Key rotation support' },
      { icon: Shield, text: 'SOC 2 compliance ready' },
    ],
  },
  {
    title: 'Enterprise Controls',
    features: [
      { icon: Building2, text: 'Row-Level Security (RLS)' },
      { icon: Building2, text: 'Organization isolation' },
      { icon: ClipboardList, text: 'Audit logging' },
      { icon: UserCheck, text: 'SSO integration ready' },
    ],
  },
  {
    title: 'Malware Protection',
    features: [
      { icon: ShieldX, text: 'Real-time ClamAV scanning' },
      { icon: ShieldX, text: 'Infected files quarantined' },
      { icon: ShieldX, text: 'Admin notifications' },
      { icon: ShieldX, text: 'Automatic file rejection' },
    ],
  },
];

const specifications = [
  { feature: 'Encryption Algorithm', spec: 'AES-256-CBC (Fernet)' },
  { feature: 'Secure Wipe', spec: 'Cryptographic random overwrite' },
  { feature: 'DoD Compliance', spec: '5220.22-M (3-pass) - Enterprise' },
  { feature: 'Memory Protection', spec: 'SmartBuffer (10MB threshold)' },
  { feature: 'Malware Engine', spec: 'ClamAV' },
  { feature: 'Key Rotation', spec: 'Supported without migration' },
];

const whatWeDoNotStore = [
  'Original uploaded files (wiped after processing)',
  'Your OAuth tokens in plaintext (encrypted)',
  'Your encryption keys (you control them)',
  'Cross-organization data access',
  'Training data for AI models',
];

const complianceBadges = [
  'GDPR Compliant',
  'Right to be Forgotten',
  'SOC 2 Ready Architecture',
  'HIPAA Considerations',
  'Audit Logging Enabled',
];

const Security = () => {
  return (
    <>
      <SEO 
        title="Security"
        description="Ghost Protocol: The industry's first zero-retention AI knowledge platform. AES-256 encryption, forensic-grade wipe, malware scanning. Your data disappears after processing."
        canonical="/security"
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
              <span className="text-5xl mb-6 block">🔐</span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Ghost Protocol™</span>
                <span className="text-foreground"> Security</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                The industry's first zero-retention AI knowledge platform. Your data stays yours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How Ghost Protocol Works */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">How Ghost Protocol Works</h2>
              <p className="text-muted-foreground">Step-by-step security flow for your data</p>
            </motion.div>

            {/* Flow Visualization */}
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto mb-16">
              {flowSteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center"
                >
                  <div className="glass-card p-4 text-center min-w-[120px]">
                    <step.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-foreground text-sm">{step.label}</p>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                  {i < flowSteps.length - 1 && (
                    <div className="w-8 h-px bg-gradient-to-r from-primary to-secondary mx-2 hidden md:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ghost Protocol Categories */}
        <section className="py-20 bg-void relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Security Pillars</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Four core categories that make Ghost Protocol the most secure AI knowledge platform.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {ghostProtocolCategories.map((category, i) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6"
                >
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {category.title}
                  </h3>
                  
                  <ul className="space-y-3">
                    {category.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-muted-foreground">
                        <feature.icon className="w-4 h-4 text-primary/70 flex-shrink-0" />
                        <span className="text-sm">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Technical Specifications</h2>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <div className="glass-card overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left p-4 text-foreground font-semibold">Feature</th>
                      <th className="text-left p-4 text-foreground font-semibold">Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specifications.map((row, i) => (
                      <motion.tr
                        key={row.feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="border-b border-border/30 last:border-0"
                      >
                        <td className="p-4 text-muted-foreground">{row.feature}</td>
                        <td className="p-4 text-foreground font-medium">{row.spec}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Data Isolation */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-foreground mb-4">Data Isolation</h2>
                <p className="text-muted-foreground">
                  Every organization's data is completely isolated using:
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Composite primary keys with organization_id',
                  'Row-Level Security (RLS) policies',
                  'Org-scoped database functions',
                  'No cross-tenant data leakage possible',
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 glass-card p-4"
                  >
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Compliance</h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {complianceBadges.map((badge, i) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium text-sm"
                >
                  {badge}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Don't Store */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-foreground mb-4">What We DON'T Store</h2>
              </motion.div>

              <div className="space-y-3">
                {whatWeDoNotStore.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 glass-card p-4"
                  >
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-void">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to secure your knowledge?
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

export default Security;
