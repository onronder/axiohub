import { motion } from 'framer-motion';
import { Cpu, Search, Lock } from 'lucide-react';

const valueProps = [
  {
    icon: Cpu,
    title: 'SmartBuffer™',
    body: "<strong>RAM-First Processing (No Disk I/O)</strong>. Your data never touches permanent storage. We process in volatile memory and wipe using DoD 5220.22-M standards.",
  },
  {
    icon: Search,
    title: 'Decoupled Indexing',
    body: "We search <em>stems</em>, not sentences. Your secrets remain <strong>mathematically invisible</strong>. We hold the map, but we can never see the territory.",
  },
  {
    icon: Lock,
    title: 'Fail-Closed Architecture',
    body: "<strong>No key? No boot.</strong> The system physically cannot operate without your encryption keys. If a threat is detected, the airlock seals instantly.",
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
            <span className="text-foreground">Security is Not a Feature. </span>
            <span className="gradient-text">It's Physics.</span>
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
