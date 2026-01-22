import { motion } from 'framer-motion';
import { User, Users, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const navOptions = [
  {
    icon: User,
    title: 'For Individuals',
    description: 'Personal knowledge base',
    href: '/solutions/individuals',
  },
  {
    icon: Users,
    title: 'For Teams',
    description: 'Collaborative workspace',
    href: '/solutions/teams',
  },
  {
    icon: Building2,
    title: 'For Enterprise',
    description: 'Organization-wide AI',
    href: '/solutions/enterprise',
  },
];

export const QuickNavSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
                className="group glass-card p-6 flex flex-col items-center text-center hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <option.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
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
