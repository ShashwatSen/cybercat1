import { ArrowRight, Shield, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import cybercatLogo from '@/assets/cybercat-logo.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-dark pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-2xl mx-auto">
          {/* Logo and Tagline */}
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img 
              src={cybercatLogo} 
              alt="CyberCat" 
              className="w-10 h-10 animate-float animate-glow-cycle"
            />
            <h1 className="text-3xl md:text-5xl font-bold animate-text-shimmer animate-cyber-glitch">
              CyberCat
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-primary mb-2 text-glow">
            AI Assistant for Security Researchers
          </p>
          
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            AI-driven vulnerability triage and responsible disclosure reports.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
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
          <div className="grid md:grid-cols-3 gap-3 mt-8">
            <Card className="p-3 bg-card/50 cyber-border hover:glow-red transition-all duration-300">
              <Shield className="w-5 h-5 text-primary mb-2 mx-auto" />
              <h3 className="text-sm font-semibold mb-1">Ethical Security</h3>
              <p className="text-muted-foreground text-xs">
                Responsible disclosure practices
              </p>
            </Card>
            
            <Card className="p-3 bg-card/50 cyber-border hover:glow-purple transition-all duration-300">
              <Zap className="w-5 h-5 text-secondary mb-2 mx-auto" />
              <h3 className="text-sm font-semibold mb-1">AI-Powered Triage</h3>
              <p className="text-muted-foreground text-xs">
                Intelligent vulnerability analysis
              </p>
            </Card>
            
            <Card className="p-3 bg-card/50 cyber-border hover:glow-blue transition-all duration-300">
              <Target className="w-5 h-5 text-accent mb-2 mx-auto" />
              <h3 className="text-sm font-semibold mb-1">Expert Guidance</h3>
              <p className="text-muted-foreground text-xs">
                Safe verification and remediation
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;