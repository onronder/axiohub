import { motion } from 'framer-motion';
import { ShieldAlert, HelpCircle, Quote, Search } from 'lucide-react';

const features = [
  {
    icon: ShieldAlert,
    title: 'Scope Guard™',
    description: 'When your question could match multiple sources, our Scope Dominance Guard detects ambiguity and asks for clarification. No more mixed-up answers from different projects.',
    align: 'left' as const,
  },
  {
    icon: HelpCircle,
    title: 'Smart Clarification',
    description: 'If your query spans multiple knowledge sources, Axio asks "Did you mean Project Alpha or Project Beta?" before answering. You always know where your answer comes from.',
    align: 'right' as const,
  },
  {
    icon: Quote,
    title: 'Source Citations',
    description: 'Every answer includes clickable citations to the exact document and passage. Verify AI responses instantly.',
    align: 'left' as const,
  },
  {
    icon: Search,
    title: 'Hybrid Search',
    description: 'Combines keyword matching with semantic understanding. Find information even when you don\'t know the exact words.',
    align: 'right' as const,
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
            <span className="text-foreground">AI That Understands </span>
            <span className="gradient-text">Context</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Intelligent features that make your knowledge truly accessible
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: feature.align === 'left' ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-6 ${
                feature.align === 'right' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <feature.icon className="w-10 h-10 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 ${feature.align === 'right' ? 'md:text-right' : ''}`}>
                <h3 className="text-2xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
