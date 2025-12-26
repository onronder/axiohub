import { motion } from 'framer-motion';
import { ParticleCanvas } from './ParticleCanvas';
import { AutoTypingChat } from './AutoTypingChat';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleCanvas />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
              <span className="block text-foreground">Your Knowledge,</span>
              <span className="block gradient-text">Unified.</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-muted-foreground font-medium">
              From Personal Projects to Field Ops.
            </p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
            >
              The intelligence layer for your files. Whether you're a{' '}
              <span className="text-foreground font-medium">Freelancer</span> checking a contract or a{' '}
              <span className="text-foreground font-medium">Field Crew</span> fixing a turbine—Axio answers instantly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a 
                href="https://app.axiohub.io/register" 
                target="_blank" 
                rel="noopener noreferrer"
                className="holographic-glow px-8 py-4 rounded-full text-lg font-semibold text-white transition-transform hover:scale-105 active:scale-95 text-center"
              >
                Start Free
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Auto-typing Chat Demo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <AutoTypingChat />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};
