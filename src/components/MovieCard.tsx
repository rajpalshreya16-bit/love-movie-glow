import { useState } from 'react';
import { Heart, Share2, Calendar, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Movie {
  id: number;
  title: string;
  year: number;
  poster: string;
  rating: number;
  genre: string;
  description: string;
}

interface MovieCardProps {
  movie: Movie;
  onLike?: (movieId: number) => void;
  onShare?: (movie: Movie) => void;
}

export default function MovieCard({ movie, onLike, onShare }: MovieCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike?.(movie.id);
  };

  const handleShare = () => {
    onShare?.(movie);
  };

  return (
    <Card 
      className="group relative overflow-hidden bg-card border-border shadow-soft hover:shadow-glow transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Movie Poster */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action Buttons */}
        <div className={`absolute top-3 right-3 flex gap-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
          <Button
            size="sm"
            variant="secondary"
            className={`bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30 transition-all duration-200 ${
              isLiked ? 'text-red-400' : 'text-white'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              handleLike();
            }}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30 text-white"
            onClick={(e) => {
              e.stopPropagation();
              handleShare();
            }}
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Movie Info Overlay */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 text-white transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h3 className="font-playfair font-semibold text-lg mb-1 line-clamp-2">{movie.title}</h3>
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{movie.year}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-current text-yellow-400" />
              <span>{movie.rating}</span>
            </div>
          </div>
          <p className="text-xs mt-2 opacity-90 line-clamp-2">{movie.description}</p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-4">
        <h3 className="font-playfair font-semibold text-foreground mb-1 line-clamp-1">{movie.title}</h3>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{movie.year}</span>
          <span className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs">{movie.genre}</span>
        </div>
      </div>
    </Card>
  );
}