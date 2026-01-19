import { motion } from 'framer-motion';
import { Shield, Lock, Trash2, Bug, Building2 } from 'lucide-react';

const badges = [
  { icon: Shield, label: 'Ghost Protocol Certified', emoji: '🔒' },
  { icon: Lock, label: 'AES-256 Encrypted', emoji: '🛡️' },
  { icon: Trash2, label: 'Zero-Retention', emoji: '🧹' },
  { icon: Bug, label: 'Malware Protected', emoji: '🦠' },
  { icon: Building2, label: 'SOC 2 Ready', emoji: '🏢' },
];

export const TrustBadgesRow = () => {
  return (
    <section className="py-8 bg-background border-y border-border/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-8"
        >
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50"
            >
              <span className="text-lg">{badge.emoji}</span>
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
