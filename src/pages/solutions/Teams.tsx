import { SEO } from '@/components/SEO';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { motion } from 'framer-motion';
import { Users, ArrowRight, Check, Brain, Lock, Zap, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LiveDemoSectionSimplified } from '@/components/landing/LiveDemoSectionSimplified';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';

const teamFeatures = [
  {
    icon: Brain,
    title: 'Source-Aware Answers',
    description: 'Axio identifies which source contains your answer and asks for clarification when multiple sources match.',
  },
  {
    icon: MessageSquare,
    title: 'Contextual Memory',
    description: 'Conversations remember previous context, so you can ask follow-up questions naturally.',
  },
  {
    icon: Lock,
    title: 'Ghost Protocol Security',
    description: 'Zero-retention architecture means your team\'s data is never stored after processing.',
  },
  {
    icon: Zap,
    title: 'Instant Onboarding',
    description: 'Connect your team\'s knowledge sources in minutes, not weeks.',
  },
];

const teamBenefits = [
  'Reduce time searching for information by 80%',
  'Eliminate confusion from conflicting document versions',
  'Onboard new team members faster with instant knowledge access',
  'Keep sensitive data secure with enterprise-grade encryption',
  'Collaborate with up to 5 team members on Pro plan',
];

const SolutionsTeams = () => {
  return (
    <>
      <SEO 
        title="Axio Hub for Teams - Collaborative AI Knowledge Base"
        description="Give your team instant access to shared knowledge. Connect all your team's documents and get AI-powered answers that cite the right source."
        canonical="/solutions/teams"
        keywords={['team knowledge base', 'collaborative AI', 'team document search', 'enterprise knowledge management']}
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
                <span className="text-sm font-medium text-primary">For Teams</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">Your Team's Knowledge, </span>
                <span className="gradient-text">Instantly Accessible</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Connect your team's documents, wikis, and data sources. Get AI-powered answers 
                that cite exactly where the information came from.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://app.axiohub.io/register?plan=pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="holographic-glow px-8 py-4 rounded-xl text-lg font-semibold"
                >
                  Start Free Trial
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

        {/* Live Demo */}
        <LiveDemoSectionSimplified />

        {/* How It Works */}
        <HowItWorksSection />

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
                <span className="gradient-text">Team Collaboration</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Features that make teamwork seamless
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
                  Why Teams Choose Axio
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
                Ready to Transform Your Team's Workflow?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Start your free trial today. No credit card required.
              </p>
              <a 
                href="https://app.axiohub.io/register?plan=pro"
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

export default SolutionsTeams;
