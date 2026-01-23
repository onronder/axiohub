import { motion } from 'framer-motion';
import { Search, Sparkles, ArrowRight, Check, X } from 'lucide-react';

const oldWayPoints = [
  'Search through 5+ different tools',
  'Spend 20+ minutes finding answers',
  'Not sure which source is correct',
  'Information scattered everywhere',
];

const newWayPoints = [
  'Ask in natural language',
  'Get answer in seconds',
  'Automatic source citations',
  'All knowledge unified',
];

export const LiveDemoSectionSimplified = () => {
  const handleDemoClick = () => {
    // Smooth scroll to bottom or show modal (can be extended later)
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <section id="demo" className="py-24 md:py-32 bg-void/50 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">See Axio </span>
            <span className="gradient-text">in Action</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Stop searching. Start asking.
          </p>
        </motion.div>

        {/* Before/After Comparison */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {/* LEFT: Without Axio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 relative"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-red-400" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-6">
                The Old Way
              </h3>

              {/* Problems List */}
              <ul className="space-y-4 mb-6">
                {oldWayPoints.map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <X className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Visual indicator */}
              <div className="flex items-center gap-2 flex-wrap pt-4 border-t border-border/30">
                <div className="text-xs px-3 py-1.5 rounded-full bg-muted/50 border border-border text-muted-foreground">
                  Notion
                </div>
                <div className="text-xs px-3 py-1.5 rounded-full bg-muted/50 border border-border text-muted-foreground">
                  Drive
                </div>
                <div className="text-xs px-3 py-1.5 rounded-full bg-muted/50 border border-border text-muted-foreground">
                  Confluence
                </div>
                <div className="text-xs px-3 py-1.5 rounded-full bg-muted/50 border border-border text-muted-foreground">
                  + 5 more
                </div>
              </div>
            </motion.div>

            {/* RIGHT: With Axio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 relative border-primary/30"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-6">
                <span className="gradient-text">The Axio Way</span>
              </h3>

              {/* Benefits List */}
              <ul className="space-y-4 mb-6">
                {newWayPoints.map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-scope-dominant mt-0.5 shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Visual indicator */}
              <div className="flex items-center gap-2 pt-4 border-t border-border/30">
                <div className="text-xs px-3 py-1.5 rounded-full bg-scope-dominant/10 border border-scope-dominant/30 text-scope-dominant">
                  ✓ All Sources Unified
                </div>
              </div>
            </motion.div>
          </div>

          {/* VS Badge - Desktop Only */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center"
            >
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-primary font-bold text-sm"
              >
                VS
              </motion.span>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <button
              onClick={handleDemoClick}
              className="holographic-glow inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold group"
            >
              Try Interactive Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-muted-foreground mt-4">
              See real examples with actual data
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
