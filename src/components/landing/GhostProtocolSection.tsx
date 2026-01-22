import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileX2, 
  KeyRound, 
  Shield,
  ShieldX,
  Lock,
  Building2,
  ClipboardList,
  UserCheck
} from 'lucide-react';

const categories = [
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

export const GhostProtocolSection = () => {
  return (
    <section className="py-32 bg-void relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-4xl mb-4 block">🔐</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Ghost Protocol™</span>
            <span className="text-foreground"> Security</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your Data Stays Yours
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {categories.map((category, i) => (
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/security"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-colors font-medium"
          >
            Learn More About Our Security
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
