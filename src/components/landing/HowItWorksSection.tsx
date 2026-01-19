import { motion } from 'framer-motion';
import { Plug, ShieldCheck, MessageSquareText, ArrowRight } from 'lucide-react';

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
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">How It </span>
            <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to unlock your knowledge
          </p>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            <div className="grid grid-cols-3 gap-12">
              {steps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative"
                >
                  {/* Step number circle */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <span className="text-xl font-bold text-white">{step.step}</span>
                      </div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-lg opacity-40" />
                    </div>
                  </div>

                  {/* Arrow connector (except last) */}
                  {i < steps.length - 1 && (
                    <div className="absolute top-8 left-[calc(50%+40px)] w-[calc(100%-40px)] flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-primary/50" />
                    </div>
                  )}

                  {/* Content card */}
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Timeline */}
        <div className="lg:hidden max-w-md mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent" />

            <div className="space-y-12">
              {steps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative flex gap-6"
                >
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <span className="text-xl font-bold text-white">{step.step}</span>
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-lg opacity-30" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
