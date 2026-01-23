import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Users, Building2, ArrowRight, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const STORAGE_KEY = 'axiohub_path_selected';

const navOptions = [
  {
    icon: User,
    title: 'For Individuals',
    description: 'Personal knowledge base',
    detailedDescription: 'Build your personal second brain',
    href: '/solutions/individuals',
    value: 'individuals',
  },
  {
    icon: Users,
    title: 'For Teams',
    description: 'Collaborative workspace',
    detailedDescription: 'Collaborate and share knowledge',
    href: '/solutions/teams',
    value: 'teams',
  },
  {
    icon: Building2,
    title: 'For Enterprise',
    description: 'Organization-wide AI',
    detailedDescription: 'Enterprise-grade security and scale',
    href: '/solutions/enterprise',
    value: 'enterprise',
  },
];

export const QuickNavSection = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has already made a selection
    const hasSelected = localStorage.getItem(STORAGE_KEY);

    if (!hasSelected) {
      // Show modal after 2 second delay for better UX
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Prevent body scroll when modal is open
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const handleSelection = (path: string, value: string) => {
    localStorage.setItem(STORAGE_KEY, value);
    setShowModal(false);
    navigate(path);
  };

  const handleDismiss = () => {
    localStorage.setItem(STORAGE_KEY, 'browsing');
    setShowModal(false);
  };

  const handleEscape = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleDismiss();
    }
  };

  return (
    <>
      {/* First-Visit Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
            onClick={handleDismiss}
            onKeyDown={handleEscape}
            role="dialog"
            aria-modal="true"
            aria-labelledby="path-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-background border border-border hover:border-primary flex items-center justify-center transition-colors z-10 group"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>

              {/* Modal content */}
              <div className="glass-card p-8 md:p-12">
                {/* Title */}
                <div className="text-center mb-10">
                  <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    id="path-modal-title"
                    className="text-3xl md:text-4xl font-bold mb-4"
                  >
                    <span className="text-foreground">What brings you to </span>
                    <span className="gradient-text">Axio Hub?</span>
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-muted-foreground text-lg"
                  >
                    Choose your path to see relevant information
                  </motion.p>
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {navOptions.map((option, i) => (
                    <motion.button
                      key={option.value}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      onClick={() => handleSelection(option.href, option.value)}
                      className="group glass-card p-6 text-center hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                    >
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                        <option.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {option.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {option.detailedDescription}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-primary text-sm font-medium">
                        Explore
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Dismiss option */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-center"
                >
                  <button
                    onClick={handleDismiss}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
                  >
                    Just browsing
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Original QuickNav Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {navOptions.map((option, i) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={option.href}
                  className="group glass-card p-6 flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] min-h-[200px] sm:min-h-0"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <option.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {option.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {option.description}
                  </p>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-auto" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
