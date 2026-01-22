import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Lock,
  Search,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';

interface Source {
  id: string;
  name: string;
  type: string;
  icon: React.ElementType;
}

// Teams scenario - demonstrates disambiguation
const teamsScenario = {
  sources: [
    { id: 'docs', name: 'Product Docs', type: 'Notion', icon: FileText },
    { id: 'hr', name: 'HR Policies', type: 'Google Drive', icon: FileText },
    { id: 'eng', name: 'Engineering Wiki', type: 'Confluence', icon: FileText },
    { id: 'sales', name: 'Sales Playbook', type: 'Notion', icon: FileText },
  ],
  sequence: [
    {
      query: "What's our vacation policy?",
      searchingSources: ['hr'],
      lockedSource: 'hr',
      response: "According to the **HR Policies** document, full-time employees receive **20 days** of paid vacation per year, plus **10 company holidays**. Unused days can roll over up to 5 days maximum.",
      citedSources: ['hr'],
    },
    {
      query: "How do I request time off?",
      searchingSources: ['hr'],
      lockedSource: 'hr',
      response: "Per **HR Policies**: Submit requests through the HR portal at least **2 weeks in advance**. Your manager will be notified automatically. Emergency requests can be submitted with shorter notice.",
      citedSources: ['hr'],
    },
    {
      query: "What's the deployment process?",
      searchingSources: ['eng', 'docs'],
      disambiguationNeeded: true,
      disambiguationOptions: ['Engineering Wiki (internal)', 'Product Docs (customer-facing)'],
      lockedSource: 'eng',
      response: "From the **Engineering Wiki**: Deployments follow our CI/CD pipeline. Push to `main` triggers staging deploy. Production requires **2 approvals** and runs during the maintenance window (Tuesdays 2-4 AM UTC).",
      citedSources: ['eng'],
    },
  ],
};

export const LiveDemoSectionSimplified = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayedQuery, setDisplayedQuery] = useState('');
  const [displayedResponse, setDisplayedResponse] = useState('');
  const [showingSources, setShowingSources] = useState<string[]>([]);
  const [lockedSource, setLockedSource] = useState<string | null>(null);
  const [showDisambiguation, setShowDisambiguation] = useState(false);
  const [isTypingQuery, setIsTypingQuery] = useState(false);
  const [isTypingResponse, setIsTypingResponse] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scenario = teamsScenario;
  const currentSequence = scenario.sequence[currentStep];

  // Reset and start new step
  useEffect(() => {
    // Clear previous state
    setDisplayedQuery('');
    setDisplayedResponse('');
    setShowingSources([]);
    setLockedSource(null);
    setShowDisambiguation(false);
    setIsTypingQuery(true);
    setIsTypingResponse(false);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const query = currentSequence.query;
    let charIndex = 0;

    // Type query
    intervalRef.current = setInterval(() => {
      if (charIndex < query.length) {
        setDisplayedQuery(query.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(intervalRef.current!);
        setIsTypingQuery(false);
        
        // Start searching animation
        setTimeout(() => {
          setShowingSources(currentSequence.searchingSources);
          
          // Show disambiguation or response
          setTimeout(() => {
            if (currentSequence.disambiguationNeeded) {
              setShowDisambiguation(true);
              setTimeout(() => {
                setShowDisambiguation(false);
                setLockedSource(currentSequence.lockedSource);
                startTypingResponse();
              }, 2000);
            } else {
              setLockedSource(currentSequence.lockedSource);
              startTypingResponse();
            }
          }, 1500);
        }, 500);
      }
    }, 40);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentStep]);

  const startTypingResponse = () => {
    setIsTypingResponse(true);
    const response = currentSequence.response;
    let charIndex = 0;

    intervalRef.current = setInterval(() => {
      if (charIndex < response.length) {
        setDisplayedResponse(response.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(intervalRef.current!);
        setIsTypingResponse(false);
        
        // Move to next step after delay
        setTimeout(() => {
          setCurrentStep((prev) => (prev + 1) % scenario.sequence.length);
        }, 4000);
      }
    }, 15);
  };

  const renderFormattedText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-primary">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">See It </span>
            <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Watch how Axio finds the right source and delivers accurate answers.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Sources Panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 glass-card p-6"
            >
              <h3 className="text-sm font-semibold text-muted-foreground mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Connected Sources
              </h3>
              <div className="space-y-3">
                {scenario.sources.map((source: Source) => (
                  <motion.div
                    key={source.id}
                    animate={{
                      borderColor: lockedSource === source.id 
                        ? 'hsl(var(--scope-dominant))' 
                        : showingSources.includes(source.id)
                          ? 'hsl(var(--primary))'
                          : 'hsl(var(--border))',
                      backgroundColor: lockedSource === source.id
                        ? 'hsl(var(--scope-dominant) / 0.1)'
                        : showingSources.includes(source.id)
                          ? 'hsl(var(--primary) / 0.05)'
                          : 'transparent',
                    }}
                    className="flex items-center gap-3 p-3 rounded-lg border transition-all duration-300"
                  >
                    <source.icon className="w-5 h-5 text-muted-foreground" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {source.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{source.type}</p>
                    </div>
                    <AnimatePresence>
                      {showingSources.includes(source.id) && !lockedSource && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                        >
                          <Search className="w-4 h-4 text-primary animate-pulse" />
                        </motion.div>
                      )}
                      {lockedSource === source.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                        >
                          <Lock className="w-4 h-4 text-scope-dominant" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Chat Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 glass-card p-6 flex flex-col"
            >
              <h3 className="text-sm font-semibold text-muted-foreground mb-4 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Chat
              </h3>
              
              <div className="flex-1 space-y-4 min-h-[300px]">
                {/* User Query */}
                <AnimatePresence mode="wait">
                  {displayedQuery && (
                    <motion.div
                      key={currentStep + '-query'}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex justify-end"
                    >
                      <div className="bg-primary/20 border border-primary/30 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                        <p className="text-foreground">
                          {displayedQuery}
                          {isTypingQuery && <span className="animate-pulse">|</span>}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Disambiguation */}
                <AnimatePresence>
                  {showDisambiguation && currentSequence.disambiguationOptions && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-muted/50 border border-border rounded-2xl rounded-tl-sm px-4 py-3"
                    >
                      <p className="text-sm text-muted-foreground mb-2">
                        I found multiple sources. Which one?
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {currentSequence.disambiguationOptions.map((option: string, i: number) => (
                          <motion.button
                            key={option}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                              i === 0 
                                ? 'bg-primary/20 border-primary text-primary' 
                                : 'border-border text-muted-foreground hover:border-primary/50'
                            }`}
                          >
                            {option}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* AI Response */}
                <AnimatePresence mode="wait">
                  {displayedResponse && (
                    <motion.div
                      key={currentStep + '-response'}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-muted/50 border border-border rounded-2xl rounded-tl-sm px-4 py-3"
                    >
                      <p className="text-foreground leading-relaxed">
                        {renderFormattedText(displayedResponse)}
                        {isTypingResponse && <span className="animate-pulse">|</span>}
                      </p>
                      
                      {/* Source citation */}
                      {!isTypingResponse && currentSequence.citedSources && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="mt-3 pt-3 border-t border-border/50 flex items-center gap-2"
                        >
                          <CheckCircle2 className="w-3 h-3 text-scope-dominant" />
                          <span className="text-xs text-muted-foreground">
                            Source: {scenario.sources.find(s => s.id === currentSequence.citedSources[0])?.name}
                          </span>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Step indicator */}
              <div className="flex justify-center gap-2 mt-4 pt-4 border-t border-border/30">
                {scenario.sequence.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentStep ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
