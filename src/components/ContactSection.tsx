import { useState } from 'react';
import { Mail, MessageSquare, Users, Rocket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const contactOptions = [
    {
      icon: Rocket,
      title: "Get Early Access",
      description: "Join our beta program and be among the first to experience CyberCat's powerful features.",
      action: "Request Beta Access",
      color: "text-neon-cyan",
      glowClass: "hover:glow-cyan"
    },
    {
      icon: Users,
      title: "Enterprise Solutions",
      description: "Discuss custom enterprise deployments, training, and integration with our team.",
      action: "Contact Sales",
      color: "text-neon-purple",
      glowClass: "hover:glow-purple"
    },
    {
      icon: MessageSquare,
      title: "Research Partnership",
      description: "Collaborate with us on advancing AI-powered security research methodologies.",
      action: "Explore Partnership",
      color: "text-neon-green",
      glowClass: "hover:glow-green"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Get Started Today
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to revolutionize your security research workflow? 
            Choose how you'd like to engage with CyberCat.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactOptions.map((option, index) => (
            <Card key={index} className={`bg-card/50 cyber-border transition-all duration-300 ${option.glowClass} group text-center`}>
              <CardHeader>
                <option.icon className={`w-12 h-12 ${option.color} mx-auto mb-4 group-hover:animate-glow-pulse`} />
                <CardTitle className="text-xl mb-3">{option.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {option.description}
                </p>
                <Button 
                  variant="outline" 
                  className="cyber-border w-full group-hover:bg-primary/10"
                >
                  {option.action}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-foreground">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2 cyber-border bg-input/50"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2 cyber-border bg-input/50"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="company" className="text-foreground">Company/Organization</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="mt-2 cyber-border bg-input/50"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="mt-2 cyber-border bg-input/50 resize-none"
                  placeholder="Tell us about your security research needs, questions, or how we can help..."
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-primary text-cyber-dark font-semibold glow-cyan"
              >
                Send Message
                <Mail className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-dark p-8 rounded-lg cyber-border">
            <h3 className="text-2xl font-bold text-secondary mb-6">Let's Connect</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Response Time</h4>
                <p className="text-muted-foreground">
                  We typically respond to inquiries within 24 hours during business days. 
                  For urgent security matters, please include "URGENT" in your subject line.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Security Contact</h4>
                <p className="text-muted-foreground mb-2">
                  For reporting security vulnerabilities in CyberCat itself, please use our 
                  responsible disclosure process:
                </p>
                <p className="text-primary font-mono text-sm">security@cybercat.ai</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Community</h4>
                <p className="text-muted-foreground">
                  Join our Discord community to connect with other security researchers, 
                  get support, and stay updated on the latest features and updates.
                </p>
              </div>

              <div className="pt-6 border-t border-primary/20">
                <p className="text-sm text-muted-foreground">
                  By contacting us, you agree to our privacy policy and terms of service. 
                  We respect your privacy and will never share your information with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;