import { SEO } from '@/components/SEO';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { motion } from 'framer-motion';
import { Building2, ArrowRight, Check, Shield, Lock, Server, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DataConnectorsSection } from '@/components/landing/DataConnectorsSection';

const enterpriseFeatures = [
  {
    icon: Shield,
    title: 'Ghost Protocol Security',
    description: 'Zero-retention architecture with AES-256 encryption. Your data never persists.',
  },
  {
    icon: Lock,
    title: 'SSO & SAML',
    description: 'Enterprise-grade authentication with single sign-on integration.',
  },
  {
    icon: Server,
    title: 'On-Premise Option',
    description: 'Deploy Axio within your own infrastructure for maximum control.',
  },
  {
    icon: Users,
    title: 'Unlimited Users',
    description: 'Scale across your entire organization without per-seat limitations.',
  },
];

const enterpriseBenefits = [
  'Connect up to 100,000 files with 1 TB storage',
  '99.9% uptime SLA with dedicated support',
  'Custom AI model selection for specific use cases',
  'Amazon S3 connector for enterprise data lakes',
  'Audit logs and compliance reporting',
  'Custom training and onboarding for your team',
];

const SolutionsEnterprise = () => {
  return (
    <>
      <SEO 
        title="Axio Hub for Enterprise - Secure AI Knowledge Platform"
        description="Deploy AI-powered knowledge management at scale. Enterprise-grade security, SSO integration, and dedicated support for your organization."
        canonical="/solutions/enterprise"
        keywords={['enterprise AI', 'enterprise knowledge base', 'secure document AI', 'enterprise RAG platform']}
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
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">For Enterprise</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">AI Knowledge at </span>
                <span className="gradient-text">Enterprise Scale</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Deploy secure, organization-wide AI with enterprise-grade security, 
                compliance, and dedicated support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="holographic-glow px-8 py-4 rounded-xl text-lg font-semibold"
                >
                  Contact Sales
                </Link>
                <Link
                  to="/security"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold text-foreground border border-border hover:bg-muted/50 transition-colors"
                >
                  View Security <ArrowRight className="w-5 h-5" />
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
                <span className="text-foreground">Enterprise-Grade </span>
                <span className="gradient-text">Security & Scale</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Built for organizations that don't compromise on security
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {enterpriseFeatures.map((feature, i) => (
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

        {/* Data Connectors */}
        <DataConnectorsSection />

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
                  Everything Enterprises Need
                </h2>
              </motion.div>

              <div className="glass-card p-8">
                <ul className="space-y-4">
                  {enterpriseBenefits.map((benefit, i) => (
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
                Ready to Scale Your Organization's Knowledge?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Talk to our enterprise team about your specific requirements.
              </p>
              <Link 
                to="/contact"
                className="holographic-glow inline-block px-8 py-4 rounded-xl text-lg font-semibold"
              >
                Contact Sales
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default SolutionsEnterprise;
