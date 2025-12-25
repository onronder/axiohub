import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { 
  Hash, 
  Cloud, 
  LayoutGrid, 
  Columns, 
  CircleDot, 
  Boxes, 
  BookOpen, 
  Terminal,
  HardDrive,
  Database,
  FileText,
  TrendingUp
} from 'lucide-react';

interface Integration {
  Icon: LucideIcon;
  name: string;
  color: string;
}

const integrations: Integration[] = [
  { Icon: LayoutGrid, name: 'Jira', color: '#0052CC' },
  { Icon: BookOpen, name: 'Confluence', color: '#0052CC' },
  { Icon: Columns, name: 'Monday.com', color: '#FF3D57' },
  { Icon: CircleDot, name: 'Asana', color: '#F06A6A' },
  { Icon: Boxes, name: 'Trello', color: '#0079BF' },
  { Icon: Hash, name: 'Slack', color: '#4A154B' },
  { Icon: HardDrive, name: 'OneDrive', color: '#0078D4' },
  { Icon: Boxes, name: 'Box', color: '#0061D5' },
  { Icon: Database, name: 'Dropbox', color: '#0061FF' },
  { Icon: Cloud, name: 'Google Drive', color: '#4285F4' },
  { Icon: TrendingUp, name: 'Salesforce', color: '#00A1E0' },
  { Icon: FileText, name: 'Notion', color: '#FFFFFF' },
  { Icon: Terminal, name: 'SFTP', color: '#10B981' },
];

// Duplicate for seamless loop
const duplicatedIntegrations = [...integrations, ...integrations];

export const IntegrationMarquee = () => {
  return (
    <div className="relative py-12 overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      {/* Caption */}
      <p className="text-center text-sm text-muted-foreground mb-8">
        Trusted connections with <span className="text-foreground font-medium">50+ platforms</span>
      </p>
      
      {/* Marquee container */}
      <div className="flex">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-12 items-center"
        >
          {duplicatedIntegrations.map((integration, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-2 cursor-pointer"
            >
              {/* Icon */}
              <div className="relative">
                {/* Hover glow */}
                <div 
                  className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ backgroundColor: integration.color }}
                />
                
                <div className="relative w-14 h-14 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/10 group-hover:scale-110">
                  <integration.Icon className="w-7 h-7 text-white/40 transition-all duration-300 group-hover:text-white" />
                </div>
              </div>
              
              {/* Name */}
              <span className="text-xs text-muted-foreground/50 group-hover:text-foreground transition-colors duration-300 whitespace-nowrap">
                {integration.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
