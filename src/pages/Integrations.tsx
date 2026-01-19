import { SEO } from '@/components/SEO';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  FolderOpen, 
  HardDrive, 
  Building2, 
  Box, 
  Database,
  FileText,
  Github,
  Server,
  Globe,
  Youtube,
  Upload,
  Trello,
  MessageSquare,
  Calendar,
  CheckSquare,
  LayoutGrid,
  FileStack
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Integration {
  name: string;
  icon: typeof Cloud;
  description: string;
  category: string;
  badge?: string;
  comingSoon?: boolean;
}

const integrations: Integration[] = [
  // Cloud Storage
  { 
    name: 'Google Drive', 
    icon: FolderOpen, 
    description: 'Import documents, spreadsheets, and presentations from your Google Drive. Supports shared drives and team folders.',
    category: 'Cloud Storage'
  },
  { 
    name: 'Dropbox', 
    icon: Box, 
    description: 'Connect personal or business Dropbox accounts. Full support for team spaces.',
    category: 'Cloud Storage'
  },
  { 
    name: 'OneDrive', 
    icon: Cloud, 
    description: 'Sync your Microsoft OneDrive files. Works with personal and business accounts.',
    category: 'Cloud Storage'
  },
  { 
    name: 'SharePoint', 
    icon: Building2, 
    description: 'Connect SharePoint document libraries. Access team sites and shared documents.',
    category: 'Cloud Storage'
  },
  { 
    name: 'Box', 
    icon: HardDrive, 
    description: 'Enterprise-grade Box integration. Perfect for regulated industries.',
    category: 'Cloud Storage'
  },
  { 
    name: 'Amazon S3', 
    icon: Database, 
    description: 'Connect your S3 buckets directly. IAM-based authentication.',
    category: 'Cloud Storage',
    badge: 'Enterprise Only'
  },
  
  // Productivity
  { 
    name: 'Notion', 
    icon: FileText, 
    description: 'Import your Notion workspace. Pages, databases, and nested content.',
    category: 'Productivity'
  },
  { 
    name: 'GitHub', 
    icon: Github, 
    description: 'Index your code repositories. Supports private repos and organizations.',
    category: 'Development'
  },
  
  // Other
  { 
    name: 'SFTP Server', 
    icon: Server, 
    description: 'Connect to any SFTP server. Username/password or SSH key authentication.',
    category: 'Files'
  },
  { 
    name: 'Web Crawler', 
    icon: Globe, 
    description: 'Crawl any public website. Configurable depth and domain restrictions.',
    category: 'Web'
  },
  { 
    name: 'YouTube', 
    icon: Youtube, 
    description: 'Transcribe and chat with YouTube videos. Perfect for training content.',
    category: 'Media'
  },
  { 
    name: 'File Upload', 
    icon: Upload, 
    description: 'Drag and drop files directly. Supports PDF, DOCX, TXT, CSV, XLSX.',
    category: 'Files'
  },

  // Coming Soon
  { 
    name: 'Jira', 
    icon: LayoutGrid, 
    description: 'Issue tracking & project context',
    category: 'Project Management',
    comingSoon: true
  },
  { 
    name: 'Slack', 
    icon: MessageSquare, 
    description: 'Channels, threads, and DMs',
    category: 'Communication',
    comingSoon: true
  },
  { 
    name: 'Monday.com', 
    icon: Calendar, 
    description: 'Work OS integration',
    category: 'Project Management',
    comingSoon: true
  },
  { 
    name: 'Asana', 
    icon: CheckSquare, 
    description: 'Task & project management',
    category: 'Project Management',
    comingSoon: true
  },
  { 
    name: 'Trello', 
    icon: Trello, 
    description: 'Kanban boards',
    category: 'Project Management',
    comingSoon: true
  },
  { 
    name: 'Confluence', 
    icon: FileStack, 
    description: 'Wiki & documentation',
    category: 'Documentation',
    comingSoon: true
  },
];

const Integrations = () => {
  const activeIntegrations = integrations.filter(i => !i.comingSoon);
  const comingSoonIntegrations = integrations.filter(i => i.comingSoon);

  return (
    <>
      <SEO 
        title="Integrations - Axio Hub"
        description="Connect everything. 12 integrations today, more coming soon. One unified knowledge base."
        canonical="/integrations"
      />
      <main className="bg-background min-h-screen">
        <Header />
        
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-foreground">Connect </span>
                <span className="gradient-text">Everything</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                12 integrations today. More coming soon.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Active Integrations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {activeIntegrations.map((integration, i) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card p-6 group hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                      <integration.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground">{integration.name}</h3>
                        {integration.badge && (
                          <span className="px-2 py-0.5 rounded-full bg-secondary/20 text-secondary text-xs font-medium">
                            {integration.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{integration.description}</p>
                      <span className="text-xs text-muted-foreground/60">{integration.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Coming Soon</h2>
              <p className="text-muted-foreground">More integrations on the way</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {comingSoonIntegrations.map((integration, i) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 opacity-60"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center">
                      <integration.icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{integration.name}</h3>
                      <p className="text-sm text-muted-foreground">{integration.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground mt-8"
            >
              Want a specific integration?{' '}
              <Link to="/contact" className="text-primary hover:underline">
                Contact us
              </Link>
            </motion.p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Integrations;
