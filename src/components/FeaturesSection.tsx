import { Brain, FileText, Shield, Settings, CheckCircle, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Driven Vulnerability Triage",
      description: "Automatically analyze and prioritize vulnerability scan results using advanced machine learning algorithms. Reduce noise and focus on what matters most.",
      color: "text-neon-cyan",
      glowClass: "hover:glow-cyan"
    },
    {
      icon: FileText,
      title: "Draft Responsible Disclosure Reports",
      description: "Generate professional, comprehensive disclosure reports following industry best practices. Save hours of documentation time while maintaining quality.",
      color: "text-neon-purple",
      glowClass: "hover:glow-purple"
    },
    {
      icon: Shield,
      title: "Safe Manual Verification Steps",
      description: "Receive intelligent suggestions for safely verifying vulnerabilities without causing damage or detection. Ethical testing made easier.",
      color: "text-neon-green", 
      glowClass: "hover:glow-green"
    },
    {
      icon: Settings,
      title: "Remediation Strategies",
      description: "Get actionable, context-aware remediation guidance tailored to specific vulnerabilities and environments. Bridge the gap between discovery and resolution.",
      color: "text-neon-cyan",
      glowClass: "hover:glow-cyan"
    },
    {
      icon: CheckCircle,
      title: "Compliance Integration",
      description: "Ensure your reports meet industry standards and compliance requirements. Built-in templates for common frameworks and regulations.",
      color: "text-neon-purple",
      glowClass: "hover:glow-purple"
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "Intelligent risk scoring and impact analysis to help prioritize remediation efforts. Make informed decisions about security investments.",
      color: "text-neon-green",
      glowClass: "hover:glow-green"
    }
  ];

  return (
    <section id="features" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">
            <span className="animate-text-shimmer animate-glow-pulse">
              Powerful Features
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-powered security research tools maintaining the highest ethical standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`bg-card/50 cyber-border transition-all duration-300 ${feature.glowClass} group`}
            >
              <CardHeader className="text-center pb-3">
                <feature.icon className={`w-8 h-8 ${feature.color} mx-auto mb-3 group-hover:animate-glow-pulse`} />
                <CardTitle className="text-lg mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Feature Highlights */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-dark p-6 rounded-lg cyber-border">
            <h3 className="text-xl font-bold text-primary mb-3">Enterprise Ready</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-neon-green" />
                <span>SOC 2 Type II compliant</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-neon-green" />
                <span>End-to-end encryption</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-neon-green" />
                <span>Role-based access controls</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-neon-green" />
                <span>Audit logging</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-dark p-6 rounded-lg cyber-border">
            <h3 className="text-xl font-bold text-secondary mb-3">Research Focused</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-neon-purple" />
                <span>CVE database integration</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-neon-purple" />
                <span>MITRE ATT&CK mapping</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-neon-purple" />
                <span>Custom templates</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-neon-purple" />
                <span>Security tool integration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;