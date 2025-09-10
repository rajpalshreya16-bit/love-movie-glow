import { Mail, MessageSquare, Heart, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent! 💕",
      description: "Thank you for reaching out. We'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch for general inquiries',
      contact: 'hello@lovify.com',
      action: 'Send Email',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available 24/7',
      action: 'Start Chat',
    },
    {
      icon: Heart,
      title: 'Movie Suggestions',
      description: 'Recommend your favorite romance movies',
      contact: 'suggestions@lovify.com',
      action: 'Send Suggestion',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter leading-relaxed">
            Have a favorite romantic movie we're missing? Questions about our collection? 
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
              How can we help?
            </h3>
            
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-6 hover:shadow-soft transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-playfair font-semibold text-foreground mb-2">
                      {method.title}
                    </h4>
                    <p className="text-muted-foreground font-inter text-sm mb-3">
                      {method.description}
                    </p>
                    <p className="text-primary font-inter font-medium mb-3">
                      {method.contact}
                    </p>
                    <Button variant="outline" size="sm">
                      {method.action}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                Send us a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-inter font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-inter font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block font-inter font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-inter font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter resize-none"
                    placeholder="Tell us about your favorite romantic movie or ask us anything..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h3 className="font-playfair text-3xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <h4 className="font-playfair font-semibold text-foreground mb-3">
                How do you choose which movies to feature?
              </h4>
              <p className="text-muted-foreground font-inter">
                Our team of romance movie enthusiasts carefully curates each film based on critical acclaim, 
                cultural impact, and audience love. We feature both classic and contemporary romantic films.
              </p>
            </Card>
            
            <Card className="p-6">
              <h4 className="font-playfair font-semibold text-foreground mb-3">
                Can I suggest a movie for your collection?
              </h4>
              <p className="text-muted-foreground font-inter">
                Absolutely! We love hearing from our community. Use our contact form or email us at 
                suggestions@lovify.com to recommend your favorite romantic movies.
              </p>
            </Card>
            
            <Card className="p-6">
              <h4 className="font-playfair font-semibold text-foreground mb-3">
                Is Lovify available as a mobile app?
              </h4>
              <p className="text-muted-foreground font-inter">
                Currently, Lovify is a web-based platform optimized for all devices. 
                A dedicated mobile app is in development and will be available soon!
              </p>
            </Card>
            
            <Card className="p-6">
              <h4 className="font-playfair font-semibold text-foreground mb-3">
                How can I share movies with friends?
              </h4>
              <p className="text-muted-foreground font-inter">
                Each movie card has a share button that lets you share via social media, email, 
                or copy the link. Spread the love and help others discover amazing romantic films!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}