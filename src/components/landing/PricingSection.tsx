import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: 'Starter',
    price: '$4.99',
    period: '/month',
    description: 'Perfect for individuals and small projects',
    features: [
      '50 files, 100 MB storage',
      '5 connected data sources',
      '1 million AI tokens/month',
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
    features: [
      '2,000 files, 10 GB storage',
      '100 connected data sources',
      '10 million AI tokens/month',
      'Smart AI model (GPT-4o)',
      'Team collaboration (5 members)',
      'Priority support',
      'Everything in Starter',
    ],
    cta: 'Start Free Trial',
    popular: true,
    ctaUrl: 'https://app.axiohub.io/register?plan=pro',
    isExternal: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations at scale',
    features: [
      '100,000 files, 1 TB storage',
      '1,000 data sources',
      '100 million AI tokens/month',
      '100 team members',
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

export const PricingSection = () => {
  const navigate = useNavigate();

  const handleCtaClick = (plan: typeof plans[0]) => {
    if (plan.isExternal) {
      window.location.href = plan.ctaUrl;
    } else {
      navigate(plan.ctaUrl);
    }
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">Simple, </span>
            <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Start free. Scale as you grow. Enterprise features when you need them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-xs font-semibold text-white">
                    <Sparkles size={12} />
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`h-full glass-card p-8 ${
                  plan.popular ? 'cyberpunk-border' : ''
                }`}
              >
                <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-black text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleCtaClick(plan)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'holographic-glow text-white'
                      : 'border border-white/20 text-foreground hover:bg-white/5'
                  }`}
                  aria-label={`${plan.cta} - ${plan.name} plan${plan.price !== 'Custom' ? ` at ${plan.price}${plan.period}` : ''}`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about included features */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto"
        >
          All plans include Ghost Protocol zero-retention security, AES-256 encryption, malware scanning, multi-provider AI failover, and source citations.
        </motion.p>
      </div>
    </section>
  );
};
