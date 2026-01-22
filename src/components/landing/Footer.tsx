import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const footerLinks = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Security', href: '/security' },
    { label: 'Integrations', href: '/integrations' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Documentation', href: 'https://docs.axiohub.io', external: true },
    { label: 'Help Center', href: 'https://help.axiohub.io', external: true },
    { label: 'Status', href: 'https://status.axiohub.io', external: true },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Security Policy', href: '/security' },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative bg-void overflow-hidden pt-16 pb-8">
      {/* Massive text background */}
      <div className="relative mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[12vw] md:text-[15vw] font-black leading-none text-center select-none"
          style={{
            background: 'linear-gradient(180deg, hsl(262 83% 58% / 0.2) 0%, transparent 80%)',
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

      <div className="container mx-auto px-4 relative z-10">
        {/* 4-column links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-t border-white/10 pt-12">
          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">Axio Hub</span>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2026 Axio Hub. Your data stays yours.
          </p>
        </div>
      </div>
    </footer>
  );
};
