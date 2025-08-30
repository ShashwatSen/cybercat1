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
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            <span className="animate-text-shimmer animate-glow-pulse">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            CyberCat combines cutting-edge AI with security expertise to streamline 
            your vulnerability research workflow while maintaining the highest ethical standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`bg-card/50 cyber-border transition-all duration-300 ${feature.glowClass} group`}
            >
              <CardHeader className="text-center">
                <feature.icon className={`w-12 h-12 ${feature.color} mx-auto mb-4 group-hover:animate-glow-pulse`} />
                <CardTitle className="text-xl mb-3">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Feature Highlights */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-dark p-8 rounded-lg cyber-border">
            <h3 className="text-2xl font-bold text-primary mb-4">Enterprise Ready</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-neon-green" />
                <span>SOC 2 Type II compliant infrastructure</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-neon-green" />
                <span>End-to-end encryption for all data</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-neon-green" />
                <span>Role-based access controls</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-neon-green" />
                <span>Audit logging and compliance reporting</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-dark p-8 rounded-lg cyber-border">
            <h3 className="text-2xl font-bold text-secondary mb-4">Research Focused</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-neon-purple" />
                <span>CVE database integration</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-neon-purple" />
                <span>MITRE ATT&CK framework mapping</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-neon-purple" />
                <span>Custom vulnerability templates</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-neon-purple" />
                <span>Integration with popular security tools</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;