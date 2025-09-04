import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  History, 
  MessageSquare, 
  Code, 
  Terminal, 
  Clock,
  Calendar,
  ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HistoryItem {
  id: string;
  tool: 'chat' | 'coder' | 'terminal';
  title: string;
  description: string;
  timestamp: Date;
  duration?: string;
}

const HistorySection = () => {
  const navigate = useNavigate();

  // Mock history data - in a real app, this would come from storage/API
  const historyItems: HistoryItem[] = [
    {
      id: '1',
      tool: 'chat',
      title: 'Security Analysis Discussion',
      description: 'Analyzed SQL injection vulnerabilities in web applications',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      duration: '15 min'
    },
    {
      id: '2',
      tool: 'coder',
      title: 'Python Security Script',
      description: 'Developed network scanning script for ethical testing',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
      duration: '45 min'
    },
    {
      id: '3',
      tool: 'terminal',
      title: 'System Reconnaissance',
      description: 'Performed network discovery and enumeration commands',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
      duration: '30 min'
    },
    {
      id: '4',
      tool: 'chat',
      title: 'Penetration Testing Guide',
      description: 'Discussed OWASP Top 10 vulnerabilities and mitigation strategies',
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      duration: '20 min'
    },
    {
      id: '5',
      tool: 'coder',
      title: 'Web Scraping Tool',
      description: 'Built ethical web scraping tool for security research',
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      duration: '1 hr'
    }
  ];

  const getToolIcon = (tool: string) => {
    switch (tool) {
      case 'chat': return MessageSquare;
      case 'coder': return Code;
      case 'terminal': return Terminal;
      default: return History;
    }
  };

  const getToolColor = (tool: string) => {
    switch (tool) {
      case 'chat': return 'neon-red';
      case 'coder': return 'neon-purple';
      case 'terminal': return 'neon-blue';
      default: return 'primary';
    }
  };

  const getToolPath = (tool: string) => {
    switch (tool) {
      case 'chat': return '/chat';
      case 'coder': return '/coder';
      case 'terminal': return '/terminal';
      default: return '/';
    }
  };

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays} days ago`;
    
    return date.toLocaleDateString();
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <History className="w-6 h-6 text-primary animate-glow-pulse" />
          <h3 className="text-2xl font-bold text-foreground">Recent Activity</h3>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-muted-foreground hover:text-primary"
        >
          View All
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      <Card className="cyber-border bg-background/50 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span>Tool Usage History</span>
          </CardTitle>
          <CardDescription>
            Track your recent sessions across all CyberCat tools
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-80">
            <div className="p-6 pt-0 space-y-4">
              {historyItems.map((item, index) => {
                const IconComponent = getToolIcon(item.tool);
                const toolColor = getToolColor(item.tool);
                
                return (
                  <div
                    key={item.id}
                    className="group flex items-start space-x-4 p-4 rounded-lg border border-border/50 bg-background/30 hover:bg-background/60 hover:border-primary/30 transition-all duration-300 cursor-pointer animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => navigate(getToolPath(item.tool))}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-${toolColor}/10 border border-${toolColor}/20 flex items-center justify-center group-hover:glow-${toolColor.split('-')[1]} transition-all duration-300`}>
                      <IconComponent className={`w-5 h-5 text-${toolColor}`} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <div className="flex items-center space-x-2 flex-shrink-0 ml-2">
                          {item.duration && (
                            <Badge variant="secondary" className="text-xs">
                              {item.duration}
                            </Badge>
                          )}
                          <Badge variant="outline" className={`text-xs border-${toolColor}/30 text-${toolColor}`}>
                            {item.tool}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{formatTimestamp(item.timestamp)}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default HistorySection;