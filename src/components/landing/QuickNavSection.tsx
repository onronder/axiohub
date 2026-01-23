import { motion } from 'framer-motion';
import { User, Users, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackQuickNavClick } from '@/lib/analytics';

const navOptions = [
  {
    icon: User,
    title: 'For Individuals',
    description: 'Personal knowledge base',
    href: '/solutions/individuals',
    userType: 'individuals' as const,
  },
  {
    icon: Users,
    title: 'For Teams',
    description: 'Collaborative workspace',
    href: '/solutions/teams',
    userType: 'teams' as const,
  },
  {
    icon: Building2,
    title: 'For Enterprise',
    description: 'Organization-wide AI',
    href: '/solutions/enterprise',
    userType: 'enterprise' as const,
  },
];

export const QuickNavSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {navOptions.map((option, i) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={option.href}
                onClick={() => trackQuickNavClick(option.userType)}
                className="group glass-card p-5 md:p-6 flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] min-h-[120px] touch-manipulation"
              >
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors">
                  <option.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 md:mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 md:mb-4">
                  {option.description}
                </p>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
