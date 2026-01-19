import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const FinalCTASection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Ready to </span>
            <span className="gradient-text">Unlock Your Knowledge?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join thousands of teams who trust Axio Hub with their most sensitive data.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <a
              href="https://app.axiohub.io/auth/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 holographic-glow px-8 py-4 rounded-full text-lg font-semibold text-white transition-transform hover:scale-105 active:scale-95"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5" />
            </a>

            <p className="text-sm text-muted-foreground">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
