import { motion } from 'framer-motion';
import { Blend, Brain } from 'lucide-react';

const problems = [
  {
    icon: Blend,
    title: 'The Blender Effect',
    description: 'You upload engineering docs, HR policies, and marketing materials. You ask "What\'s our authentication process?"',
    consequence: 'You get an answer mixing code comments, a 2019 PDF, and your sales deck.',
    emphasis: 'Every. Single. Time.',
  },
  {
    icon: Brain,
    title: 'Conversation Amnesia',
    description: 'You clarify "I mean the customer support wiki" in message 3.',
    consequence: 'Message 4 asks again. Message 5 asks again.',
    emphasis: 'Forever.',
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-destructive/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-destructive/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Two Problems </span>
            <span className="text-destructive">Every AI Tool Ignores</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative glass-card p-8 border-l-4 border-l-scope-contested"
            >
              {/* Problem number badge */}
              <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-scope-contested/20 border border-scope-contested/50 flex items-center justify-center">
                <span className="text-scope-contested font-bold text-lg">#{i + 1}</span>
              </div>

              <div className="pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-scope-contested/20 flex items-center justify-center">
                    <problem.icon className="w-5 h-5 text-scope-contested" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{problem.title}</h3>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {problem.description}
                </p>

                <p className="text-foreground font-medium mb-3 p-3 rounded-lg bg-muted/30 border border-border/50">
                  {problem.consequence}
                </p>

                <p className="text-scope-contested font-semibold text-lg">
                  {problem.emphasis}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-bold">
            <span className="text-foreground">We built Axio to </span>
            <span className="gradient-text">solve both.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
