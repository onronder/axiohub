import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, Database, MessageSquare, FolderOpen, Cloud } from 'lucide-react';

const floatingIcons = [
  { Icon: FileText, label: 'PDF', color: '#ef4444' },
  { Icon: Database, label: 'Notion', color: '#000000' },
  { Icon: MessageSquare, label: 'Slack', color: '#4a154b' },
  { Icon: FolderOpen, label: 'Drive', color: '#4285f4' },
  { Icon: Cloud, label: 'Dropbox', color: '#0061ff' },
];

export const ProblemSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8], [0, 1, 1, 0]);
  const convergence = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const orbGlow = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  return (
    <section ref={containerRef} className="relative min-h-[150vh] bg-void">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity }} className="relative w-full max-w-4xl mx-auto px-4">
          {/* Floating chaotic icons */}
          <div className="absolute inset-0">
            {floatingIcons.map(({ Icon, label, color }, i) => {
              const angle = (i / floatingIcons.length) * Math.PI * 2;
              const radius = 200;
              const initialX = Math.cos(angle) * radius;
              const initialY = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={label}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    x: useTransform(convergence, [0, 1], [initialX, 0]),
                    y: useTransform(convergence, [0, 1], [initialY, 0]),
                    scale: useTransform(convergence, [0, 1], [1, 0]),
                    opacity: useTransform(convergence, [0, 0.8, 1], [1, 1, 0]),
                  }}
                >
                  <motion.div
                    animate={{
                      x: [0, Math.random() * 30 - 15, 0],
                      y: [0, Math.random() * 30 - 15, 0],
                      rotate: [0, Math.random() * 20 - 10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3 + Math.random() * 2,
                      ease: "easeInOut"
                    }}
                    className="glass-card p-4 -translate-x-1/2 -translate-y-1/2"
                  >
                    <Icon size={32} style={{ color }} />
                    <span className="block text-xs mt-1 text-muted-foreground">{label}</span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Central Axio Core Orb */}
          <motion.div
            style={{ 
              scale: useTransform(convergence, [0.5, 1], [0, 1]),
              opacity: orbGlow 
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary blur-xl opacity-60 animate-pulse-glow" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary to-secondary" />
              <div className="absolute inset-6 rounded-full bg-void flex items-center justify-center">
                <span className="text-xs font-bold gradient-text">AXIO</span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            style={{ opacity: useTransform(convergence, [0, 0.3], [1, 0]) }}
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
              opacity: useTransform(convergence, [0.7, 1], [0, 1]),
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
