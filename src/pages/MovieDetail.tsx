import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { movies } from '@/data/movies';
import { useState } from 'react';

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  
  const movie = movies.find(m => m.id === parseInt(id || '0'));
  
  if (!movie) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Movie not found</h1>
          <Button onClick={() => navigate('/')}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Movies
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Movie Poster */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="overflow-hidden shadow-glow">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full aspect-[2/3] object-cover"
                />
              </Card>
            </div>
          </div>

          {/* Movie Details */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-2">
                {movie.title}
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground mb-4">
                <span className="text-lg">{movie.year}</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  {movie.genre}
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span>{movie.rating}</span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3 mb-6">
                <Button
                  onClick={() => setIsLiked(!isLiked)}
                  variant={isLiked ? "default" : "outline"}
                  className="flex items-center gap-2"
                >
                  <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                  {isLiked ? 'Liked' : 'Like'}
                </Button>
              </div>
            </div>

            {/* Description */}
            <Card className="p-6">
              <h2 className="font-playfair text-2xl font-semibold mb-4">About the Movie</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {movie.description}
              </p>
            </Card>

            {/* Soundtrack */}
            <Card className="p-6">
              <h2 className="font-playfair text-2xl font-semibold mb-4 flex items-center gap-2">
                <Play className="h-5 w-5" />
                Soundtrack
              </h2>
              <div className="space-y-3">
                {movie.songs?.map((song, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-card/50 rounded-lg border border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-medium text-primary">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{song.title}</p>
                        <p className="text-sm text-muted-foreground">{song.artist}</p>
                      </div>
                    </div>
                    {song.spotifyUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(song.spotifyUrl, '_blank')}
                        className="text-green-500 hover:text-green-400"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                )) || (
                  <p className="text-muted-foreground italic">Soundtrack information coming soon...</p>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}