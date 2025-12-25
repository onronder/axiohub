import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="relative bg-void overflow-hidden pt-32 pb-8">
      {/* Massive text */}
      <div className="relative">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[15vw] md:text-[20vw] font-black leading-none text-center select-none"
          style={{
            background: 'linear-gradient(180deg, hsl(262 83% 58% / 0.3) 0%, transparent 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          AXIO HUB
        </motion.h2>
        
        {/* Glow effect behind text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-32 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-3xl" />
        </div>
      </div>

      {/* Links */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm font-medium text-foreground">Axio Hub</span>
          </div>

          <nav className="flex items-center gap-8">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </a>
          </nav>

          <p className="text-xs text-muted-foreground">
            © 2025 Axio Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
