import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$4.99',
    period: '/month',
    description: 'For personal use',
    features: [
      '3 connected sources',
      '100 queries/month',
      'PDF, Notion, Drive',
      'Community support',
    ],
    cta: 'Get Started',
    highlight: 'Best value to start',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For power users & teams',
    features: [
      'Unlimited sources',
      'Unlimited queries',
      'Advanced AI analysis',
      'Unlimited team members',
      'Priority support',
    ],
    cta: 'Go Pro',
    highlight: 'Most popular',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For field ops & large orgs',
    features: [
      'Everything in Pro',
      'SSO & SAML',
      'SharePoint & SFTP',
      'Dedicated support',
      'SLA guarantee',
      'On-premise option',
    ],
    cta: 'Contact Sales',
    highlight: 'White-glove onboarding',
    popular: false,
  },
];

export const PricingSection = () => {
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
            <span className="text-foreground">Simple </span>
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Start free. Scale as you grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-black text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-secondary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
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
      </div>
    </section>
  );
};
