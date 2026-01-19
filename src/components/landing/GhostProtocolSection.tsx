import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileX2, 
  KeyRound, 
  Eraser, 
  MemoryStick, 
  ShieldX, 
  AlertOctagon 
} from 'lucide-react';

const features = [
  {
    icon: FileX2,
    title: 'Zero-Copy Processing',
    description: 'Original files are securely wiped after knowledge extraction. Only encrypted vectors remain.',
  },
  {
    icon: KeyRound,
    title: 'AES-256 Encryption',
    description: 'All data encrypted at rest using bank-grade encryption. You control the keys.',
  },
  {
    icon: Eraser,
    title: 'Forensic-Grade Wipe',
    description: 'Files overwritten with cryptographic randomness. Unrecoverable even with forensic tools.',
  },
  {
    icon: MemoryStick,
    title: 'SmartBuffer Protection',
    description: 'Sensitive data minimized in memory. Large files use encrypted temp storage.',
  },
  {
    icon: ShieldX,
    title: 'Malware Scanning',
    description: 'Every upload scanned with ClamAV before processing. Infected files rejected.',
  },
  {
    icon: AlertOctagon,
    title: 'Dead Man\'s Switch',
    description: 'Emergency cleanup triggers on any failure. No orphaned files, ever.',
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
            <span className="gradient-text">Ghost Protocol:</span>
            <br />
            <span className="text-foreground">Your Data Disappears After Processing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Unlike other AI platforms that store copies of your files indefinitely, 
            Axio Hub uses military-grade security to ensure zero retention.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {features.map((feature, i) => (
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
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
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
