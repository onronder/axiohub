import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: "Getting Started",
    question: "What is Axio Hub?",
    answer: "Axio Hub is an AI-powered knowledge management platform that connects to your existing tools like Notion, Google Drive, and more. It creates a unified search and chat experience across all your documents without moving or copying your files."
  },
  {
    category: "Getting Started",
    question: "How do I get started with Axio Hub?",
    answer: "Simply sign up for an account, connect your data sources (Notion, Google Drive, etc.), and Axio Hub will automatically index your content. You can then search or chat with your knowledge base immediately."
  },
  {
    category: "Getting Started",
    question: "What integrations does Axio Hub support?",
    answer: "Axio Hub currently supports Notion, Google Drive, Confluence, Slack, and more. We're constantly adding new integrations based on user feedback."
  },
  {
    category: "Security & Privacy",
    question: "Is my data safe with Axio Hub?",
    answer: "Absolutely. Axio Hub uses a Zero-Copy Architecture, meaning your original files never leave their source platforms. We only create encrypted vector embeddings for search functionality. All data is encrypted in transit (TLS 1.2+) and at rest (AES-256)."
  },
  {
    category: "Security & Privacy",
    question: "Does Axio Hub store my original files?",
    answer: "No. Unlike traditional cloud storage, Axio Hub operates on a Zero-Copy Architecture. Your PDFs, Notion pages, and Drive documents remain hosted on your original platforms. We only store encrypted mathematical representations (vectors) and metadata."
  },
  {
    category: "Security & Privacy",
    question: "Is Axio Hub compliant with GDPR and other regulations?",
    answer: "Yes, Axio Hub is fully compliant with GDPR (EU), KVKK (Turkey), and CCPA (California). We take data protection seriously and provide all required user rights including access, rectification, erasure, and data portability."
  },
  {
    category: "AI & Technology",
    question: "How accurate are the AI responses?",
    answer: "Axio Hub uses state-of-the-art Large Language Models (LLMs) to provide highly accurate responses based on your knowledge base. However, like all AI systems, it may occasionally produce incorrect information. We always recommend verifying critical information from the original source."
  },
  {
    category: "AI & Technology",
    question: "Does your AI provider train on my data?",
    answer: "No. We have Zero-Data Retention agreements with all our AI providers (OpenAI, etc.). They do not store or train on your data. Your information is processed and immediately discarded."
  },
  {
    category: "AI & Technology",
    question: "What are vector embeddings?",
    answer: "Vector embeddings are mathematical representations of your text content that enable semantic search. Instead of just matching keywords, Axio Hub understands the meaning behind your queries to find the most relevant information across all your documents."
  },
  {
    category: "Billing & Plans",
    question: "Is there a free trial?",
    answer: "Yes! We offer a trial period so you can explore Axio Hub's features before committing to a paid plan. Access is revoked if no valid subscription is active after the trial ends."
  },
  {
    category: "Billing & Plans",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and various digital payment methods. Paid subscriptions are billed in advance."
  },
  {
    category: "Billing & Plans",
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period. Refunds are subject to our Refund Policy."
  },
  {
    category: "Support",
    question: "How can I contact support?",
    answer: "You can reach our support team at support@fittechs.com. We typically respond within 24 hours on business days."
  },
  {
    category: "Support",
    question: "Do you offer team or enterprise plans?",
    answer: "Yes! We offer team plans with shared workspaces and enterprise solutions with custom features, dedicated support, and SSO integration. Contact us at support@fittechs.com for more information."
  }
];

const categories = [...new Set(faqData.map(item => item.category))];

const FAQAccordionItem = ({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="border-b border-border/50"
  >
    <button
      onClick={onToggle}
      className="w-full py-5 flex items-center justify-between text-left group"
    >
      <span className="text-foreground font-medium pr-4 group-hover:text-primary transition-colors">
        {item.question}
      </span>
      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted/50 flex items-center justify-center">
        {isOpen ? (
          <Minus className="w-4 h-4 text-primary" />
        ) : (
          <Plus className="w-4 h-4 text-muted-foreground" />
        )}
      </span>
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="overflow-hidden"
    >
      <p className="pb-5 text-muted-foreground leading-relaxed">
        {item.answer}
      </p>
    </motion.div>
  </motion.div>
);

const FAQ = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (question: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(question)) {
        newSet.delete(question);
      } else {
        newSet.add(question);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about Axio Hub, our AI-powered knowledge management platform.
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {categories.map((category) => (
            <motion.section
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card/30 rounded-2xl border border-border/50 p-6 md:p-8"
            >
              <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category}
              </h2>
              <div className="divide-y divide-border/30">
                {faqData
                  .filter(item => item.category === category)
                  .map((item) => (
                    <FAQAccordionItem
                      key={item.question}
                      item={item}
                      isOpen={openItems.has(item.question)}
                      onToggle={() => toggleItem(item.question)}
                    />
                  ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-cyan-500/10 border border-border/50"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-3">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our support team is here to help you get the most out of Axio Hub.
          </p>
          <a
            href="mailto:support@fittechs.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
