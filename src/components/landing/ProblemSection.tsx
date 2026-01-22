import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shuffle, Brain, ArrowRight } from 'lucide-react';

const problems = [
  {
    icon: Shuffle,
    title: 'The Blender Effect',
    description: 'Your AI mixes answers from unrelated sources. Axio doesn\'t.',
  },
  {
    icon: Brain,
    title: 'Conversation Amnesia',
    description: 'Other AIs forget context mid-conversation. Axio remembers.',
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-void/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Why Other AI Tools </span>
            <span className="text-scope-contested">Fall Short</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 border-l-4 border-l-scope-contested"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-scope-contested/20 flex items-center justify-center">
                  <problem.icon className="w-5 h-5 text-scope-contested" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{problem.title}</h3>
              </div>
              <p className="text-muted-foreground">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-foreground font-medium mb-4">
            We built Axio to solve both.
          </p>
          <Link
            to="/features"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            See How <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
