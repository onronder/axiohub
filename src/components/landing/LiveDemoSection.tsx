import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, MessageSquare, Database, Send } from 'lucide-react';

interface Source {
  id: string;
  name: string;
  type: 'pdf' | 'notion' | 'slack';
  icon: typeof FileText;
}

const sources: Source[] = [
  { id: '1', name: 'Q4-Planning.pdf', type: 'pdf', icon: FileText },
  { id: '2', name: 'Product Roadmap', type: 'notion', icon: Database },
  { id: '3', name: '#strategy-chat', type: 'slack', icon: MessageSquare },
  { id: '4', name: 'Budget-2024.xlsx', type: 'pdf', icon: FileText },
  { id: '5', name: 'Team Wiki', type: 'notion', icon: Database },
];

const demoSequence = [
  {
    query: "What's our product launch date?",
    response: "Based on your Product Roadmap and Q4 Planning documents, the launch is scheduled for March 15th, 2025.",
    citedSources: ['2', '1'],
  },
  {
    query: "Who's leading the mobile initiative?",
    response: "According to the Team Wiki and recent Slack discussions, Alex Rivera is leading mobile development.",
    citedSources: ['5', '3'],
  },
];

export const LiveDemoSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayedQuery, setDisplayedQuery] = useState('');
  const [displayedResponse, setDisplayedResponse] = useState('');
  const [activeSources, setActiveSources] = useState<string[]>([]);
  const [isTypingQuery, setIsTypingQuery] = useState(false);
  const [isTypingResponse, setIsTypingResponse] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const sourceRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const runDemo = async () => {
      const step = demoSequence[currentStep];
      
      // Reset
      setDisplayedQuery('');
      setDisplayedResponse('');
      setActiveSources([]);

      // Type query fast
      setIsTypingQuery(true);
      for (let i = 0; i <= step.query.length; i++) {
        setDisplayedQuery(step.query.slice(0, i));
        await new Promise(r => setTimeout(r, 25));
      }
      setIsTypingQuery(false);

      await new Promise(r => setTimeout(r, 200));

      // Type response fast
      setIsTypingResponse(true);
      for (let i = 0; i <= step.response.length; i++) {
        setDisplayedResponse(step.response.slice(0, i));
        await new Promise(r => setTimeout(r, 15));
      }
      setIsTypingResponse(false);

      // Quick laser citations
      await new Promise(r => setTimeout(r, 100));
      setActiveSources(step.citedSources);

      // Wait and move to next
      await new Promise(r => setTimeout(r, 3000));
      setCurrentStep((prev) => (prev + 1) % demoSequence.length);
    };

    runDemo();
  }, [currentStep]);

  return (
    <section className="py-32 bg-void relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">See the </span>
            <span className="gradient-text">magic</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Watch how Axio connects your questions to your knowledge.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Mobile: Vertical Stack / Desktop: Side by Side */}
          <div className="flex flex-col lg:flex-row gap-8 relative">
            {/* Chat Panel */}
            <motion.div
              ref={chatRef}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 order-1 lg:order-2"
            >
              <div className="glass-card p-6 h-full min-h-[300px]">
                <div className="flex items-center gap-2 pb-4 border-b border-white/10 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                  <span className="text-sm font-medium text-foreground">Axio Chat</span>
                </div>

                <div className="space-y-4">
                  {/* User query */}
                  <AnimatePresence mode="wait">
                    {displayedQuery && (
                      <motion.div
                        key="query"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-end"
                      >
                        <div className="bg-primary/20 px-4 py-2 rounded-xl max-w-[80%]">
                          <p className="text-sm text-foreground">
                            {displayedQuery}
                            {isTypingQuery && <span className="inline-block w-0.5 h-4 ml-0.5 bg-foreground animate-typing-cursor" />}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Response */}
                  <AnimatePresence mode="wait">
                    {displayedResponse && (
                      <motion.div
                        key="response"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="bg-muted px-4 py-2 rounded-xl max-w-[80%]">
                          <p className="text-sm text-foreground">
                            {displayedResponse}
                            {isTypingResponse && <span className="inline-block w-0.5 h-4 ml-0.5 bg-foreground animate-typing-cursor" />}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Citations */}
                  <AnimatePresence>
                    {activeSources.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-wrap gap-2"
                      >
                        {activeSources.map((sourceId, i) => {
                          const source = sources.find(s => s.id === sourceId);
                          if (!source) return null;
                          return (
                            <motion.span
                              key={sourceId}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.05, duration: 0.1 }}
                              className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-secondary/20 text-secondary border border-secondary/30"
                            >
                              <source.icon size={12} />
                              {source.name}
                            </motion.span>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Fake input */}
                <div className="mt-6 flex items-center gap-2 bg-muted/50 rounded-xl px-4 py-3">
                  <input
                    type="text"
                    placeholder="Ask anything..."
                    className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                    disabled
                  />
                  <Send size={18} className="text-muted-foreground" />
                </div>
              </div>
            </motion.div>

            {/* Sources Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 order-2 lg:order-1"
            >
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-2 pb-4 border-b border-white/10 mb-4">
                  <span className="text-sm font-medium text-foreground">Connected Sources</span>
                </div>

                <div className="space-y-3">
                  {sources.map((source) => {
                    const isActive = activeSources.includes(source.id);
                    return (
                      <motion.div
                        key={source.id}
                        ref={(el) => el && sourceRefs.current.set(source.id, el)}
                        animate={{
                          scale: isActive ? 1.02 : 1,
                          boxShadow: isActive ? '0 0 20px rgba(6, 182, 212, 0.4)' : '0 0 0px rgba(0,0,0,0)',
                        }}
                        transition={{ duration: 0.15 }}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                          isActive ? 'bg-secondary/10 border border-secondary/30' : 'bg-muted/30 border border-transparent'
                        }`}
                      >
                        <source.icon size={18} className={isActive ? 'text-secondary' : 'text-muted-foreground'} />
                        <span className={`text-sm ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {source.name}
                        </span>
                        {isActive && (
                          <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="ml-auto w-2 h-2 rounded-full bg-secondary animate-pulse-glow"
                          />
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
