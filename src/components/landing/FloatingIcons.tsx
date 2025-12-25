import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { 
  Hash, 
  Mail, 
  Cloud, 
  Server, 
  FileText, 
  Database,
  Boxes,
  LayoutGrid,
  CircleDot,
  Columns,
  BookOpen,
  Terminal,
  HardDrive,
  MessageSquare
} from 'lucide-react';

interface FloatingIcon {
  Icon: LucideIcon;
  label: string;
  gradient: string;
  delay: number;
  duration: number;
  x: number;
  y: number;
}

const icons: FloatingIcon[] = [
  // Communication
  { Icon: Hash, label: 'Slack', gradient: 'from-[#4A154B] to-[#E01E5A]', delay: 0, duration: 8, x: 5, y: 15 },
  { Icon: Mail, label: 'Teams', gradient: 'from-[#5059C9] to-[#7B83EB]', delay: 0.5, duration: 9, x: 85, y: 20 },
  { Icon: MessageSquare, label: 'Chat', gradient: 'from-violet-500 to-purple-600', delay: 1, duration: 7, x: 15, y: 70 },
  
  // Storage
  { Icon: Cloud, label: 'Drive', gradient: 'from-[#4285F4] to-[#34A853]', delay: 0.3, duration: 10, x: 90, y: 65 },
  { Icon: HardDrive, label: 'OneDrive', gradient: 'from-[#0078D4] to-[#00BCF2]', delay: 0.8, duration: 8, x: 75, y: 80 },
  { Icon: Boxes, label: 'Box', gradient: 'from-[#0061D5] to-[#00A0DF]', delay: 1.2, duration: 9, x: 8, y: 45 },
  { Icon: Database, label: 'Dropbox', gradient: 'from-[#0061FF] to-[#0088FF]', delay: 0.6, duration: 11, x: 92, y: 40 },
  
  // Project Management
  { Icon: LayoutGrid, label: 'Jira', gradient: 'from-[#0052CC] to-[#2684FF]', delay: 0.4, duration: 8, x: 20, y: 25 },
  { Icon: Columns, label: 'Monday', gradient: 'from-[#FF3D57] to-[#FFCB00]', delay: 0.9, duration: 9, x: 70, y: 12 },
  { Icon: CircleDot, label: 'Asana', gradient: 'from-[#F06A6A] to-[#FF8F73]', delay: 1.1, duration: 7, x: 25, y: 85 },
  { Icon: Boxes, label: 'Trello', gradient: 'from-[#0079BF] to-[#00C2E0]', delay: 0.7, duration: 10, x: 80, y: 55 },
  
  // Technical/Docs
  { Icon: BookOpen, label: 'Confluence', gradient: 'from-[#0052CC] to-[#00B8D9]', delay: 0.2, duration: 9, x: 12, y: 55 },
  { Icon: Terminal, label: 'SFTP', gradient: 'from-emerald-500 to-teal-500', delay: 1.3, duration: 8, x: 65, y: 75 },
  { Icon: FileText, label: 'Notion', gradient: 'from-gray-400 to-gray-600', delay: 0.5, duration: 11, x: 35, y: 10 },
  { Icon: Server, label: 'Server', gradient: 'from-orange-500 to-red-500', delay: 1.4, duration: 7, x: 55, y: 88 },
];

export const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: [0.15, 0.35, 0.15],
            scale: [0.9, 1.1, 0.9],
            y: [0, -20, 0],
          }}
          transition={{
            delay: item.delay,
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{ 
            left: `${item.x}%`, 
            top: `${item.y}%`,
          }}
        >
          <div className="relative group">
            {/* Glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} blur-xl opacity-50`} />
            
            {/* Icon container */}
            <div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${item.gradient} p-[1px]`}>
              <div className="w-full h-full rounded-xl bg-axio-void/90 backdrop-blur-sm flex items-center justify-center">
                <item.Icon className="w-5 h-5 md:w-6 md:h-6 text-white/80" />
              </div>
            </div>
            
            {/* Label */}
            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground/60 whitespace-nowrap">
              {item.label}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
