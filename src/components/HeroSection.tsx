import { ArrowRight, Shield, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import cybercatLogo from '@/assets/cybercat-logo.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-dark pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo and Tagline */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <img 
              src={cybercatLogo} 
              alt="CyberCat" 
              className="w-16 h-16 animate-float animate-glow-cycle"
            />
            <h1 className="text-5xl md:text-7xl font-bold animate-text-shimmer animate-cyber-glitch">
              CyberCat
            </h1>
          </div>
          
          <p className="text-2xl md:text-3xl text-primary mb-4 text-glow">
            AI Assistant for Security Researchers
          </p>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Empower your security research with AI-driven vulnerability triage, 
            responsible disclosure report generation, and intelligent remediation guidance. 
            Designed to augment, not replace, human expertise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-animated text-cyber-dark font-semibold animate-glow-cycle"
              onClick={() => window.location.href = '/chat'}
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="cyber-border">
              Watch Demo
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="p-6 bg-card/50 cyber-border hover:glow-red transition-all duration-300">
              <Shield className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Ethical Security</h3>
              <p className="text-muted-foreground text-sm">
                Built for responsible disclosure and ethical security research practices
              </p>
            </Card>
            
            <Card className="p-6 bg-card/50 cyber-border hover:glow-purple transition-all duration-300">
              <Zap className="w-8 h-8 text-secondary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">AI-Powered Triage</h3>
              <p className="text-muted-foreground text-sm">
                Intelligent analysis and prioritization of vulnerability scan results
              </p>
            </Card>
            
            <Card className="p-6 bg-card/50 cyber-border hover:glow-blue transition-all duration-300">
              <Target className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Expert Guidance</h3>
              <p className="text-muted-foreground text-sm">
                Safe verification steps and actionable remediation strategies
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;