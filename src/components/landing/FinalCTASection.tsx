import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { trackCTA, trackExternalLink } from '@/lib/analytics';

export const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background gradients - smaller on mobile */}
      <div className="absolute top-0 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/10 rounded-full blur-[80px] md:blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-secondary/10 rounded-full blur-[80px] md:blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-foreground">Ready to </span>
            <span className="gradient-text">Unlock Your Knowledge?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10">
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
              onClick={() => {
                trackCTA('start_free_trial', 'final_cta');
                trackExternalLink('https://app.axiohub.io/auth/register', 'final_cta');
              }}
              className="inline-flex items-center gap-2 holographic-glow px-6 md:px-8 py-4 rounded-full text-base md:text-lg font-semibold text-white transition-transform hover:scale-105 active:scale-95 touch-manipulation min-h-[48px]"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5" />
            </a>

            <p className="text-sm text-muted-foreground px-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
