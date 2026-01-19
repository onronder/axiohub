import { motion } from 'framer-motion';
import { Plug, ShieldCheck, MessageSquareText } from 'lucide-react';

const steps = [
  {
    icon: Plug,
    step: '01',
    title: 'Connect Your Data',
    description: 'Link your Google Drive, Notion, GitHub, Dropbox, and 8 more sources in seconds. Or simply upload files directly.',
  },
  {
    icon: ShieldCheck,
    step: '02',
    title: 'AI Processes & Secures',
    description: 'Our Ghost Protocol encrypts your data, extracts knowledge, then securely wipes original files. Only encrypted AI-ready chunks remain.',
  },
  {
    icon: MessageSquareText,
    step: '03',
    title: 'Ask Anything',
    description: 'Chat naturally with your knowledge base. Get accurate answers with source citations. Follow up like you\'re talking to a colleague.',
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">How It </span>
            <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to unlock your knowledge
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pt-4"
            >
              {/* Step number badge - positioned outside the card */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold border border-primary/30">
                  STEP {step.step}
                </span>
              </div>

              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="glass-card p-8 pt-10 h-full text-center group hover:border-primary/30 transition-colors">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
