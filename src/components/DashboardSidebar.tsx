import { useNavigate, useLocation } from 'react-router-dom';
import { 
  MessageSquare, 
  Code, 
  Terminal, 
  Home,
  Settings,
  HelpCircle,
  Zap,
  Brain,
  Shield,
  ChevronRight
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import cybercatLogo from '@/assets/cybercat-logo.jpg';

const mainTools = [
  { 
    title: 'Dashboard', 
    url: '/dashboard', 
    icon: Home,
    description: 'Main overview and stats'
  },
  { 
    title: 'AI Chat Assistant', 
    url: '/chat', 
    icon: MessageSquare,
    description: 'Security research guidance'
  },
  { 
    title: 'Code Editor', 
    url: '/coder', 
    icon: Code,
    description: 'VS Code-like environment'
  },
  { 
    title: 'Command Terminal', 
    url: '/terminal', 
    icon: Terminal,
    description: 'Execute commands and scripts'
  },
];

const comingSoonTools = [
  { 
    title: 'Vulnerability Scanner', 
    url: '#', 
    icon: Shield,
    description: 'Automated security scanning'
  },
  { 
    title: 'AI Code Analysis', 
    url: '#', 
    icon: Brain,
    description: 'Intelligent code review'
  },
  { 
    title: 'Exploit Database', 
    url: '#', 
    icon: Zap,
    description: 'CVE and exploit research'
  },
];

const bottomItems = [
  { 
    title: 'Settings', 
    url: '/settings', 
    icon: Settings,
    description: 'Configure preferences'
  },
  { 
    title: 'Help & Support', 
    url: '/help', 
    icon: HelpCircle,
    description: 'Documentation and support'
  },
];

export function DashboardSidebar() {
  const { open } = useSidebar();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  
  const handleNavigation = (url: string) => {
    if (url !== '#') {
      navigate(url);
    }
  };

  return (
    <Sidebar className={open ? "w-64" : "w-16"} collapsible="icon">
      <SidebarHeader className="border-b border-primary/20 p-4">
        <div className="flex items-center space-x-3">
          <img 
            src={cybercatLogo} 
            alt="CyberCat" 
            className="w-8 h-8 animate-glow-pulse flex-shrink-0"
          />
          {open && (
            <div>
              <h2 className="text-lg font-bold text-primary text-glow">CyberCat</h2>
              <p className="text-xs text-muted-foreground">Security Tools</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="py-4">
        <SidebarGroup>
          <SidebarGroupLabel className={open ? "" : "sr-only"}>
            Main Tools
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainTools.map((tool) => (
                <SidebarMenuItem key={tool.title}>
                  <SidebarMenuButton
                    onClick={() => handleNavigation(tool.url)}
                    className={`cursor-pointer transition-all duration-200 ${
                      isActive(tool.url) 
                        ? 'bg-primary/20 text-primary border-l-2 border-primary' 
                        : 'hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    <tool.icon className="w-5 h-5 flex-shrink-0" />
                    {open && (
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{tool.title}</div>
                        <div className="text-xs text-muted-foreground truncate">
                          {tool.description}
                        </div>
                      </div>
                    )}
                    {open && isActive(tool.url) && (
                      <ChevronRight className="w-4 h-4 text-primary" />
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-6">
          <SidebarGroupLabel className={open ? "" : "sr-only"}>
            Coming Soon
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {comingSoonTools.map((tool) => (
                <SidebarMenuItem key={tool.title}>
                  <SidebarMenuButton
                    className="cursor-not-allowed opacity-60"
                    disabled
                  >
                    <tool.icon className="w-5 h-5 flex-shrink-0" />
                    {open && (
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{tool.title}</div>
                        <div className="text-xs text-muted-foreground truncate">
                          {tool.description}
                        </div>
                      </div>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {bottomItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => handleNavigation(item.url)}
                    className="cursor-pointer hover:bg-primary/10 hover:text-primary"
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    {open && (
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{item.title}</div>
                        <div className="text-xs text-muted-foreground truncate">
                          {item.description}
                        </div>
                      </div>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}