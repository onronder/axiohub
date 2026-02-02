import { motion } from 'framer-motion';
import { TrendingUp, Scale, FlaskConical } from 'lucide-react';

const solutions = [
  {
    icon: TrendingUp,
    tag: 'Finance',
    headline: 'The Ephemeral Analyst',
    copy: 'Ingest 100MB+ merger documents. Extract alpha. Destroy the evidence. Perfect for M&A due diligence where leaks cost millions.',
  },
  {
    icon: Scale,
    tag: 'Legal',
    headline: 'The Clean-Room Associate',
    copy: 'Review privileged contracts without uploading them to a permanent cloud. Client privilege remains absolute, even against subpoenas.',
  },
  {
    icon: FlaskConical,
    tag: 'R&D',
    headline: 'The IP Guardian',
    copy: 'Accelerate drug discovery or engineering cycles. Query patent databases ensuring your trade secrets never leave the volatile session.',
  },
];

export const SolutionsGrid = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Intelligence for the </span>
            <span className="gradient-text">'Do Not Leak' Economy</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-card p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <solution.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <span className="industry-tag">{solution.tag}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {solution.headline}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {solution.copy}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
