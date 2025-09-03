import { Upload, Brain, FileCheck, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const HowItWorksSection = () => {
  const steps = [
    {
      step: 1,
      icon: Upload,
      title: "Upload Scan Results",
      description: "Upload vulnerability scans from popular tools. CyberCat automatically parses the data.",
      color: "text-neon-red",
      bgGradient: "from-neon-red/20 to-transparent"
    },
    {
      step: 2,
      icon: Brain,
      title: "AI-Assisted Triage",
      description: "Advanced AI analyzes vulnerabilities and prioritizes findings while filtering false positives.",
      color: "text-neon-purple", 
      bgGradient: "from-neon-purple/20 to-transparent"
    },
    {
      step: 3,
      icon: FileCheck,
      title: "Review & Report",
      description: "Review AI-generated reports and export professional documentation with remediation guidance.",
      color: "text-neon-blue",
      bgGradient: "from-neon-blue/20 to-transparent"
    }
  ];

  return (
    <section id="how-it-works" className="py-8 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 animate-slide-up">
            <span className="animate-text-shimmer text-glow">
              How It Works
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From raw scan data to professional reports in three steps.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {steps.map((step, index) => (
              <Card key={step.step} className={`bg-gradient-to-br ${step.bgGradient} cyber-border hover:animate-glow-cycle transition-all duration-500 group`}>
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <div className={`w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center ${step.color} font-bold text-sm`}>
                      {step.step}
                    </div>
                    <step.icon className={`w-5 h-5 ${step.color} group-hover:animate-glow-pulse`} />
                  </div>
                  <CardTitle className="text-lg mb-2">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;