import { useState } from 'react';
import { Heart, Sparkles, Film } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
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
        text: `I found this amazing romantic movie: ${movie.title} (${movie.year}). ${movie.description}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(`Check out ${movie.title} (${movie.year}) - ${movie.description}`);
      toast({ title: "Link copied! ✨", description: "Share this movie with your friends" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Hero Overlay */}
        <div className="absolute inset-0 bg-gradient-hero backdrop-blur-[2px]" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Film className="h-8 w-8 text-foreground" />
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground">
              Love<span className="text-primary">Reels</span>
            </h1>
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 font-inter leading-relaxed">
            Discover the most beautiful Hollywood love stories, from timeless classics to modern romances
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft font-inter font-medium px-8 py-6 text-lg"
            >
              <Heart className="h-5 w-5 mr-2" />
              Explore Movies
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-card/30 backdrop-blur-md border-border/50 hover:bg-card/50 font-inter font-medium px-8 py-6 text-lg"
            >
              My Favorites ({likedMovies.size})
            </Button>
          </div>
        </div>
        
        {/* Floating Hearts Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 6 }, (_, i) => (
            <Heart 
              key={i}
              className={`absolute text-primary/20 animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                fontSize: `${Math.random() * 20 + 10}px`
              }}
            />
          ))}
        </div>
      </section>

      {/* Movies Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Curated Love Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            From epic romances that defined generations to modern love stories that capture our hearts
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar 
          selectedDecade={selectedDecade} 
          onDecadeChange={setSelectedDecade} 
        />

        {/* Movies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
          <div className="text-center py-16">
            <Heart className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
            <p className="text-xl text-muted-foreground font-inter">
              No movies found for this decade. Try selecting a different time period!
            </p>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-romantic py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-playfair text-3xl font-bold text-foreground mb-2">
                {movies.length}+
              </h3>
              <p className="text-foreground/80 font-inter">Curated Love Stories</p>
            </div>
            <div>
              <h3 className="font-playfair text-3xl font-bold text-foreground mb-2">
                {likedMovies.size}
              </h3>
              <p className="text-foreground/80 font-inter">Movies in Your Collection</p>
            </div>
            <div>
              <h3 className="font-playfair text-3xl font-bold text-foreground mb-2">
                80+
              </h3>
              <p className="text-foreground/80 font-inter">Years of Romance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;