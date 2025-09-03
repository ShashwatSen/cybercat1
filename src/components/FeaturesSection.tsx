import { Brain, FileText, Shield, Settings, CheckCircle, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Vulnerability Triage",
      description: "Automatically analyze and prioritize scan results using advanced ML algorithms.",
      color: "text-neon-cyan",
      glowClass: "hover:glow-cyan"
    },
    {
      icon: FileText,  
      title: "Disclosure Reports",
      description: "Generate professional disclosure reports following industry best practices.",
      color: "text-neon-purple",
      glowClass: "hover:glow-purple"
    },
    {
      icon: Shield,
      title: "Safe Verification",
      description: "Get intelligent suggestions for safely verifying vulnerabilities without damage.",
      color: "text-neon-green", 
      glowClass: "hover:glow-green"
    }
  ];

  return (
    <section id="features" className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 animate-slide-up">
            <span className="animate-text-shimmer animate-glow-pulse">
              Powerful Features
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            AI-powered security research tools with ethical standards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`bg-card/50 cyber-border transition-all duration-300 ${feature.glowClass} group`}
            >
              <CardHeader className="text-center pb-2">
                <feature.icon className={`w-6 h-6 ${feature.color} mx-auto mb-2 group-hover:animate-glow-pulse`} />
                <CardTitle className="text-base mb-1">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;