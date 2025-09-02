import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { useNavigate } from 'react-router-dom';
import { 
  MessageSquare, 
  Code, 
  Terminal, 
  Shield, 
  Zap, 
  Brain,
  ChevronRight,
  Sparkles,
  Rocket,
  Target,
  Menu
} from 'lucide-react';
import cybercatLogo from '@/assets/cybercat-logo.jpg';

const Dashboard = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: MessageSquare,
      title: 'AI Chat Assistant',
      description: 'Interact with CyberCat AI for security research, vulnerability analysis, and ethical hacking guidance.',
      path: '/chat',
      color: 'neon-red',
      badge: 'AI Powered'
    },
    {
      icon: Code,
      title: 'Code Editor',
      description: 'Full-featured VS Code-like environment with syntax highlighting, file management, and AI assistance.',
      path: '/coder',
      color: 'neon-purple',
      badge: 'Monaco Editor'
    },
    {
      icon: Terminal,
      title: 'Command Terminal',
      description: 'Execute commands, run scripts, and perform system operations in a secure terminal environment.',
      path: '/terminal',
      color: 'neon-blue',
      badge: 'Interactive Shell'
    }
  ];

  const quickActions = [
    {
      title: 'Start Security Research',
      description: 'Begin your ethical hacking journey with AI guidance',
      action: () => navigate('/chat'),
      icon: Shield
    },
    {
      title: 'Code Analysis',
      description: 'Analyze code for vulnerabilities and security issues',
      action: () => navigate('/coder'),
      icon: Zap
    },
    {
      title: 'System Commands',
      description: 'Execute terminal commands and scripts',
      action: () => navigate('/terminal'),
      icon: Brain
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-cyber-darker relative overflow-hidden">
        {/* Background Effects */}
        <div className="matrix-bg"></div>
        <div className="terminal-grid"></div>
        <div className="code-rain"></div>
        <div className="floating-code"></div>
        <div className="cyber-particles"></div>

        <DashboardSidebar />

        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="relative z-10 bg-background/80 backdrop-blur-md border-b border-primary/20 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <SidebarTrigger className="text-primary" />
                <div className="flex items-center space-x-3">
                  <img 
                    src={cybercatLogo} 
                    alt="CyberCat" 
                    className="w-10 h-10 animate-glow-pulse"
                  />
                  <div>
                    <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-text-shimmer">
                      CyberCat Dashboard
                    </h1>
                    <p className="text-sm text-muted-foreground">
                      Your ethical hacking command center
                    </p>
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => navigate('/')}
                className="cyber-border"
              >
                Back to Home
              </Button>
            </div>
          </header>

          {/* Main Content */}
          <main className="relative z-10 flex-1 p-6 overflow-auto">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-primary animate-glow-pulse" />
            <span className="text-primary font-medium">Welcome to CyberCat</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-slide-up">
            Choose Your <span className="text-primary text-glow">Cybersecurity</span> Tool
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Access powerful AI-driven tools for ethical hacking, security research, and vulnerability analysis
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="group cyber-border bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate(feature.path)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-${feature.color}/10 border border-${feature.color}/20 flex items-center justify-center mb-4 group-hover:glow-${feature.color.split('-')[1]} transition-all duration-300`}>
                    <IconComponent className={`w-8 h-8 text-${feature.color} group-hover:animate-glow-pulse`} />
                  </div>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base mb-4">
                    {feature.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    className="w-full cyber-border group-hover:bg-primary/10 group-hover:border-primary/40"
                  >
                    Launch Tool
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <Rocket className="w-6 h-6 text-primary animate-glow-pulse" />
            <h3 className="text-2xl font-bold text-foreground">Quick Actions</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <Button
                  key={action.title}
                  variant="outline"
                  className="h-auto p-4 cyber-border bg-background/50 hover:bg-background/80 animate-slide-up"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  onClick={action.action}
                >
                  <div className="flex items-start space-x-3 text-left">
                    <IconComponent className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">
                        {action.title}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {action.description}
                      </div>
                    </div>
                  </div>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 cyber-border animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="flex items-center space-x-2 mb-4">
            <Target className="w-6 h-6 text-primary animate-glow-pulse" />
            <h3 className="text-xl font-bold text-foreground">System Status</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">AI Assistant Online</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-neon-purple">24/7</div>
              <div className="text-sm text-muted-foreground">Terminal Access</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-neon-blue">∞</div>
              <div className="text-sm text-muted-foreground">Code Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">Secure</div>
              <div className="text-sm text-muted-foreground">Environment</div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-muted-foreground animate-slide-up" style={{ animationDelay: '1s' }}>
          <p className="text-sm">
            🛡️ All tools are designed for ethical security research and educational purposes only
          </p>
        </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;