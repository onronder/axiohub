import { SEO } from '@/components/SEO';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { motion } from 'framer-motion';
import { Users, ArrowRight, Check, Scale, Lock, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamFeatures = [
  {
    icon: Users,
    title: 'Ephemeral Deal Rooms',
    description: 'Shared intelligence that exists only while you need it.',
  },
  {
    icon: Scale,
    title: 'Privilege by Design',
    description: 'We cannot be subpoenaed for data we do not have.',
  },
  {
    icon: Lock,
    title: 'Session-Based Access',
    description: 'Collaborate on sensitive M&A or litigation matters securely.',
  },
  {
    icon: Trash2,
    title: 'Automatic Cleanup',
    description: 'When the deal closes, the data room disappears.',
  },
];

const teamBenefits = [
  'Perfect for M&A deal teams and litigation units',
  'Eliminate discovery risk—we hold no discoverable data',
  'Collaborate on sensitive matters without creating permanent records',
  'Session-based workspaces that vanish after use',
  'Enterprise-grade encryption with zero-retention guarantee',
];

const SolutionsTeams = () => {
  return (
    <>
      <SEO 
        title="Secure War Rooms"
        description="Collaborate in a digital clean room. Ephemeral deal rooms for M&A and litigation. We cannot be subpoenaed for data we do not have."
        canonical="/solutions/teams"
        keywords={['ephemeral deal rooms', 'secure collaboration', 'M&A data room', 'litigation workspace']}
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
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Secure War Rooms</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Collaborate in a </span>
                <span className="gradient-text">Digital Clean Room.</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                A shared intelligence workspace that exists only while you need it. 
                Perfect for <strong className="text-foreground">deal rooms</strong> and <strong className="text-foreground">internal investigations</strong>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://app.axiohub.io/register?plan=pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="holographic-glow px-8 py-4 rounded-xl text-lg font-semibold"
                >
                  Create War Room
                </a>
                <Link
                  to="/pricing"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold text-foreground border border-border hover:bg-muted/50 transition-colors"
                >
                  View Pricing <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Feature Highlight */}
        <section className="py-16 bg-void/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="glass-card p-8 md:p-12 border-primary/30">
                <Scale className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Privilege by Design
                </h2>
                <p className="text-xl text-muted-foreground">
                  <strong className="text-foreground">We cannot be subpoenaed for data we do not have.</strong>
                  <br />
                  Your privileged communications remain absolutely protected.
                </p>
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
                <span className="text-foreground">Built for </span>
                <span className="gradient-text">High-Stakes Collaboration</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Features that protect sensitive team operations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {teamFeatures.map((feature, i) => (
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
                  Why Deal Teams Choose Axio
                </h2>
              </motion.div>

              <div className="glass-card p-8">
                <ul className="space-y-4">
                  {teamBenefits.map((benefit, i) => (
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
                Ready for Zero-Liability Collaboration?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Create your first Secure War Room. Free trial available.
              </p>
              <a 
                href="https://app.axiohub.io/register?plan=pro"
                target="_blank"
                rel="noopener noreferrer"
                className="holographic-glow inline-block px-8 py-4 rounded-xl text-lg font-semibold"
              >
                Start Free Trial
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default SolutionsTeams;
