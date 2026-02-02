import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check, Search, Clock, HelpCircle, Sparkles, FileText, MessageSquare, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { LiveDemoSectionSimplified } from './LiveDemoSectionSimplified';
import { trackDemoOpen, trackCTA } from '@/lib/analytics';

const oldWayItems = [
  { icon: Search, text: "Search through 5+ tools separately" },
  { icon: Clock, text: "Spend 20+ minutes finding answers" },
  { icon: HelpCircle, text: "Uncertain which source is correct" },
  { icon: Database, text: "Information scattered everywhere" },
];

const axioWayItems = [
  { icon: MessageSquare, text: "Ask one question in natural language" },
  { icon: Sparkles, text: "Get answer in 2 seconds" },
  { icon: FileText, text: "Cites the exact source automatically" },
  { icon: Check, text: "All your knowledge unified" },
];

export const LiveDemoStatic = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section id="demo" className="py-16 md:py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          <span className="gradient-text">See the Difference</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 relative items-stretch">
          {/* Left: Old Way */}
          <div className="glass-card p-5 md:p-6 md:rounded-r-none md:border-r-0">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="w-4 h-4 md:w-5 md:h-5 text-destructive" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-muted-foreground">The Old Way</h3>
            </div>
            <ul className="space-y-3 md:space-y-4">
              {oldWayItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <item.icon className="w-4 h-4 text-destructive/70 shrink-0" />
                  <span className="text-sm md:text-base">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* VS Badge - Hidden on mobile, centered column on desktop */}
          <div className="hidden md:flex items-center justify-center z-10 px-4">
            <motion.div
              animate={{ boxShadow: ['0 0 20px hsl(var(--primary)/0.3)', '0 0 40px hsl(var(--primary)/0.5)', '0 0 20px hsl(var(--primary)/0.3)'] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center"
            >
              <span className="text-sm font-bold text-primary">VS</span>
            </motion.div>
          </div>

          {/* Right: Axio Way */}
          <div className="glass-card p-5 md:p-6 md:rounded-l-none border-primary/30">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-scope-dominant/20 flex items-center justify-center">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-scope-dominant" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold gradient-text">The Axio Way</h3>
            </div>
            <ul className="space-y-3 md:space-y-4">
              {axioWayItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <item.icon className="w-4 h-4 text-scope-dominant shrink-0" />
                  <span className="text-sm md:text-base">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 md:mt-10">
          <Button 
            size="lg" 
            onClick={() => {
              trackDemoOpen();
              trackCTA('try_interactive_demo', 'demo_section');
              setShowDemo(true);
            }} 
            className="holographic-glow min-h-[48px] px-6 md:px-8 touch-manipulation"
          >
            Try Interactive Demo <Sparkles className="ml-2 w-4 h-4" />
          </Button>
          <p className="text-xs text-muted-foreground mt-3">See Axio in action with real examples</p>
        </div>
      </div>

      {/* Interactive Demo Modal */}
      <Dialog open={showDemo} onOpenChange={setShowDemo}>
        <DialogContent className="max-w-[95vw] md:max-w-6xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="gradient-text text-xl md:text-2xl">Interactive Demo</DialogTitle>
          </DialogHeader>
          <LiveDemoSectionSimplified />
        </DialogContent>
      </Dialog>
    </section>
  );
};
