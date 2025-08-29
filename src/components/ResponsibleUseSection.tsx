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
    <section id="responsible-use" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary text-glow">Responsible Use</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            CyberCat is built on a foundation of ethical security research and responsible disclosure. 
            We're committed to supporting the cybersecurity community while protecting digital infrastructure.
          </p>
        </div>

        {/* Important Notice */}
        <div className="max-w-4xl mx-auto mb-16">
          <Alert className="border-primary bg-primary/10 cyber-border">
            <Shield className="w-5 h-5 text-primary" />
            <AlertDescription className="text-lg">
              <strong>Important:</strong> CyberCat is intended for ethical security researchers only. 
              Users must have explicit authorization to test systems and must follow responsible 
              disclosure practices. Misuse of this platform is strictly prohibited and may result 
              in account termination and legal action.
            </AlertDescription>
          </Alert>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {principles.map((principle, index) => (
            <Card key={index} className="bg-card/50 cyber-border hover:glow-cyan transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <principle.icon className={`w-8 h-8 ${principle.color} group-hover:animate-glow-pulse`} />
                  <CardTitle className="text-xl">{principle.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Code of Conduct */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-dark p-8 rounded-lg cyber-border">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Our Code of Conduct</h3>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">We Support:</h4>
                <ul className="space-y-2">
                  <li>• Authorized penetration testing</li>
                  <li>• Bug bounty research programs</li>
                  <li>• Academic security research</li>
                  <li>• Vulnerability disclosure programs</li>
                  <li>• Defensive cybersecurity measures</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">We Prohibit:</h4>
                <ul className="space-y-2">
                  <li>• Unauthorized system access</li>
                  <li>• Malicious exploitation</li>
                  <li>• Data theft or destruction</li>
                  <li>• Harassment or threats</li>
                  <li>• Disclosure without permission</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-primary/20 text-center">
              <p className="text-sm text-muted-foreground">
                By using CyberCat, you agree to conduct security research ethically and in accordance 
                with applicable laws and regulations. Questions about responsible use? 
                <a href="#contact" className="text-primary hover:text-secondary transition-colors ml-1">
                  Contact our team
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsibleUseSection;