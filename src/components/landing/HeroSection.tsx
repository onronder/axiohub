import { motion } from 'framer-motion';
import { ArrowDown, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ParticleCanvas } from './ParticleCanvas';
import { trackCTA, trackScrollToSection } from '@/lib/analytics';

const scrollToDemo = () => {
  trackScrollToSection('demo');
  trackCTA('deploy_ghost_agent', 'hero');
  document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
};

// Data destruction animation component
const DataDestructionAnimation = () => {
  return (
    <motion.div 
      className="flex items-center justify-center gap-2 mt-6 text-muted-foreground/60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.div
        className="flex items-center gap-1"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      >
        <FileText className="w-4 h-4" />
        <span className="text-xs font-mono">doc.pdf</span>
      </motion.div>
      
      <motion.div
        className="flex items-center gap-1"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: [0, 1, 1, 0], x: [0, 0, 10, 20] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5 }}
      >
        <span className="text-xs font-mono text-primary/80">→ 01101...</span>
      </motion.div>
      
      <motion.div
        className="text-xs font-mono text-primary"
        animate={{ opacity: [0, 0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5, times: [0, 0.5, 0.7, 1] }}
      >
        ✓ destroyed
      </motion.div>
    </motion.div>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
      <ParticleCanvas />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
          >
            <span className="text-foreground">Deploy Enterprise AI. </span>
            <span className="secure-gradient">Eliminate Data Liability.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto px-2 leading-relaxed"
          >
            The world's first <strong className="text-foreground">Zero-Retention Employee Agent</strong>. We analyze sensitive M&A, Legal, and R&D documents in ephemeral memory, deliver the insight, and then <strong className="text-foreground">cryptographically destroy</strong> the source.
          </motion.p>
          
          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-8 md:mb-10 text-xs md:text-sm text-muted-foreground/80"
          >
            <span>Architected for SOC 2 Type II</span>
            <span className="hidden sm:inline">•</span>
            <span>HIPAA Compliant</span>
            <span className="hidden sm:inline">•</span>
            <span>DoD 5220.22-M Wiping</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={scrollToDemo}
              className="holographic-glow text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold touch-manipulation min-h-[48px]"
            >
              Deploy Your Ghost Agent
            </button>
            
            <Link
              to="/security"
              onClick={() => trackCTA('security_whitepaper', 'hero')}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base font-medium underline underline-offset-4 decoration-muted-foreground/30 hover:decoration-foreground/50"
            >
              Read the Security Whitepaper
            </Link>
          </motion.div>
          
          <DataDestructionAnimation />
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
