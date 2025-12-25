import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, MessageSquare, Database, Wrench, AlertTriangle, FileSpreadsheet, Check, Users, Factory, User } from 'lucide-react';

interface Source {
  id: string;
  name: string;
  type: string;
  icon: typeof FileText;
  size?: string;
}

// Personal/Freelancer scenario
const personalScenario: { sources: Source[]; demoSequence: { query: string; response: string; citedSources: string[] }[] } = {
  sources: [
    { id: '1', name: 'Client-Contract-2025.pdf', type: 'pdf', icon: FileText },
    { id: '2', name: 'Project-Notes.md', type: 'markdown', icon: FileText },
    { id: '3', name: 'Research-Archive', type: 'notion', icon: Database },
    { id: '4', name: 'Invoices-Folder', type: 'drive', icon: FileSpreadsheet },
  ],
  demoSequence: [
    {
      query: "What's the payment terms in my latest client contract?",
      response: "According to **Client-Contract-2025.pdf (Section 5)**, payment is due **Net 30** after invoice submission. The total project value is **$15,000** paid in 3 milestones.",
      citedSources: ['1'],
    },
    {
      query: "Summarize my research notes on AI trends",
      response: "From your **Research-Archive**: Key trends include multimodal AI, edge computing, and RAG systems. Your **Project-Notes.md** mentions integrating these into the Q1 proposal.",
      citedSources: ['2', '3'],
    },
  ],
};

// Teams scenario (office use case)
const teamsScenario: { sources: Source[]; demoSequence: { query: string; response: string; citedSources: string[] }[] } = {
  sources: [
    { id: '1', name: 'Marketing-Plan-Q4.pdf', type: 'pdf', icon: FileText },
    { id: '2', name: 'Budget-2025.xlsx', type: 'excel', icon: FileSpreadsheet },
    { id: '3', name: 'Product Roadmap', type: 'notion', icon: Database },
    { id: '4', name: '#marketing-chat', type: 'slack', icon: MessageSquare },
  ],
  demoSequence: [
    {
      query: "What's our Q4 marketing budget?",
      response: "Based on **Budget-2025.xlsx** and the **Marketing Plan**, the Q4 budget is **$125,000** allocated across digital ads ($75k), events ($30k), and content ($20k).",
      citedSources: ['1', '2'],
    },
    {
      query: "When is the product launch?",
      response: "According to the **Product Roadmap**, the v2.0 launch is scheduled for **March 15th**. The #marketing-chat confirms the campaign starts **2 weeks prior**.",
      citedSources: ['3', '4'],
    },
  ],
};

// Operations scenario (field ops use case)
const operationsScenario: { sources: Source[]; demoSequence: { query: string; response: string; citedSources: string[] }[] } = {
  sources: [
    { id: '1', name: 'Turbine-Maintenance-Manual.pdf', type: 'pdf', icon: Wrench, size: '200MB' },
    { id: '2', name: 'Safety-Protocols-2025.docx', type: 'doc', icon: AlertTriangle },
    { id: '3', name: 'Field-Ops-Log.xlsx', type: 'excel', icon: FileSpreadsheet },
    { id: '4', name: 'HQ Knowledge Base', type: 'notion', icon: Database },
  ],
  demoSequence: [
    {
      query: "What is the max pressure for Valve X-99 during startup?",
      response: "According to the **Turbine Maintenance Manual (Page 45)**, the max pressure is **140 PSI**. ⚠️ Ensure the bypass valve is open first (See **Safety Protocols**).",
      citedSources: ['1', '2'],
    },
    {
      query: "Show me the lockout procedure for Unit 7",
      response: "From **Safety Protocols 2025 (Section 4.2)**: 1) Notify control room, 2) Apply LOTO tag, 3) Verify zero energy state. See **Field-Ops-Log** for recent history.",
      citedSources: ['2', '3'],
    },
  ],
};

export const LiveDemoSection = () => {
  const [activeTab, setActiveTab] = useState<'personal' | 'teams' | 'operations'>('personal');
  const [currentStep, setCurrentStep] = useState(0);
  const [displayedQuery, setDisplayedQuery] = useState('');
  const [displayedResponse, setDisplayedResponse] = useState('');
  const [isTypingQuery, setIsTypingQuery] = useState(true);
  const [activeSources, setActiveSources] = useState<string[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);

  const scenario = activeTab === 'personal' 
    ? personalScenario 
    : activeTab === 'teams' 
      ? teamsScenario 
      : operationsScenario;
  const sources = scenario.sources;
  const demoSequence = scenario.demoSequence;

  // Reset animation when tab changes
  useEffect(() => {
    setCurrentStep(0);
    setDisplayedQuery('');
    setDisplayedResponse('');
    setIsTypingQuery(true);
    setActiveSources([]);
  }, [activeTab]);

  useEffect(() => {
    if (currentStep >= demoSequence.length) {
      const resetTimer = setTimeout(() => {
        setCurrentStep(0);
        setDisplayedQuery('');
        setDisplayedResponse('');
        setIsTypingQuery(true);
        setActiveSources([]);
      }, 4000);
      return () => clearTimeout(resetTimer);
    }

    const currentDemo = demoSequence[currentStep];
    let queryIndex = 0;
    let responseIndex = 0;

    setIsTypingQuery(true);
    setDisplayedQuery('');
    setDisplayedResponse('');
    setActiveSources([]);

    // Type query fast
    const queryInterval = setInterval(() => {
      if (queryIndex < currentDemo.query.length) {
        setDisplayedQuery(currentDemo.query.slice(0, queryIndex + 1));
        queryIndex++;
      } else {
        clearInterval(queryInterval);
        setIsTypingQuery(false);
        
        // Laser-fast source activation
        setTimeout(() => {
          setActiveSources(currentDemo.citedSources);
        }, 200);

        // Type response
        setTimeout(() => {
          const responseInterval = setInterval(() => {
            if (responseIndex < currentDemo.response.length) {
              setDisplayedResponse(currentDemo.response.slice(0, responseIndex + 1));
              responseIndex++;
            } else {
              clearInterval(responseInterval);
              setTimeout(() => setCurrentStep(prev => prev + 1), 2500);
            }
          }, 15);
        }, 400);
      }
    }, 30);

    return () => clearInterval(queryInterval);
  }, [currentStep, demoSequence]);

  const renderFormattedText = (text: string) => {
    return text.split(/(\*\*[^*]+\*\*)/).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <span key={index} className="text-axio-cyan font-semibold">
            {part.slice(2, -2)}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-axio-violet/10 rounded-full blur-[120px]" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            See It Work. <span className="gradient-text">Your Way.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your scenario—personal projects, office teams, or field operations.
          </p>
        </motion.div>

        {/* Tab Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex p-1 rounded-full bg-white/5 border border-white/10">
            <button
              onClick={() => setActiveTab('personal')}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === 'personal'
                  ? 'bg-gradient-to-r from-axio-violet to-axio-cyan text-white'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <User className="w-4 h-4" />
              For Personal
            </button>
            <button
              onClick={() => setActiveTab('teams')}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === 'teams'
                  ? 'bg-gradient-to-r from-axio-violet to-axio-cyan text-white'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Users className="w-4 h-4" />
              For Teams
            </button>
            <button
              onClick={() => setActiveTab('operations')}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === 'operations'
                  ? 'bg-gradient-to-r from-axio-violet to-axio-cyan text-white'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Factory className="w-4 h-4" />
              For Operations
            </button>
          </div>
        </motion.div>

        {/* Demo Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Chat Panel - 3 cols */}
            <div className="lg:col-span-3 glass-card rounded-2xl p-6 min-h-[400px]">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-sm text-muted-foreground">Axio Chat</span>
              </div>

              <div ref={chatRef} className="space-y-6">
                {/* User Query */}
                <AnimatePresence mode="wait">
                  {displayedQuery && (
                    <motion.div
                      key={`query-${currentStep}-${activeTab}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex justify-end"
                    >
                      <div className="bg-axio-violet/30 rounded-2xl rounded-br-sm px-4 py-3 max-w-[85%]">
                        <p className="text-foreground">
                          {displayedQuery}
                          {isTypingQuery && (
                            <span className="inline-block w-0.5 h-4 bg-axio-cyan ml-0.5 animate-pulse" />
                          )}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* AI Response */}
                <AnimatePresence mode="wait">
                  {displayedResponse && (
                    <motion.div
                      key={`response-${currentStep}-${activeTab}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white/5 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%] border border-white/10">
                        <p className="text-foreground leading-relaxed">
                          {renderFormattedText(displayedResponse)}
                        </p>
                        
                        {/* Cited sources badges */}
                        {activeSources.length > 0 && displayedResponse.length > 50 && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/10"
                          >
                            {activeSources.map(sourceId => {
                              const source = sources.find(s => s.id === sourceId);
                              if (!source) return null;
                              return (
                                <span
                                  key={sourceId}
                                  className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-axio-cyan/20 text-axio-cyan text-xs"
                                >
                                  <source.icon className="w-3 h-3" />
                                  {source.name.split('.')[0]}
                                </span>
                              );
                            })}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Sources Panel - 2 cols */}
            <div className="lg:col-span-2 glass-card rounded-2xl p-6">
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Connected Sources</h4>
              
              <div className="space-y-3">
                {sources.map((source) => {
                  const isActive = activeSources.includes(source.id);
                  return (
                    <motion.div
                      key={`${source.id}-${activeTab}`}
                      animate={{
                        borderColor: isActive ? 'rgba(34, 211, 238, 0.5)' : 'rgba(255, 255, 255, 0.1)',
                        backgroundColor: isActive ? 'rgba(34, 211, 238, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                      }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center gap-3 p-3 rounded-xl border"
                    >
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-axio-cyan/20' : 'bg-white/5'}`}>
                        <source.icon className={`w-4 h-4 ${isActive ? 'text-axio-cyan' : 'text-muted-foreground'}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium truncate ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {source.name}
                        </p>
                        {source.size && (
                          <p className="text-xs text-muted-foreground">{source.size}</p>
                        )}
                      </div>
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-5 h-5 rounded-full bg-axio-cyan flex items-center justify-center"
                        >
                          <Check className="w-3 h-3 text-axio-void" />
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
