import { Shield, Heart, Users, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ResponsibleUseSection = () => {
  const principles = [
    {
      icon: Shield,
      title: "Ethical Security Research Only",
      description: "CyberCat is designed exclusively for legitimate security researchers, bug bounty hunters, and cybersecurity professionals conducting authorized testing.",
      color: "text-neon-cyan"
    },
    {
      icon: Heart,
      title: "Responsible Disclosure",
      description: "Our platform promotes and facilitates responsible disclosure practices, helping researchers communicate vulnerabilities safely and constructively.",
      color: "text-neon-green"
    },
    {
      icon: Users,
      title: "Community Protection",
      description: "We actively work to prevent misuse and maintain the integrity of the cybersecurity community through robust monitoring and controls.",
      color: "text-neon-purple"
    },
    {
      icon: Lock,
      title: "Privacy & Confidentiality",
      description: "All vulnerability data is encrypted, anonymized when possible, and handled with the highest levels of security and discretion.",
      color: "text-neon-cyan"
    }
  ];

  return (
    <section id="responsible-use" className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            <span className="text-primary text-glow">Responsible Use</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built for ethical security researchers with responsible disclosure practices.
          </p>
        </div>

        {/* Important Notice */}
        <div className="max-w-3xl mx-auto mb-6">
          <Alert className="border-primary bg-primary/10 cyber-border">
            <Shield className="w-4 h-4 text-primary" />
            <AlertDescription className="text-sm">
              <strong>Important:</strong> For authorized ethical security researchers only. 
              Follow responsible disclosure practices and applicable laws.
            </AlertDescription>
          </Alert>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {principles.slice(0, 2).map((principle, index) => (
            <Card key={index} className="bg-card/50 cyber-border hover:glow-cyan transition-all duration-300 group">
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-3">
                  <principle.icon className={`w-5 h-5 ${principle.color} group-hover:animate-glow-pulse`} />
                  <CardTitle className="text-base">{principle.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResponsibleUseSection;