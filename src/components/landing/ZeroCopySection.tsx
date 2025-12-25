import { motion } from 'framer-motion';
import { FileText, Database, Sheet, Lock, Shield, Binary } from 'lucide-react';

const ZeroCopySection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-axio-void via-axio-void/95 to-axio-void" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">We don't want your files.</span>{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Just your intelligence.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Axio Hub operates on a <span className="text-emerald-400 font-semibold">Zero-Copy Architecture</span>. 
            Your original documents never leave your secure cloud (Google Drive, Notion). 
            We only index the semantic meaning.
          </p>
        </motion.div>

        {/* Animation Flow */}
        <div className="relative max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Left Side - User's Cloud */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-xl">
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium text-emerald-400">Your Storage (Google/Notion)</span>
                </div>
                
                <div className="space-y-3">
                  {/* PDF File */}
                  <motion.div
                    animate={{ boxShadow: ['0 0 0 rgba(16, 185, 129, 0)', '0 0 20px rgba(16, 185, 129, 0.3)', '0 0 0 rgba(16, 185, 129, 0)'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-lg p-3"
                  >
                    <FileText className="w-8 h-8 text-red-400" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Contract.pdf</p>
                      <p className="text-xs text-muted-foreground">2.4 MB</p>
                    </div>
                    <Lock className="w-4 h-4 text-emerald-400 ml-auto" />
                  </motion.div>
                  
                  {/* Notion Page */}
                  <motion.div
                    animate={{ boxShadow: ['0 0 0 rgba(16, 185, 129, 0)', '0 0 20px rgba(16, 185, 129, 0.3)', '0 0 0 rgba(16, 185, 129, 0)'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="flex items-center gap-3 bg-slate-500/10 border border-slate-500/30 rounded-lg p-3"
                  >
                    <Database className="w-8 h-8 text-slate-300" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Project Wiki</p>
                      <p className="text-xs text-muted-foreground">Notion</p>
                    </div>
                    <Lock className="w-4 h-4 text-emerald-400 ml-auto" />
                  </motion.div>
                  
                  {/* Sheet */}
                  <motion.div
                    animate={{ boxShadow: ['0 0 0 rgba(16, 185, 129, 0)', '0 0 20px rgba(16, 185, 129, 0.3)', '0 0 0 rgba(16, 185, 129, 0)'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-lg p-3"
                  >
                    <Sheet className="w-8 h-8 text-green-400" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Budget.xlsx</p>
                      <p className="text-xs text-muted-foreground">1.1 MB</p>
                    </div>
                    <Lock className="w-4 h-4 text-emerald-400 ml-auto" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Middle - The Processing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative flex flex-col items-center justify-center py-8"
            >
              {/* Laser Scanner Effect */}
              <div className="relative w-full h-32 flex items-center justify-center">
                {/* Scanner Line */}
                <motion.div
                  animate={{ 
                    x: [-60, 60, -60],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-1 h-20 bg-gradient-to-b from-transparent via-cyan-400 to-transparent rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                />
                
                {/* Binary Stream */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  {[...Array(8)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: [0, 1, 1, 0],
                        x: [-20, 0, 20, 40]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        delay: i * 0.15,
                        ease: "linear"
                      }}
                      className="absolute text-xs font-mono text-cyan-400/80"
                      style={{ top: `${20 + (i % 4) * 20}%` }}
                    >
                      {i % 2 === 0 ? '01101' : '10010'}
                    </motion.span>
                  ))}
                </div>

                {/* Floating Dots */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`dot-${i}`}
                    animate={{
                      x: [0, 80],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeOut"
                    }}
                    className="absolute w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                    style={{ top: `${30 + (i % 3) * 20}%` }}
                  />
                ))}
              </div>

              {/* Arrow indicator */}
              <div className="flex items-center gap-2 mt-4">
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-cyan-400"
                >
                  <Binary className="w-5 h-5" />
                </motion.div>
                <span className="text-xs text-muted-foreground font-medium">Extracting Meaning</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-cyan-400"
                >
                  →
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Axio Vault */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-emerald-900/30 to-cyan-900/30 border border-emerald-500/30 rounded-2xl p-6 backdrop-blur-xl">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium text-emerald-400">Axio Vector Index</span>
                </div>
                
                {/* Crystalline Structure */}
                <div className="relative h-40 flex items-center justify-center">
                  {/* Abstract geometric shapes */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute"
                  >
                    <div className="w-24 h-24 border border-emerald-400/30 rotate-45" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute"
                  >
                    <div className="w-16 h-16 border border-cyan-400/40 rotate-12" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rotate-45 backdrop-blur-sm" />
                  </motion.div>

                  {/* Floating vector dots */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={`vec-${i}`}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.25
                      }}
                      className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400"
                      style={{
                        left: `${30 + Math.cos(i * 0.8) * 30}%`,
                        top: `${30 + Math.sin(i * 0.8) * 30}%`
                      }}
                    />
                  ))}
                </div>

                <div className="text-center mt-4 pt-4 border-t border-emerald-500/20">
                  <span className="text-xs font-medium text-emerald-400/80 bg-emerald-400/10 px-3 py-1 rounded-full">
                    Encrypted Vectors Only
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Connection Lines (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-px">
            <motion.div
              animate={{ scaleX: [0, 1], opacity: [0, 0.5] }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-full bg-gradient-to-r from-slate-600 to-cyan-500/50 origin-left"
            />
          </div>
          <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-px">
            <motion.div
              animate={{ scaleX: [0, 1], opacity: [0, 0.5] }}
              transition={{ duration: 1, delay: 1 }}
              className="h-full bg-gradient-to-r from-cyan-500/50 to-emerald-500/50 origin-left"
            />
          </div>
        </div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            {
              icon: '🔒',
              title: 'Source Stays Put',
              description: 'Files remain in your controlled environment.',
            },
            {
              icon: '🔢',
              title: 'Vectors, Not Files',
              description: 'We store mathematical representations, not readable documents.',
            },
            {
              icon: '🛡️',
              title: 'Bank-Grade Encryption',
              description: 'Even the vectors are encrypted at rest (AES-256).',
            },
          ].map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30"
            >
              <span className="text-2xl">{point.icon}</span>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{point.title}</h4>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { ZeroCopySection };
