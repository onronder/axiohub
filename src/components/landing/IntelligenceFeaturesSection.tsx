import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Quote, Search, CheckCircle, HelpCircle, ListChecks } from 'lucide-react';

const scopeThresholds = [
  {
    threshold: '≥85%',
    label: 'DOMINANT',
    color: 'scope-dominant',
    description: 'Answer confidently. Cite the source. Move on.',
    example: '"Based on Backend Docs: Here\'s how authentication works…"',
  },
  {
    threshold: '60-84%',
    label: 'CONTESTED',
    color: 'scope-contested',
    description: 'Answer from primary. Show alternatives.',
    example: '"Based on Backend Docs: [answer]\nAlso found in: Product Manual, Engineering Wiki"',
  },
  {
    threshold: '<60%',
    label: 'FRAGMENTED',
    color: 'scope-fragmented',
    description: "Don't guess. Clarify.",
    example: '"I found relevant information in 3 sources.\nWhich should I focus on?"',
  },
];

const additionalFeatures = [
  {
    icon: Lock,
    title: 'Sticky Scope Sessions',
    description: 'Tell us once. We remember. When you select a scope—or when one source dominates 3 times in a row—we lock it for the entire conversation.',
    highlight: '🔒 Searching in: Engineering Wiki',
    note: 'Say "search all sources" anytime to unlock',
  },
  {
    icon: Quote,
    title: 'Source Citations',
    description: 'Every answer includes clickable citations to the exact document and passage. Verify AI responses instantly. Never wonder "where did that come from?"',
    highlight: '📎 Sources: auth-guide.md, api-docs.pdf',
    note: 'Click any citation to jump to the original',
  },
  {
    icon: Search,
    title: 'Hybrid Search',
    description: "Combines keyword matching with semantic understanding. Find information even when you don't know the exact words.",
    highlight: '🔍 "login flow" → auth, SSO, OAuth docs',
    note: 'Semantic + keyword matching combined',
  },
];

export const IntelligenceFeaturesSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Intelligence </span>
            <span className="gradient-text">That Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not AI that guesses. AI that asks.
          </p>
        </motion.div>

        {/* Scope Dominance Guard Feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="glass-card p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Scope Dominance Guard™</h3>
                <p className="text-muted-foreground">Our AI doesn't guess—it calculates.</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-8">
              For every query, we analyze which sources the answer comes from:
            </p>

            {/* Decision Tree */}
            <div className="grid md:grid-cols-3 gap-4">
              {scopeThresholds.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-5 rounded-xl border-2 border-${item.color}/50 bg-${item.color}/10`}
                  style={{
                    borderColor: `hsl(var(--${item.color}) / 0.5)`,
                    backgroundColor: `hsl(var(--${item.color}) / 0.1)`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span 
                      className="text-2xl font-bold"
                      style={{ color: `hsl(var(--${item.color}))` }}
                    >
                      {item.threshold}
                    </span>
                    <span 
                      className="px-2 py-0.5 rounded text-xs font-semibold uppercase"
                      style={{ 
                        backgroundColor: `hsl(var(--${item.color}) / 0.2)`,
                        color: `hsl(var(--${item.color}))` 
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                  
                  <p className="text-foreground font-medium mb-3">{item.description}</p>
                  
                  <div className="p-3 rounded-lg bg-muted/30 border border-border/50">
                    <p className="text-sm text-muted-foreground font-mono whitespace-pre-line">
                      {item.example}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 text-center text-lg font-medium"
            >
              <span className="text-foreground">No other AI knowledge tool does this. </span>
              <span className="text-muted-foreground">They all blend and hope.</span>
            </motion.p>
          </div>
        </motion.div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {additionalFeatures.map((feature, i) => (
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
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{feature.description}</p>
              
              {feature.highlight && (
                <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/30 mb-2">
                  <p className="text-sm text-secondary font-mono">{feature.highlight}</p>
                </div>
              )}
              
              {feature.note && (
                <p className="text-xs text-muted-foreground italic">{feature.note}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
