import { ArrowRight, Shield, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import cybercatLogo from '@/assets/cybercat-logo.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-dark pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto">
          {/* Logo and Tagline */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img 
              src={cybercatLogo} 
              alt="CyberCat" 
              className="w-12 h-12 animate-float animate-glow-cycle"
            />
            <h1 className="text-4xl md:text-6xl font-bold animate-text-shimmer animate-cyber-glitch">
              CyberCat
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-primary mb-3 text-glow">
            AI Assistant for Security Researchers
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            AI-driven vulnerability triage, responsible disclosure reports, and intelligent remediation guidance. 
            Designed to augment human expertise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
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
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <Card className="p-4 bg-card/50 cyber-border hover:glow-red transition-all duration-300">
              <Shield className="w-6 h-6 text-primary mb-3 mx-auto" />
              <h3 className="text-base font-semibold mb-2">Ethical Security</h3>
              <p className="text-muted-foreground text-sm">
                Responsible disclosure and ethical security research practices
              </p>
            </Card>
            
            <Card className="p-4 bg-card/50 cyber-border hover:glow-purple transition-all duration-300">
              <Zap className="w-6 h-6 text-secondary mb-3 mx-auto" />
              <h3 className="text-base font-semibold mb-2">AI-Powered Triage</h3>
              <p className="text-muted-foreground text-sm">
                Intelligent analysis and prioritization of vulnerability scan results
              </p>
            </Card>
            
            <Card className="p-4 bg-card/50 cyber-border hover:glow-blue transition-all duration-300">
              <Target className="w-6 h-6 text-accent mb-3 mx-auto" />
              <h3 className="text-base font-semibold mb-2">Expert Guidance</h3>
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