import { SEO } from '@/components/SEO';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { motion } from 'framer-motion';
import { User, ArrowRight, Check, Ghost, Timer, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const individualFeatures = [
  {
    icon: Ghost,
    title: 'Digital Burner Mode',
    description: 'Analyze sensitive documents without creating a digital footprint.',
  },
  {
    icon: Timer,
    title: 'Single-Session Memory',
    description: 'Close the tab, wipe the universe. Nothing persists.',
  },
  {
    icon: Shield,
    title: 'Zero-Trace Operations',
    description: 'Perfect for market intel, leaked documents, and sensitive research.',
  },
  {
    icon: Zap,
    title: 'Instant Analysis',
    description: 'Ingest, analyze, and destroy in one ephemeral session.',
  },
];

const individualBenefits = [
  'Process sensitive documents without creating audit trails',
  'RAM-only processing—data never touches permanent storage',
  'Perfect for whistleblowers, journalists, and independent traders',
  'Works with any document format—PDFs, spreadsheets, and more',
  'Free tier available—no credit card required',
];

const SolutionsIndividuals = () => {
  return (
    <>
      <SEO 
        title="Solo Analysts"
        description="Your second brain, off the record. Digital burner mode for sensitive analysis. Zero-retention AI for whistleblowers, journalists, and traders."
        canonical="/solutions/individuals"
        keywords={['zero-retention AI', 'ephemeral document analysis', 'secure AI assistant', 'digital burner mode']}
      />
      <main id="main-content" className="bg-background">
        <Header />
        
        {/* Hero */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <User className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Solo Analysts</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Your Second Brain. </span>
                <span className="gradient-text">Off the Record.</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                <strong className="text-foreground">Digital Burner Mode.</strong> Perform deep analysis on leaked documents 
                or market intel without creating a digital footprint.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://app.axiohub.io/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="holographic-glow px-8 py-4 rounded-xl text-lg font-semibold"
                >
                  Deploy Your Ghost Agent
                </a>
                <Link
                  to="/security"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold text-foreground border border-border hover:bg-muted/50 transition-colors"
                >
                  Security Whitepaper <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Single-Session Memory: </span>
                <span className="gradient-text">Close the Tab, Wipe the Universe</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Intelligence without evidence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {individualFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-32 bg-void/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Why Solo Analysts Choose Axio
                </h2>
              </motion.div>

              <div className="glass-card p-8">
                <ul className="space-y-4">
                  {individualBenefits.map((benefit, i) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Ready for Off-the-Record Intelligence?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Deploy your Ghost Agent today. No credit card required.
              </p>
              <a 
                href="https://app.axiohub.io/register"
                target="_blank"
                rel="noopener noreferrer"
                className="holographic-glow inline-block px-8 py-4 rounded-xl text-lg font-semibold"
              >
                Get Started Free
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default SolutionsIndividuals;
