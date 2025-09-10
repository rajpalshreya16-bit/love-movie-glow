// Import movie posters
import theNotebookPoster from '@/assets/posters/the-notebook.jpg';
import titanicPoster from '@/assets/posters/titanic.jpg';
import casablancaPoster from '@/assets/posters/casablanca.jpg';
import laLaLandPoster from '@/assets/posters/la-la-land.jpg';
import ghostPoster from '@/assets/posters/ghost.jpg';
import prideAndPrejudicePoster from '@/assets/posters/pride-and-prejudice.jpg';
import eternalSunshinePoster from '@/assets/posters/eternal-sunshine.jpg';
import beforeSunrisePoster from '@/assets/posters/before-sunrise.jpg';
import herPoster from '@/assets/posters/her.jpg';
import romanHolidayPoster from '@/assets/posters/roman-holiday.jpg';
import shapeOfWaterPoster from '@/assets/posters/shape-of-water.jpg';
import sleeplessInSeattlePoster from '@/assets/posters/sleepless-in-seattle.jpg';

export interface Movie {
  id: number;
  title: string;
  year: number;
  poster: string;
  rating: number;
  genre: string;
  description: string;
  decade: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "The Notebook",
    year: 2004,
    poster: theNotebookPoster,
    rating: 7.8,
    genre: "Romance",
    description: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom.",
    decade: "2000s"
  },
  {
    id: 2,
    title: "Titanic",
    year: 1997,
    poster: titanicPoster,
    rating: 7.9,
    genre: "Romance",
    description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    decade: "1990s"
  },
  {
    id: 3,
    title: "Casablanca",
    year: 1942,
    poster: casablancaPoster,
    rating: 8.5,
    genre: "Romance",
    description: "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
    decade: "classics"
  },
  {
    id: 4,
    title: "La La Land",
    year: 2016,
    poster: laLaLandPoster,
    rating: 8.0,
    genre: "Musical Romance",
    description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    decade: "2010s"
  },
  {
    id: 5,
    title: "Ghost",
    year: 1990,
    poster: ghostPoster,
    rating: 7.1,
    genre: "Romance",
    description: "After a young man is murdered, his spirit stays behind to warn his lover of impending danger, with the help of a reluctant psychic.",
    decade: "1990s"
  },
  {
    id: 6,
    title: "Pride and Prejudice",
    year: 2005,
    poster: prideAndPrejudicePoster,
    rating: 7.8,
    genre: "Period Romance",
    description: "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class.",
    decade: "2000s"
  },
  {
    id: 7,
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    poster: eternalSunshinePoster,
    rating: 8.3,
    genre: "Sci-Fi Romance",
    description: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
    decade: "2000s"
  },
  {
    id: 8,
    title: "Before Sunrise",
    year: 1995,
    poster: beforeSunrisePoster,
    rating: 8.1,
    genre: "Romance",
    description: "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna.",
    decade: "1990s"
  },
  {
    id: 9,
    title: "Her",
    year: 2013,
    poster: herPoster,
    rating: 8.0,
    genre: "Sci-Fi Romance",
    description: "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
    decade: "2010s"
  },
  {
    id: 10,
    title: "Roman Holiday",
    year: 1953,
    poster: romanHolidayPoster,
    rating: 8.0,
    genre: "Romance",
    description: "A bored and sheltered princess escapes her guardians and falls in love with an American newsman in Rome.",
    decade: "classics"
  },
  {
    id: 11,
    title: "The Shape of Water",
    year: 2017,
    poster: shapeOfWaterPoster,
    rating: 7.3,
    genre: "Fantasy Romance",
    description: "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.",
    decade: "2010s"
  },
  {
    id: 12,
    title: "Sleepless in Seattle",
    year: 1993,
    poster: sleeplessInSeattlePoster,
    rating: 6.8,
    genre: "Romance",
    description: "A recently widowed man's son calls a radio talk-show in an attempt to find his father a partner.",
    decade: "1990s"
  }
];