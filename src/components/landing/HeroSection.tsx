import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';
import { trackCTA, trackScrollToSection } from '@/lib/analytics';

const scrollToDemo = () => {
  trackScrollToSection('demo');
  trackCTA('see_how_it_works', 'hero');
  document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
      <ParticleCanvas />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight"
          >
            <span className="text-foreground">Your Knowledge, </span>
            <span className="gradient-text">Unified</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 md:mb-10 max-w-xl mx-auto px-2"
          >
            The AI that knows which source to trust.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={scrollToDemo}
              className="holographic-glow text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold touch-manipulation min-h-[48px]"
            >
              See How It Works
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - hidden on small mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground/50"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};
