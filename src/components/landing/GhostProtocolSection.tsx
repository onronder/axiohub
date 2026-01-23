import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileX2, 
  KeyRound, 
  Building2,
  ShieldX,
  ArrowRight
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const highlights = [
  { icon: FileX2, text: 'Zero-retention architecture' },
  { icon: KeyRound, text: 'AES-256 encryption at rest & in transit' },
  { icon: Building2, text: 'Enterprise-grade isolation' },
  { icon: ShieldX, text: 'Real-time malware scanning' },
];

export const GhostProtocolSection = () => {
  return (
    <section className="py-24 bg-void relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
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
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-3xl mb-4 block">🔐</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="gradient-text">Ghost Protocol™</span>
            <span className="text-foreground"> Security</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Your data stays yours. We never store your raw documents.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto mb-10">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/30 border border-border/50"
            >
              <item.icon className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">{item.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/security"
            onClick={() => trackEvent('learn_more_click', { link: 'security' })}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-colors font-medium"
          >
            Learn About Our Security <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
