import { Target, Users, Lightbulb, Award, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  const mission = {
    title: "Our Mission",
    content: "CyberCat was born from the recognition that security researchers need better tools to manage the overwhelming volume of vulnerability data while maintaining the quality and ethics that define responsible security research. We believe that AI should augment human expertise, not replace it."
  };

  const goals = [
    {
      icon: Target,
      title: "Precision & Accuracy",
      description: "Leverage cutting-edge AI to provide precise vulnerability analysis while minimizing false positives and ensuring reliable results."
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "Built by security researchers, for security researchers. We understand the unique challenges and needs of the cybersecurity community."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Ethics",
      description: "Push the boundaries of what's possible in security research while maintaining the highest ethical standards and responsible practices."
    },
    {
      icon: Award,
      title: "Excellence in Security",
      description: "Our commitment to excellence drives us to continuously improve our tools and support the advancement of cybersecurity as a field."
    }
  ];

  const developers = [
    {
      username: "sid7.py",
      name: "Sid",
      role: "Lead Security Engineer & AI Researcher",
      bio: "Sid is a seasoned cybersecurity professional with over 8 years of experience in vulnerability research and AI/ML applications in security. He has worked with fortune 500 companies and has discovered critical vulnerabilities in major platforms. His expertise spans penetration testing, red team operations, and developing AI-powered security tools.",
      specialties: ["Vulnerability Research", "AI/ML Security", "Red Team Operations", "Python Development"],
      achievements: [
        "Discovered 50+ CVEs in major platforms",
        "Led security teams at 3 Fortune 500 companies",
        "Published research on AI-assisted vulnerability detection",
        "Speaker at DEF CON and Black Hat conferences"
      ],
      social: {
        github: "https://github.com/sid7py",
        linkedin: "https://linkedin.com/in/sid7py",
        twitter: "https://twitter.com/sid7py"
      }
    },
    {
      username: "opcat.dev",
      name: "OpCat",
      role: "Full-Stack Developer & Security Architect",
      bio: "OpCat is a passionate developer and security architect with deep expertise in building scalable security platforms. With a background in both offensive and defensive security, he brings a unique perspective to developing tools that serve the cybersecurity community. His focus is on creating intuitive, powerful interfaces for complex security workflows.",
      specialties: ["Full-Stack Development", "Security Architecture", "DevSecOps", "Platform Engineering"],
      achievements: [
        "Built security platforms serving 10,000+ researchers",
        "Contributed to 20+ open-source security tools",
        "Designed secure architectures for healthcare and fintech",
        "Mentor for emerging security professionals"
      ],
      social: {
        github: "https://github.com/opcatdev",
        linkedin: "https://linkedin.com/in/opcatdev",
        twitter: "https://twitter.com/opcatdev"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-darker">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-dark">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              <span className="animate-text-shimmer animate-glow-pulse">
                About CyberCat
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Empowering security researchers with AI-augmented tools that enhance human expertise 
              while maintaining the highest standards of ethical research.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <Card className="bg-card/50 cyber-border p-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-primary mb-6">{mission.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {mission.content}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    By automating the tedious aspects of vulnerability research, we free security 
                    professionals to focus on what they do best: critical thinking, creative 
                    problem-solving, and protecting digital infrastructure.
                  </p>
                </div>
              </Card>
            </div>

            {/* Goals Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {goals.map((goal, index) => (
                <Card key={index} className="bg-card/50 cyber-border hover:glow-purple transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <goal.icon className="w-8 h-8 text-secondary group-hover:animate-glow-pulse" />
                      <CardTitle className="text-xl">{goal.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {goal.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Developers Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">Meet the Developers</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The minds behind CyberCat, bringing together years of security research expertise 
                and cutting-edge development skills.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {developers.map((dev, index) => (
                <Card key={index} className="bg-card/50 cyber-border hover:glow-cyan transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {dev.name.charAt(0)}
                      </span>
                    </div>
                    <CardTitle className="text-2xl text-primary">{dev.name}</CardTitle>
                    <p className="text-accent font-mono">@{dev.username}</p>
                    <p className="text-sm text-secondary font-medium">{dev.role}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {dev.bio}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-3">Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {dev.specialties.map((specialty, i) => (
                          <span key={i} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {dev.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-start">
                            <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-center space-x-4 pt-4">
                      <Button variant="outline" size="sm" className="p-2">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="p-2">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="p-2">
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="p-2">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
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
      </main>

      <Footer />
    </div>
  );
};

export default About;