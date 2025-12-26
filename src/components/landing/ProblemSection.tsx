import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, Database, MessageSquare, FolderOpen, Cloud } from 'lucide-react';

const floatingIcons = [
  { Icon: FileText, label: 'PDF', color: 'hsl(var(--destructive))' },
  { Icon: Database, label: 'Notion', color: 'hsl(var(--muted-foreground))' },
  { Icon: MessageSquare, label: 'Slack', color: 'hsl(var(--primary))' },
  { Icon: FolderOpen, label: 'Drive', color: 'hsl(var(--secondary))' },
  { Icon: Cloud, label: 'Dropbox', color: 'hsl(var(--primary))' },
];

export const ProblemSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.25, 0.6, 0.75], [0, 1, 1, 0]);
  const convergence = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);
  const orbGlow = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);

  return (
    <section ref={containerRef} className="relative min-h-[120vh] bg-void">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity }} className="relative w-full max-w-3xl mx-auto px-4">
          {/* Floating icons - simplified, no random jitter */}
          <div className="absolute inset-0 pointer-events-none">
            {floatingIcons.map(({ Icon, label, color }, i) => {
              const angle = (i / floatingIcons.length) * Math.PI * 2 - Math.PI / 2;
              const radius = 180;
              const initialX = Math.cos(angle) * radius;
              const initialY = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={label}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    x: useTransform(convergence, [0, 1], [initialX, 0]),
                    y: useTransform(convergence, [0, 1], [initialY, 0]),
                    scale: useTransform(convergence, [0.6, 1], [1, 0]),
                    opacity: useTransform(convergence, [0.6, 1], [0.8, 0]),
                  }}
                >
                  <div className="glass-card p-3 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500">
                    <Icon size={24} style={{ color }} />
                    <span className="block text-xs mt-1 text-muted-foreground">{label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Central Axio Core Orb */}
          <motion.div
            style={{ 
              scale: useTransform(convergence, [0.4, 0.8], [0, 1]),
              opacity: orbGlow 
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-secondary blur-2xl opacity-50" />
              <div className="absolute inset-3 rounded-full bg-gradient-to-br from-primary to-secondary" />
              <div className="absolute inset-5 rounded-full bg-void flex items-center justify-center">
                <span className="text-xs font-bold gradient-text">AXIO</span>
              </div>
            </div>
          </motion.div>

          {/* Initial text */}
          <motion.div
            style={{ opacity: useTransform(convergence, [0, 0.25], [1, 0]) }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Your documents are <span className="text-primary">everywhere</span>.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Your answers are <span className="text-secondary">nowhere</span>.
            </p>
          </motion.div>

          {/* Unified message */}
          <motion.div
            style={{ 
              opacity: useTransform(convergence, [0.65, 0.85], [0, 1]),
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
                Until now.
              </h2>
              <p className="text-lg text-muted-foreground">
                One hub. Every source. Instant answers.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};