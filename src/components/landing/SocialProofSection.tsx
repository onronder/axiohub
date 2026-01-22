import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Finally, an AI that doesn't mix up our internal docs with client materials. The clarification feature alone saved us from embarrassing mistakes.",
    author: "Engineering Manager",
    role: "SaaS Company",
  },
  {
    quote: "Our old AI tool went down during a client presentation. Embarrassing. With Axio's failover, we've never had that problem again.",
    author: "Operations Director",
    role: "Consulting Firm",
  },
  {
    quote: "I connect my Google Drive, Notion, and GitHub. Ask one question, get the right answer from the right source. That's it. That's the product.",
    author: "Solo Developer",
    role: "Freelancer",
  },
];

export const SocialProofSection = () => {
  return (
    <section className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Trusted by </span>
            <span className="gradient-text">Privacy-Conscious Teams</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 relative"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              <p className="text-foreground text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
