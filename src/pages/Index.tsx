import { useState } from 'react';
import { Heart, Sparkles, Film } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import MovieCard from '@/components/MovieCard';
import FilterBar from '@/components/FilterBar';
import { movies, Movie } from '@/data/movies';
import heroBackground from '@/assets/hero-bg.jpg';

const Index = () => {
  const [selectedDecade, setSelectedDecade] = useState('all');
  const [likedMovies, setLikedMovies] = useState<Set<number>>(new Set());

  const filteredMovies = selectedDecade === 'all' 
    ? movies 
    : movies.filter(movie => movie.decade === selectedDecade);

  const handleLike = (movieId: number) => {
    const newLikedMovies = new Set(likedMovies);
    if (newLikedMovies.has(movieId)) {
      newLikedMovies.delete(movieId);
      toast({ title: "Removed from favorites", description: "Movie removed from your list" });
    } else {
      newLikedMovies.add(movieId);
      toast({ title: "Added to favorites ♡", description: "Movie saved to your collection" });
    }
    setLikedMovies(newLikedMovies);
  };

  const handleShare = (movie: Movie) => {
    if (navigator.share) {
      navigator.share({
        title: `Check out ${movie.title}!`,
        text: `I found this amazing romantic movie on Lovify: ${movie.title} (${movie.year}). ${movie.description}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(`Check out ${movie.title} (${movie.year}) on Lovify - ${movie.description}`);
      toast({ title: "Link copied! ✨", description: "Share this movie with your friends" });
    }
  };

  const scrollToMovies = () => {
    document.getElementById('movies')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Hero Overlay */}
        <div className="absolute inset-0 bg-gradient-hero backdrop-blur-[2px]" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-20">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Film className="h-10 w-10 text-foreground animate-float" />
            <h1 className="font-playfair text-6xl md:text-8xl font-bold text-foreground">
              Lov<span className="text-primary">ify</span>
            </h1>
            <Sparkles className="h-10 w-10 text-primary animate-float" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <p className="text-2xl md:text-3xl text-foreground/90 mb-4 font-inter leading-relaxed">
            Discover Your Perfect Romance Movies
          </p>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-12 font-inter leading-relaxed max-w-3xl mx-auto">
            From timeless classics that defined love on screen to modern masterpieces that capture hearts today. 
            Find, save, and share the most beautiful romantic stories ever told.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToMovies}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow font-inter font-medium px-10 py-6 text-lg"
            >
              <Heart className="h-5 w-5 mr-2" />
              Explore Movies
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-card/30 backdrop-blur-md border-border/50 hover:bg-card/50 font-inter font-medium px-10 py-6 text-lg"
            >
              My Collection ({likedMovies.size})
            </Button>
          </div>
        </div>
        
        {/* Floating Hearts Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 8 }, (_, i) => (
            <Heart 
              key={i}
              className="absolute text-primary/20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.7}s`,
                fontSize: `${Math.random() * 24 + 12}px`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Movies Section */}
      <section id="movies" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-6">
              Curated Love Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
              From epic romances that defined generations to intimate love stories that capture the heart. 
              Every film is carefully selected to showcase the beauty of love in all its forms.
            </p>
          </div>

          {/* Filter Bar */}
          <FilterBar 
            selectedDecade={selectedDecade} 
            onDecadeChange={setSelectedDecade} 
          />

          {/* Movies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onLike={handleLike}
                onShare={handleShare}
              />
            ))}
          </div>

          {filteredMovies.length === 0 && (
            <div className="text-center py-20">
              <Heart className="h-20 w-20 text-muted-foreground/50 mx-auto mb-6" />
              <p className="text-2xl text-muted-foreground font-inter">
                No movies found for this decade.
              </p>
              <p className="text-lg text-muted-foreground/70 font-inter mt-2">
                Try selecting a different time period to discover more love stories!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;