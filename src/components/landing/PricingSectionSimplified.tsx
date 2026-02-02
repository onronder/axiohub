import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { trackPricingAction, trackExternalLink, trackEvent } from '@/lib/analytics';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for individuals and small projects',
    price: '$4.99',
    period: '/month',
    features: [
      '50 files, 100 MB storage',
      '5 connected data sources',
      '1M AI tokens/month',
      'Axio Fast ⚡ AI model',
    ],
    allFeatures: [
      '50 files, 100 MB storage',
      '5 connected data sources',
      '1M AI tokens/month',
      'Axio Fast ⚡ AI model',
      'All 12 connectors (except S3)',
      'Ghost Protocol security',
      'Hybrid AI search',
      'Source citations',
      'Web crawling',
      'Community support',
    ],
    cta: 'Get Started',
    ctaUrl: 'https://app.axiohub.io/register?plan=starter',
    isExternal: true,
    popular: false,
  },
  {
    name: 'Pro',
    description: 'For professionals and growing teams',
    price: '$29',
    period: '/month',
    features: [
      '2,000 files, 10 GB storage',
      '100 data sources',
      '10M AI tokens/month',
      'Axio Pro 🧠 + Fast ⚡ AI',
    ],
    allFeatures: [
      '2,000 files, 10 GB storage',
      '100 connected data sources',
      '10M AI tokens/month',
      'Axio Pro 🧠 + Fast ⚡ AI',
      'Team collaboration (5 members)',
      'Priority support',
      'API access',
      'Everything in Starter',
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
      '100M AI tokens/month',
      '100 team members',
    ],
    allFeatures: [
      '100,000 files, 1 TB storage',
      '1,000 data sources',
      '100M AI tokens/month',
      '100 team members',
      'Amazon S3 connector',
      'DoD 5220.22-M secure wipe',
      'SSO & SAML',
      'Custom integrations',
      'Dedicated support + SLA',
      'Custom retention policies',
    ],
    cta: 'Contact Sales',
    ctaUrl: '/contact',
    isExternal: false,
    popular: false,
  },
];

export const PricingSectionSimplified = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCtaClick = (plan: typeof plans[0]) => {
    trackPricingAction(plan.name, 'click_cta');
    if (plan.isExternal) {
      trackExternalLink(plan.ctaUrl, `pricing_${plan.name.toLowerCase()}`);
      window.open(plan.ctaUrl, '_blank', 'noopener,noreferrer');
    } else {
      navigate(plan.ctaUrl);
    }
  };

  const toggleExpand = () => {
    trackEvent('pricing_expand', { expanded: !isExpanded });
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="py-20 md:py-32 bg-background relative">
      {/* Background grid effect - hidden on mobile for performance */}
      <div className="absolute inset-0 hidden md:block bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            <span className="text-foreground">Simple, </span>
            <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto px-2">
            Start free. Scale when you're ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto pt-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-5 md:p-6 relative flex flex-col ${
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
              
              <div className="mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
              
              <div className="mb-4 md:mb-6">
                <span className="text-3xl md:text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              
              <ul className="space-y-2.5 md:space-y-3 mb-4 md:mb-6 flex-1">
                {(isExpanded ? plan.allFeatures : plan.features).map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.allFeatures.length > plan.features.length && (
                <button
                  onClick={toggleExpand}
                  className="text-sm text-primary hover:text-primary/80 mb-3 md:mb-4 flex items-center gap-1 transition-colors touch-manipulation min-h-[44px]"
                >
                  {isExpanded 
                    ? 'Show less' 
                    : `+ ${plan.allFeatures.slice(plan.features.length).slice(0, 2).join(', ')}${plan.allFeatures.length - plan.features.length > 2 ? '...' : ''}`
                  }
                </button>
              )}
              
              <button
                onClick={() => handleCtaClick(plan)}
                className={`w-full py-3 rounded-lg font-semibold transition-all touch-manipulation min-h-[48px] ${
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
          className="text-center mt-8 md:mt-12"
        >
          <Link
            to="/pricing"
            onClick={() => trackEvent('learn_more_click', { link: 'pricing_details' })}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors touch-manipulation min-h-[44px]"
          >
            View full pricing details <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
