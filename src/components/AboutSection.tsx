import { Target, Users, Lightbulb, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Precision & Accuracy",
      description: "We leverage cutting-edge AI to provide precise vulnerability analysis while minimizing false positives and ensuring reliable results."
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "Built by security researchers, for security researchers. We understand the unique challenges and needs of the cybersecurity community."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Ethics",
      description: "We push the boundaries of what's possible in security research while maintaining the highest ethical standards and responsible practices."
    },
    {
      icon: Award,
      title: "Excellence in Security",
      description: "Our commitment to excellence drives us to continuously improve our tools and support the advancement of cybersecurity as a field."
    }
  ];

  return (
    <section id="about" className="py-8 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 animate-slide-up">
            <span className="animate-text-shimmer animate-glow-pulse">
              About CyberCat
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empowering security researchers with AI-augmented tools for ethical research.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {values.slice(0, 2).map((value, index) => (
            <Card key={index} className="bg-card/50 cyber-border hover:glow-purple transition-all duration-300 group">
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-3">
                  <value.icon className="w-5 h-5 text-secondary group-hover:animate-glow-pulse" />
                  <CardTitle className="text-base">{value.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;