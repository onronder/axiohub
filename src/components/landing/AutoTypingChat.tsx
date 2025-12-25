import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  type: 'user' | 'assistant';
  text: string;
  sources?: string[];
}

const conversation: Message[] = [
  { type: 'user', text: "What's our Q4 revenue target?" },
  { 
    type: 'assistant', 
    text: "Based on your Q4 Planning deck and Notion workspace, your revenue target is $2.4M with a 15% growth from Q3.",
    sources: ['Q4-Planning.pdf', 'Revenue Goals (Notion)']
  },
  { type: 'user', text: "Who approved the new pricing?" },
  { 
    type: 'assistant', 
    text: "Sarah Chen approved the pricing changes on Dec 12th. The Slack thread shows consensus from the leadership team.",
    sources: ['#pricing-discussion (Slack)', 'Pricing-v3.docx']
  },
];

export const AutoTypingChat = () => {
  const [displayedMessages, setDisplayedMessages] = useState<Message[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSources, setShowSources] = useState(false);

  useEffect(() => {
    if (currentMessageIndex >= conversation.length) {
      // Reset after a pause
      const timeout = setTimeout(() => {
        setDisplayedMessages([]);
        setCurrentMessageIndex(0);
        setCurrentText('');
        setShowSources(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }

    const currentMessage = conversation[currentMessageIndex];
    setIsTyping(true);
    setShowSources(false);

    // Fast typing speed - 20ms per character
    const typingSpeed = currentMessage.type === 'user' ? 30 : 20;
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < currentMessage.text.length) {
        setCurrentText(currentMessage.text.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        // Show sources with quick animation
        if (currentMessage.sources) {
          setTimeout(() => setShowSources(true), 100);
        }
        
        // Move to next message after short pause
        setTimeout(() => {
          setDisplayedMessages(prev => [...prev, currentMessage]);
          setCurrentText('');
          setCurrentMessageIndex(prev => prev + 1);
        }, currentMessage.sources ? 800 : 400);
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, [currentMessageIndex]);

  return (
    <div className="glass-card w-full max-w-md p-4 space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-white/10">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
        <span className="text-xs text-muted-foreground font-medium">Axio Hub</span>
      </div>

      <div className="space-y-3 min-h-[200px]">
        <AnimatePresence mode="popLayout">
          {displayedMessages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] px-3 py-2 rounded-xl text-sm ${
                  msg.type === 'user'
                    ? 'bg-primary/20 text-foreground'
                    : 'bg-muted text-foreground'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Currently typing message */}
        {currentText && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${conversation[currentMessageIndex]?.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] px-3 py-2 rounded-xl text-sm ${
                conversation[currentMessageIndex]?.type === 'user'
                  ? 'bg-primary/20 text-foreground'
                  : 'bg-muted text-foreground'
              }`}
            >
              {currentText}
              {isTyping && (
                <span className="inline-block w-0.5 h-4 ml-0.5 bg-foreground animate-typing-cursor" />
              )}
            </div>
          </motion.div>
        )}

        {/* Sources with laser animation */}
        <AnimatePresence>
          {showSources && conversation[currentMessageIndex - 1]?.sources && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.15 }}
              className="flex flex-wrap gap-2 pl-2"
            >
              {conversation[currentMessageIndex - 1].sources!.map((source, i) => (
                <motion.span
                  key={source}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.1 }}
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md bg-secondary/20 text-secondary border border-secondary/30"
                >
                  <span className="w-1 h-1 rounded-full bg-secondary animate-pulse-glow" />
                  {source}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
