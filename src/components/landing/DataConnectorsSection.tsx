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
  LayoutGrid
} from 'lucide-react';

interface Connector {
  name: string;
  icon: typeof Cloud;
  description?: string;
  badge?: string;
  category: 'cloud' | 'productivity' | 'other' | 'coming';
}

const connectors: Connector[] = [
  // Cloud Storage
  { name: 'Google Drive', icon: FolderOpen, category: 'cloud' },
  { name: 'Dropbox', icon: Box, category: 'cloud' },
  { name: 'OneDrive', icon: Cloud, category: 'cloud' },
  { name: 'SharePoint', icon: Building2, category: 'cloud' },
  { name: 'Box', icon: HardDrive, category: 'cloud' },
  { name: 'Amazon S3', icon: Database, badge: 'Enterprise', category: 'cloud' },
  
  // Productivity
  { name: 'Notion', icon: FileText, category: 'productivity' },
  { name: 'GitHub', icon: Github, category: 'productivity' },
  
  // Other Sources
  { name: 'SFTP Server', icon: Server, category: 'other' },
  { name: 'Web Crawler', icon: Globe, category: 'other' },
  { name: 'YouTube', icon: Youtube, badge: 'Transcription', category: 'other' },
  { name: 'File Upload', icon: Upload, description: 'PDF, DOCX, TXT, CSV, XLSX', category: 'other' },
  
  // Coming Soon
  { name: 'Jira', icon: LayoutGrid, badge: 'Coming Soon', category: 'coming' },
  { name: 'Slack', icon: MessageSquare, badge: 'Coming Soon', category: 'coming' },
  { name: 'Monday.com', icon: Calendar, badge: 'Coming Soon', category: 'coming' },
  { name: 'Asana', icon: CheckSquare, badge: 'Coming Soon', category: 'coming' },
  { name: 'Trello', icon: Trello, badge: 'Coming Soon', category: 'coming' },
];

export const DataConnectorsSection = () => {
  const activeConnectors = connectors.filter(c => c.category !== 'coming');
  const comingSoonConnectors = connectors.filter(c => c.category === 'coming');

  return (
    <section className="py-24 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Connect Your </span>
            <span className="gradient-text">Entire Ecosystem</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Multiple integrations and counting. One unified knowledge base.
          </p>
        </motion.div>

        {/* Active Connectors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
          {activeConnectors.map((connector, i) => (
            <motion.div
              key={connector.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-5 text-center group hover:border-primary/30 transition-all hover:scale-105"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                <connector.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <h4 className="font-semibold text-foreground text-sm mb-1">{connector.name}</h4>
              {connector.badge && (
                <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-medium ${
                  connector.badge === 'Enterprise' 
                    ? 'bg-secondary/20 text-secondary' 
                    : 'bg-primary/20 text-primary'
                }`}>
                  {connector.badge}
                </span>
              )}
              {connector.description && (
                <p className="text-xs text-muted-foreground mt-1">{connector.description}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">Coming Soon</p>
          <div className="flex flex-wrap justify-center gap-3">
            {comingSoonConnectors.map((connector, i) => (
              <motion.div
                key={connector.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 opacity-60"
              >
                <connector.icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{connector.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
