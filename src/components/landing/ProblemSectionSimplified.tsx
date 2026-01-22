import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shuffle, ArrowRight } from 'lucide-react';

export const ProblemSectionSimplified = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-void/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="glass-card p-8 border-l-4 border-l-scope-contested mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-scope-contested/20 flex items-center justify-center">
                <Shuffle className="w-6 h-6 text-scope-contested" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              The Blender Effect
            </h2>
            <p className="text-muted-foreground text-lg">
              Your AI mixes answers from unrelated sources, leaving you unsure what to trust. 
              Axio asks which source you mean—before answering.
            </p>
          </div>

          <p className="text-lg text-foreground font-medium mb-4">
            We built Axio to solve this.
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
