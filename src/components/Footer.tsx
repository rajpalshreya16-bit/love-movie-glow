import { Heart, Mail, Github, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const footerLinks = {
    Movies: ['Romance', 'Classics', 'Modern', 'International'],
    Company: ['About Us', 'Blog', 'Careers', 'Press'],
    Support: ['Help Center', 'Contact', 'Privacy', 'Terms'],
  };

  return (
    <footer className="bg-gradient-romantic border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-8 w-8 text-primary fill-current" />
              <h3 className="font-playfair text-2xl font-bold text-foreground">
                Lovify
              </h3>
            </div>
            <p className="text-foreground/70 font-inter mb-6 leading-relaxed">
              Discover the most beautiful Hollywood love stories, from timeless classics to modern romances. 
              Find your next favorite movie and share the love.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="bg-card/30 backdrop-blur-sm"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-playfair font-semibold text-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-inter text-foreground/70 hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="text-center mb-6">
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
              Stay Updated with Love
            </h3>
            <p className="text-foreground/70 font-inter">
              Get weekly recommendations for the most romantic movies and exclusive content.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter"
            />
            <Button className="sm:w-auto">
              <Mail className="h-4 w-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/30">
          <p className="text-foreground/60 font-inter text-sm mb-4 md:mb-0">
            © 2024 Lovify. Made with <Heart className="h-4 w-4 inline text-red-400 fill-current" /> for movie lovers.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-foreground/60 hover:text-primary font-inter">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary font-inter">
              Terms of Service
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary font-inter">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}