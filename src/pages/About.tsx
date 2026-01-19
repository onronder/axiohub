import { SEO } from '@/components/SEO';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { motion } from 'framer-motion';
import { Shield, Eye, Layers, Heart, Mail } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Ghost Protocol isn\'t a feature, it\'s our foundation. Your data is wiped after processing.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'You always know where answers come from. Every response includes source citations.',
  },
  {
    icon: Layers,
    title: 'Simplicity',
    description: 'Powerful technology shouldn\'t require a manual. Connect and chat in minutes.',
  },
  {
    icon: Heart,
    title: 'Trust',
    description: 'Your data stays yours, period. We never sell, share, or train AI on your content.',
  },
];

const contactEmails = [
  { label: 'General Inquiries', email: 'hello@axiohub.io' },
  { label: 'Sales', email: 'sales@axiohub.io' },
  { label: 'Support', email: 'support@axiohub.io' },
  { label: 'Security', email: 'security@axiohub.io' },
];

const About = () => {
  return (
    <>
      <SEO 
        title="About - Axio Hub"
        description="We believe AI should amplify human intelligence without compromising privacy. Axio Hub exists to make enterprise knowledge accessible while keeping your data under your control."
        canonical="/about"
      />
      <main className="bg-background min-h-screen">
        <Header />
        
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-foreground">About </span>
                <span className="gradient-text">Axio Hub</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We believe AI should amplify human intelligence without compromising privacy. 
                Axio Hub exists to make enterprise knowledge accessible while keeping your data 
                under your control.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {contactEmails.map((contact, i) => (
                <motion.a
                  key={contact.email}
                  href={`mailto:${contact.email}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-5 text-center group hover:border-primary/30 transition-colors"
                >
                  <Mail className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                  <p className="font-medium text-foreground text-sm">{contact.email}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default About;
