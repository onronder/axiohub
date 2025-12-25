import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Section {
  id: string;
  title: string;
}

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  sections: Section[];
  children: React.ReactNode;
}

export const LegalPageLayout = ({ title, subtitle, sections, children }: LegalPageLayoutProps) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar - Table of Contents */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
              >
                <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                  Contents
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </motion.div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {title}
              </h1>
              <p className="text-muted-foreground mb-12">
                {subtitle}
              </p>

              <div className="prose prose-invert max-w-none">
                {children}
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

interface LegalSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const LegalSection = ({ id, title, children }: LegalSectionProps) => (
  <section id={id} className="mb-12 scroll-mt-24">
    <h2 className="text-2xl font-semibold text-foreground mb-4 pb-2 border-b border-border/50">
      {title}
    </h2>
    <div className="text-muted-foreground space-y-4 leading-relaxed">
      {children}
    </div>
  </section>
);

interface LegalCalloutProps {
  type?: 'info' | 'warning' | 'important';
  title: string;
  children: React.ReactNode;
}

export const LegalCallout = ({ type = 'info', title, children }: LegalCalloutProps) => {
  const styles = {
    info: 'border-primary/50 bg-primary/5',
    warning: 'border-yellow-500/50 bg-yellow-500/5',
    important: 'border-cyan-500/50 bg-cyan-500/5',
  };

  return (
    <div className={`p-6 rounded-xl border ${styles[type]} my-6`}>
      <h4 className="font-semibold text-foreground mb-2">{title}</h4>
      <div className="text-muted-foreground text-sm">{children}</div>
    </div>
  );
};
