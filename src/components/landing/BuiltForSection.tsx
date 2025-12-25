import { motion } from 'framer-motion';
import { Lightbulb, Factory, ShieldCheck } from 'lucide-react';

const useCases = [
  {
    icon: Lightbulb,
    title: 'Supercharge Your Wiki',
    description: 'Turn your Notion and Drive into an active assistant. Perfect for researchers, freelancers, and agile teams.',
    gradient: 'from-axio-violet to-axio-cyan',
  },
  {
    icon: Factory,
    title: 'Empower the Field',
    description: 'Give technicians instant access to 200MB+ manuals and safety protocols on mobile. No more downtime.',
    gradient: 'from-axio-cyan to-emerald-500',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Audit-Ready',
    description: 'Bank-grade encryption for legal, financial, and sensitive data. Your secrets stay yours.',
    gradient: 'from-emerald-500 to-axio-violet',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export const BuiltForSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-axio-void via-background to-axio-void" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Built for <span className="gradient-text">Everyone</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Start as a second brain. Scale to a corporate hive mind.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${useCase.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
              
              <div className="relative glass-card rounded-2xl p-8 h-full hover:border-white/20 transition-colors">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${useCase.gradient} p-0.5 mb-6`}>
                  <div className="w-full h-full rounded-xl bg-axio-void/80 flex items-center justify-center">
                    <useCase.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
