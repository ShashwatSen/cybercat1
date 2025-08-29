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
    <section id="about" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              About CyberCat
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our mission is to empower security researchers with AI-augmented tools that enhance 
            human expertise while maintaining the highest standards of ethical research.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-card/50 cyber-border p-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                CyberCat was born from the recognition that security researchers need better tools 
                to manage the overwhelming volume of vulnerability data while maintaining the quality 
                and ethics that define responsible security research.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that AI should augment human expertise, not replace it. By automating 
                the tedious aspects of vulnerability research, we free security professionals to 
                focus on what they do best: critical thinking, creative problem-solving, and 
                protecting digital infrastructure.
              </p>
            </div>
          </Card>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="bg-card/50 cyber-border hover:glow-purple transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <value.icon className="w-8 h-8 text-secondary group-hover:animate-glow-pulse" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-neon-cyan/10 to-transparent p-8 rounded-lg cyber-border">
            <h3 className="text-2xl font-bold text-primary mb-4">Built by Experts</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our team consists of seasoned security researchers, AI engineers, and cybersecurity 
              professionals who have worked across fortune 500 companies, security consultancies, 
              and academic institutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We understand the challenges of modern security research because we've lived them. 
              Every feature in CyberCat is designed based on real-world experience and community feedback.
            </p>
          </div>

          <div className="bg-gradient-to-br from-neon-purple/10 to-transparent p-8 rounded-lg cyber-border">
            <h3 className="text-2xl font-bold text-secondary mb-4">Looking Forward</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As cyber threats evolve, so must our tools. We're committed to staying ahead of the 
              curve, continuously improving CyberCat with the latest AI advancements and security 
              research methodologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our roadmap includes advanced threat intelligence integration, collaborative research 
              features, and expanded support for emerging vulnerability types and attack vectors.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-muted-foreground">Vulnerabilities Analyzed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">500+</div>
            <div className="text-muted-foreground">Security Researchers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50+</div>
            <div className="text-muted-foreground">Enterprise Clients</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime SLA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;