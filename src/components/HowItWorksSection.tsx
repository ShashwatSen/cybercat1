import { Upload, Brain, FileCheck, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const HowItWorksSection = () => {
  const steps = [
    {
      step: 1,
      icon: Upload,
      title: "Upload Scan Results",
      description: "Simply upload your vulnerability scan results from popular tools like Nessus, OpenVAS, or custom scripts. CyberCat supports multiple formats and automatically parses the data.",
      color: "text-neon-red",
      bgGradient: "from-neon-red/20 to-transparent"
    },
    {
      step: 2,
      icon: Brain,
      title: "AI-Assisted Triage",
      description: "Our advanced AI analyzes each vulnerability, cross-references threat intelligence, and prioritizes findings based on exploitability, impact, and context. False positives are filtered out automatically.",
      color: "text-neon-purple", 
      bgGradient: "from-neon-purple/20 to-transparent"
    },
    {
      step: 3,
      icon: FileCheck,
      title: "Review & Report",
      description: "Review AI-generated reports, add your expert insights, and export professional documentation. Each report includes verification steps, impact analysis, and remediation guidance.",
      color: "text-neon-blue",
      bgGradient: "from-neon-blue/20 to-transparent"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            <span className="animate-text-shimmer text-glow">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            CyberCat streamlines your security research workflow in three simple steps. 
            From raw scan data to professional reports in minutes, not hours.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.step} className="flex flex-col lg:flex-row items-center mb-16 last:mb-0">
              {/* Step Card */}
              <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:order-2'}`}>
                <Card className={`bg-gradient-to-br ${step.bgGradient} cyber-border hover:animate-glow-cycle transition-all duration-500 group`}>
                  <CardHeader className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center ${step.color} font-bold text-xl`}>
                        {step.step}
                      </div>
                      <step.icon className={`w-8 h-8 ${step.color} group-hover:animate-glow-pulse`} />
                    </div>
                    <CardTitle className="text-2xl mb-3">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Arrow (hidden on mobile, last step) */}
              {index < steps.length - 1 && (
                <div className={`hidden lg:flex items-center justify-center ${index % 2 === 0 ? 'order-2' : 'order-1'} mx-8`}>
                  <div className={`w-16 h-16 rounded-full bg-gradient-animated flex items-center justify-center animate-glow-cycle`}>
                    <ArrowRight className={`w-8 h-8 text-cyber-dark ${index % 2 !== 0 ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              )}

              {/* Mobile Arrow */}
              {index < steps.length - 1 && (
                <div className="lg:hidden my-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center animate-glow-pulse mx-auto">
                    <ArrowRight className="w-6 h-6 text-cyber-dark rotate-90" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process Benefits */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">90%</div>
            <div className="text-muted-foreground">Time Saved</div>
            <div className="text-sm text-muted-foreground mt-2">Compared to manual triage</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">95%</div>
            <div className="text-muted-foreground">False Positive Reduction</div>
            <div className="text-sm text-muted-foreground mt-2">AI-powered filtering</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">100%</div>
            <div className="text-muted-foreground">Ethical Standards</div>
            <div className="text-sm text-muted-foreground mt-2">Responsible disclosure focused</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;