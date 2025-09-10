import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface FilterBarProps {
  selectedDecade: string;
  onDecadeChange: (decade: string) => void;
}

const decades = [
  { value: 'all', label: 'All Time' },
  { value: '2020s', label: '2020s' },
  { value: '2010s', label: '2010s' },
  { value: '2000s', label: '2000s' },
  { value: '1990s', label: '90s' },
  { value: '1980s', label: '80s' },
  { value: '1970s', label: '70s' },
  { value: '1960s', label: '60s' },
  { value: 'classics', label: 'Classics' },
];

export default function FilterBar({ selectedDecade, onDecadeChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {decades.map((decade) => (
        <Button
          key={decade.value}
          variant={selectedDecade === decade.value ? 'default' : 'outline'}
          size="sm"
          onClick={() => onDecadeChange(decade.value)}
          className={`transition-all duration-200 ${
            selectedDecade === decade.value
              ? 'bg-primary text-primary-foreground shadow-soft'
              : 'bg-card/50 backdrop-blur-sm border-border/50 hover:bg-primary/20 hover:border-primary/30'
          }`}
        >
          {decade.label}
        </Button>
      ))}
    </div>
  );
}