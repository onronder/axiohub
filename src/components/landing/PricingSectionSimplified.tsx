import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for individuals',
    price: '$0',
    period: '/month',
    features: [
      '50 files, 100 MB storage',
      '5 connected data sources',
      'Ghost Protocol security',
      'All connectors (except S3)',
    ],
    allFeatures: [
      '50 files, 100 MB storage',
      '5 connected data sources',
      'Ghost Protocol security',
      'All connectors (except S3)',
      'Standard AI model (GPT-4o mini)',
      'Community support',
      'Basic analytics',
    ],
    cta: 'Start Free',
    ctaUrl: 'https://app.axiohub.io/register',
    isExternal: true,
    popular: false,
  },
  {
    name: 'Pro',
    description: 'For power users & small teams',
    price: '$30',
    period: '/month',
    features: [
      '2,000 files, 10 GB storage',
      '100 data sources',
      'Smart AI model (GPT-4o)',
      'Team collaboration (5 members)',
    ],
    allFeatures: [
      '2,000 files, 10 GB storage',
      '100 data sources',
      'Smart AI model (GPT-4o)',
      'Team collaboration (5 members)',
      'Priority support',
      'Advanced analytics',
      'Custom integrations',
      'API access',
    ],
    cta: 'Start Free Trial',
    ctaUrl: 'https://app.axiohub.io/register?plan=pro',
    isExternal: true,
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For organizations at scale',
    price: 'Custom',
    period: '',
    features: [
      '100,000 files, 1 TB storage',
      '1,000 data sources',
      'Amazon S3 connector',
      'Dedicated support + SLA',
    ],
    allFeatures: [
      '100,000 files, 1 TB storage',
      '1,000 data sources',
      'Amazon S3 connector',
      'Dedicated support + SLA',
      'Custom AI model selection',
      'SSO/SAML integration',
      'On-premise deployment option',
      'Custom training',
      '99.9% uptime guarantee',
    ],
    cta: 'Contact Sales',
    ctaUrl: '/contact',
    isExternal: false,
    popular: false,
  },
];

export const PricingSectionSimplified = () => {
  const navigate = useNavigate();
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  const handleCtaClick = (plan: typeof plans[0]) => {
    if (plan.isExternal) {
      window.open(plan.ctaUrl, '_blank', 'noopener,noreferrer');
    } else {
      navigate(plan.ctaUrl);
    }
  };

  const toggleExpand = (planName: string) => {
    setExpandedPlan(expandedPlan === planName ? null : planName);
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Simple, </span>
            <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Start free. Scale when you're ready.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-6 relative flex flex-col ${
                plan.popular ? 'border-primary ring-1 ring-primary/20' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              
              <ul className="space-y-3 mb-6 flex-1">
                {(expandedPlan === plan.name ? plan.allFeatures : plan.features).map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.allFeatures.length > plan.features.length && (
                <button
                  onClick={() => toggleExpand(plan.name)}
                  className="text-sm text-primary hover:text-primary/80 mb-4 flex items-center gap-1 transition-colors"
                >
                  {expandedPlan === plan.name ? 'Show less' : `+${plan.allFeatures.length - plan.features.length} more features`}
                </button>
              )}
              
              <button
                onClick={() => handleCtaClick(plan)}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'holographic-glow'
                    : 'bg-muted hover:bg-muted/80 text-foreground'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View full pricing details <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
