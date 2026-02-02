import { motion } from 'framer-motion';
import { Eraser, EyeOff, Lock } from 'lucide-react';

const valueProps = [
  {
    icon: Eraser,
    title: 'Radical Ephemerality',
    body: "We don't just encrypt your data; we process it in <strong>RAM-only SmartBuffers</strong>. Once the task is done, the data is wiped from physical existence using DoD 5220.22-M standards. You can't leak what you don't hold.",
  },
  {
    icon: EyeOff,
    title: 'Blind Indexing Engine™',
    body: "Our 'Decoupled Search' technology indexes only the <em>stems</em> of words, never the sentences. We hold the map, but we can never see the territory. Your secrets remain mathematically invisible to us.",
  },
  {
    icon: Lock,
    title: 'Fail-Closed Architecture',
    body: "Security isn't a setting; it's our physics. Without your encryption keys, the system physically cannot boot. If a threat is detected, the airlock seals instantly.",
  },
];

export const ValuePropsSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Why Risk Your IP with </span>
            <span className="text-muted-foreground">'Private' Clouds?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-card p-6 md:p-8 rounded-2xl shield-glow transition-all duration-300 group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <prop.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                {prop.title}
              </h3>
              
              <p 
                className="text-muted-foreground leading-relaxed text-sm md:text-base"
                dangerouslySetInnerHTML={{ __html: prop.body }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
