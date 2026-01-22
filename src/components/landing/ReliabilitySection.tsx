import { motion } from 'framer-motion';
import { Server, Shield, Zap, Clock, ArrowDown, CheckCircle } from 'lucide-react';

const stats = [
  { value: '99.9%', label: 'Effective Uptime' },
  { value: '3', label: 'AI Providers' },
  { value: '60s', label: 'Auto Recovery' },
  { value: '0', label: 'Manual Intervention' },
];

const flowSteps = [
  { label: 'Primary Provider', sublabel: 'Industry-Leading LLM', status: 'active' },
  { label: 'Circuit Breaker', sublabel: '5 consecutive failures', status: 'monitor' },
  { label: 'Fallback 1', sublabel: 'High-Performance Alternative', status: 'standby' },
  { label: 'Fallback 2', sublabel: 'Enterprise Backup Provider', status: 'standby' },
];

export const ReliabilitySection = () => {
  return (
    <section className="py-24 bg-muted/10 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Always-On </span>
            <span className="gradient-text">Intelligence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            When Your AI Provider Goes Down, You Don't
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Problem statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Most AI tools are single-provider wrappers. When that provider has problems—and they do, 
              <span className="text-foreground font-medium"> 2-3 times per month</span>—your entire workflow stops.
            </p>
            <p className="mt-4 text-2xl font-bold text-foreground">
              Axio is different.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Failover Diagram */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 md:p-8"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Server className="w-5 h-5 text-primary" />
                Triple-Redundant AI
              </h3>

              <div className="space-y-3">
                {flowSteps.map((step, i) => (
                  <div key={step.label}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={`p-4 rounded-xl border ${
                        step.status === 'active' 
                          ? 'border-scope-dominant/50 bg-scope-dominant/10' 
                          : step.status === 'monitor'
                            ? 'border-scope-contested/50 bg-scope-contested/10'
                            : 'border-border/50 bg-muted/30'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-foreground">{step.label}</p>
                          <p className="text-sm text-muted-foreground">{step.sublabel}</p>
                        </div>
                        {step.status === 'active' && (
                          <span className="px-2 py-1 rounded-full bg-scope-dominant/20 text-scope-dominant text-xs font-medium">
                            Active
                          </span>
                        )}
                      </div>
                    </motion.div>
                    
                    {i < flowSteps.length - 1 && (
                      <div className="flex justify-center py-1">
                        <ArrowDown className="w-4 h-4 text-muted-foreground/50" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* How it works + Stats */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 md:p-8"
              >
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-secondary" />
                  How It Works
                </h3>
                
                <ul className="space-y-3">
                  {[
                    'Normal operation: Queries route to primary provider',
                    '5 consecutive failures: Circuit breaker opens automatically',
                    'All traffic routes to backup providers seamlessly',
                    'After 60 seconds: Test request checks primary health',
                    'If healthy: Normal operation resumes',
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-scope-dominant flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <p className="mt-6 text-foreground font-medium text-center p-3 rounded-lg bg-scope-dominant/10 border border-scope-dominant/30">
                  Your team never sees an error page.
                </p>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="glass-card p-4 text-center"
                  >
                    <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
