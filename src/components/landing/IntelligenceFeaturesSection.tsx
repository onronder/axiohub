import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Lock, 
  Quote, 
  Search,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Scope Dominance Guard',
    description: 'AI that asks before it assumes',
  },
  {
    icon: Lock,
    title: 'Sticky Scope Sessions',
    description: 'Tell us once, we remember',
  },
  {
    icon: Quote,
    title: 'Source Citations',
    description: 'Every answer shows its source',
  },
  {
    icon: Search,
    title: 'Hybrid Search',
    description: 'Find info even without exact words',
  },
];

export const IntelligenceFeaturesSection = () => {
  return (
    <section className="py-24 bg-void relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Intelligence</span>
            <span className="text-foreground"> That Works</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Context-aware answers, not keyword matching
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 text-center hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
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
            to="/features"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-colors font-medium"
          >
            Explore All Features <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
