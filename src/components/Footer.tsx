import { Shield, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import cybercatLogo from '@/assets/cybercat-logo.jpg';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Documentation', href: '#docs' },
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press Kit', href: '#press' },
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Community', href: '#community' },
      { name: 'Status', href: '#status' },
      { name: 'Contact', href: '#contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Security', href: '#security' },
      { name: 'Responsible Use', href: '#responsible-use' },
    ]
  };

  const socialLinks = [
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Email', href: 'mailto:hello@cybercat.ai', icon: Mail },
  ];

  return (
    <footer className="bg-cyber-darker border-t border-primary/20">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={cybercatLogo} 
                alt="CyberCat" 
                className="w-8 h-8 animate-glow-pulse"
              />
              <span className="text-xl font-bold text-primary text-glow">
                CyberCat
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              AI-powered assistant for ethical security researchers. 
              Streamlining vulnerability triage and responsible disclosure 
              while maintaining the highest standards of cybersecurity ethics.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full cyber-border flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-cyan transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Responsible Use Disclaimer */}
        <div className="border-t border-primary/20 pt-8 mb-8">
          <div className="bg-primary/10 rounded-lg p-6 cyber-border">
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h5 className="text-lg font-semibold text-primary mb-2">Responsible Use Notice</h5>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  CyberCat is intended exclusively for ethical security research, authorized penetration testing, 
                  and legitimate cybersecurity activities. Users must comply with all applicable laws and 
                  regulations and must have explicit authorization before testing any systems. Misuse of this 
                  platform for malicious purposes is strictly prohibited and will result in immediate account 
                  termination and potential legal action.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Security.txt Reference */}
        <div className="border-t border-primary/20 pt-8 mb-8">
          <div className="text-center">
            <p className="text-muted-foreground text-sm mb-2">
              Security researchers: Please review our 
              <a href="/.well-known/security.txt" className="text-primary hover:text-secondary transition-colors mx-1">
                security.txt
              </a>
              for responsible disclosure guidelines.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} CyberCat AI. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Built with ❤️ by security researchers, for security researchers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;