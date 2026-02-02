import { SEO } from '@/components/SEO';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: 'Starter',
    price: '$4.99',
    period: '/month',
    description: 'Perfect for individuals and small projects',
    limits: [
      { label: 'Files', value: '50' },
      { label: 'Storage', value: '100 MB' },
      { label: 'Data Sources', value: '5' },
      { label: 'AI Tokens', value: '1M/month' },
      { label: 'Team Members', value: '1' },
      { label: 'AI Model', value: 'Axio Fast ⚡' },
    ],
    included: [
      'All 12 connectors (except S3)',
      'Ghost Protocol security',
      'Hybrid AI search',
      'Source citations',
      'Community support',
    ],
    cta: 'Get Started',
    popular: false,
    ctaUrl: 'https://app.axiohub.io/register?plan=starter',
    isExternal: true,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For professionals and growing teams',
    limits: [
      { label: 'Files', value: '2,000' },
      { label: 'Storage', value: '10 GB' },
      { label: 'Data Sources', value: '100' },
      { label: 'AI Tokens', value: '10M/month' },
      { label: 'Team Members', value: '5' },
      { label: 'AI Model', value: 'Axio Pro 🧠' },
    ],
    included: [
      'Everything in Starter',
      'Axio Pro 🧠 smart AI',
      'Team collaboration (5 members)',
      'Priority support',
    ],
    cta: 'Upgrade to Pro',
    popular: true,
    ctaUrl: 'https://app.axiohub.io/register?plan=pro',
    isExternal: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations at scale',
    limits: [
      { label: 'Files', value: '100,000' },
      { label: 'Storage', value: '1 TB' },
      { label: 'Data Sources', value: '1,000' },
      { label: 'AI Tokens', value: '100M/month' },
      { label: 'Team Members', value: '100' },
      { label: 'AI Model', value: 'Axio Pro 🧠' },
    ],
    included: [
      'Everything in Pro',
      'Amazon S3 connector',
      'DoD 5220.22-M secure wipe',
      'Dedicated support',
      'SLA guarantee',
      'Custom retention policies',
    ],
    cta: 'Contact Sales',
    popular: false,
    ctaUrl: '/contact',
    isExternal: false,
  },
];

const faqs = [
  {
    question: 'What counts as a "data source"?',
    answer: 'Each connected folder, repository, or crawled domain counts as one data source (scope). For example, connecting one Google Drive folder = 1 source.',
  },
  {
    question: 'What are AI tokens?',
    answer: 'Tokens measure AI usage. Roughly, 1 token ≈ 4 characters. A typical question and answer uses about 1,000-3,000 tokens.',
  },
  {
    question: 'Can I upgrade or downgrade anytime?',
    answer: 'Yes! Changes take effect immediately. When upgrading, you get instant access to new limits.',
  },
  {
    question: 'Is my data used to train AI models?',
    answer: 'Never. Your data is used only to answer your questions. Ghost Protocol ensures original files are deleted after processing.',
  },
  {
    question: 'What happens if I exceed my limits?',
    answer: 'You\'ll be notified and asked to upgrade. Your existing data remains accessible.',
  },
];

const Pricing = () => {
  const navigate = useNavigate();

  const handleCtaClick = (plan: typeof plans[0]) => {
    if (plan.isExternal) {
      window.location.href = plan.ctaUrl;
    } else {
      navigate(plan.ctaUrl);
    }
  };

  return (
    <>
      <SEO 
        title="Pricing"
        description="Simple pricing for AI knowledge base software. Starter at $4.99/mo, Pro at $29/mo. Chat with documents securely. All plans include Ghost Protocol."
        canonical="/pricing"
        keywords={['AI knowledge base', 'ChatGPT for company documents', 'enterprise RAG platform', 'document AI pricing']}
        ogImage="/og-pricing.png"
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
                <span className="text-foreground">Pricing That </span>
                <span className="gradient-text">Scales With You</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Start free. Upgrade when you need more.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-xs font-semibold text-white">
                        <Sparkles size={12} />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className={`h-full glass-card p-8 ${plan.popular ? 'cyberpunk-border' : ''}`}>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                    <div className="mb-6">
                      <span className="text-5xl font-black text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>

                    {/* Limits Table */}
                    <div className="mb-6 border border-border/50 rounded-lg overflow-hidden">
                      <table className="w-full text-sm">
                        <tbody>
                          {plan.limits.map((limit) => (
                            <tr key={limit.label} className="border-b border-border/30 last:border-0">
                              <td className="py-2 px-3 text-muted-foreground">{limit.label}</td>
                              <td className="py-2 px-3 text-foreground font-medium text-right">{limit.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Included Features */}
                    <div className="mb-8">
                      <p className="text-sm font-medium text-foreground mb-3">Included:</p>
                      <ul className="space-y-2">
                        {plan.included.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => handleCtaClick(plan)}
                      className={`w-full py-3 rounded-xl font-semibold transition-all ${
                        plan.popular
                          ? 'holographic-glow text-white'
                          : 'border border-white/20 text-foreground hover:bg-white/5'
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <AccordionItem value={`item-${i}`} className="glass-card border-0 px-6">
                      <AccordionTrigger className="text-foreground hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Pricing;
