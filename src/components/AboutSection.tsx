import { Heart, Star, Users, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function AboutSection() {
  const features = [
    {
      icon: Heart,
      title: 'Curated with Love',
      description: 'Every movie is hand-picked by our team of romance enthusiasts to ensure the highest quality love stories.',
    },
    {
      icon: Star,
      title: 'Ratings & Reviews',
      description: 'Get authentic ratings and detailed reviews from fellow romance movie lovers to make informed choices.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Share your favorites, discover hidden gems, and connect with others who share your passion for romance.',
    },
    {
      icon: Award,
      title: 'Award Winners',
      description: 'From Oscar winners to indie darlings, we feature the most celebrated romantic films of all time.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Love Stories' },
    { number: '50K+', label: 'Happy Users' },
    { number: '100+', label: 'Years Covered' },
    { number: '25+', label: 'Countries' },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-dreamy">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Lovify
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-inter leading-relaxed">
            We believe that love stories have the power to inspire, heal, and bring people together. 
            Lovify is your gateway to discovering the most beautiful romantic films from around the world.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-soft transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-foreground/70 font-inter leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-card/30 backdrop-blur-sm rounded-3xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="font-inter text-foreground/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mt-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-playfair text-3xl font-bold text-foreground mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-foreground/80 font-inter leading-relaxed mb-8">
              In a world that often feels divided, we believe that love stories remind us of our shared humanity. 
              Our mission is to celebrate the universal language of love through cinema, connecting hearts across 
              cultures and generations. Whether you're looking for a classic tearjerker or a modern masterpiece, 
              Lovify helps you find the perfect romantic movie for any moment.
            </p>
            <div className="flex items-center justify-center gap-2 text-primary">
              <Heart className="h-6 w-6 fill-current" />
              <span className="font-playfair text-xl font-semibold">Spreading Love, One Movie at a Time</span>
              <Heart className="h-6 w-6 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}