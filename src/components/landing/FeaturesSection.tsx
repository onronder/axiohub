import { motion } from 'framer-motion';
import { RefreshCw, Brain, Shield, Plug } from 'lucide-react';

const features = [
  {
    icon: RefreshCw,
    title: 'Live Data Sync',
    tagline: 'Fresh data. Always.',
    description: "We don't just synchronize once. When you or someone on your team updates a file or content, it automatically updates in Axio.",
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: Brain,
    title: 'Hybrid RAG',
    tagline: 'Keyword search is dead.',
    description: 'Semantic understanding meets precision retrieval. Find answers by meaning, not just matching words.',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Shield,
    title: 'Privacy Vault',
    tagline: 'Your data stays yours.',
    description: 'End-to-end encryption. Zero-knowledge architecture. Enterprise-grade security without the enterprise complexity.',
    gradient: 'from-emerald-400 to-teal-500',
  },
  {
    icon: Plug,
    title: 'Universal Connector',
    tagline: 'Connects to Modern Clouds, Project Boards & Legacy Systems.',
    description: "Your data isn't just in files. Axio indexes Jira tickets, Monday.com boards, Confluence wikis, Slack threads, and even Legacy SFTP servers.",
    gradient: 'from-orange-400 to-rose-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }
  },
};

export const FeaturesSection = () => {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">Built for </span>
            <span className="gradient-text">the future</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Not another chatbot. A complete knowledge intelligence platform.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group glass-card p-8 hover:bg-white/[0.08] transition-all duration-300"
            >
              {/* Icon with glow */}
              <div className="relative mb-6 inline-block">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} blur-xl opacity-40 group-hover:opacity-60 transition-opacity`} />
                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center`}>
                  <feature.icon size={28} className="text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              
              <p className={`text-sm font-medium mb-3 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                {feature.tagline}
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Animated pulse indicator */}
              <div className="mt-6 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} animate-pulse-glow`} />
                <span className="text-xs text-muted-foreground">Active</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
