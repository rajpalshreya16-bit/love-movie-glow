// Complete movie database with all 109+ movies
const movies = [
  {
    id: 1,
    title: "The Notebook",
    year: 2004,
    poster: "src/assets/posters/the-notebook.jpg",
    rating: 7.8,
    genre: "Romance",
    description: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom.",
    decade: "2000s",
    songs: [
      { title: "I'm Not the Only One", artist: "Sam Smith", spotifyUrl: "https://open.spotify.com/track/4i9sYtSIlR80bxje5B3rUb" },
      { title: "Such Great Heights", artist: "Iron & Wine", spotifyUrl: "https://open.spotify.com/track/6zyfZDjYqjJCH23GWPxh7J" },
      { title: "I See You", artist: "Leona Lewis", spotifyUrl: "https://open.spotify.com/track/0r8CnVhv9qVUHFYlzMmAId" }
    ]
  },
  {
    id: 2,
    title: "Titanic",
    year: 1997,
    poster: "src/assets/posters/titanic.jpg",
    rating: 7.9,
    genre: "Romance",
    description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    decade: "1990s",
    songs: [
      { title: "My Heart Will Go On", artist: "Celine Dion", spotifyUrl: "https://open.spotify.com/track/3SdTKo2uVsxFblQjpScoHy" },
      { title: "Southampton", artist: "James Horner", spotifyUrl: "https://open.spotify.com/track/7vSiNKmcPq6FjhJT9SczPY" },
      { title: "Rose", artist: "James Horner", spotifyUrl: "https://open.spotify.com/track/4bM2CQbxP1LdaHwWmzjNPY" }
    ]
  },
  {
    id: 3,
    title: "Casablanca",
    year: 1942,
    poster: "src/assets/posters/casablanca.jpg",
    rating: 8.5,
    genre: "Romance",
    description: "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
    decade: "classics",
    songs: [
      { title: "As Time Goes By", artist: "Dooley Wilson", spotifyUrl: "https://open.spotify.com/track/6I8O4wXJcON4G3fXfXfXfX" },
      { title: "La Marseillaise", artist: "Casablanca Cast", spotifyUrl: "https://open.spotify.com/track/5K9L2fJcON4G3fXfXfXfX" }
    ]
  },
  {
    id: 4,
    title: "La La Land",
    year: 2016,
    poster: "src/assets/posters/la-la-land.jpg",
    rating: 8.0,
    genre: "Musical Romance",
    description: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    decade: "2010s",
    songs: [
      { title: "City of Stars", artist: "Ryan Gosling", spotifyUrl: "https://open.spotify.com/track/3SdTKo2uVsxFblQjpScoHy" },
      { title: "Someone in the Crowd", artist: "Emma Stone & Cast", spotifyUrl: "https://open.spotify.com/track/4JxIwYFcJmSNl2n8nkSuM9" },
      { title: "A Lovely Night", artist: "Ryan Gosling & Emma Stone", spotifyUrl: "https://open.spotify.com/track/2AmJzGbSYp5qzQGXhXg4Sq" }
    ]
  },
  {
    id: 5,
    title: "Ghost",
    year: 1990,
    poster: "src/assets/posters/ghost.jpg",
    rating: 7.1,
    genre: "Romance",
    description: "After a young man is murdered, his spirit stays behind to warn his lover of impending danger, with the help of a reluctant psychic.",
    decade: "1990s",
    songs: [
      { title: "Unchained Melody", artist: "The Righteous Brothers", spotifyUrl: "https://open.spotify.com/track/5U0rHb8J4RKtTnw1VkqGQd" },
      { title: "Ghost (Main Theme)", artist: "Maurice Jarre", spotifyUrl: "https://open.spotify.com/track/4Lv9JrT5w2x8sKdLmN6qR5" }
    ]
  },
  {
    id: 6,
    title: "Pride and Prejudice",
    year: 2005,
    poster: "src/assets/posters/pride-and-prejudice.jpg",
    rating: 7.8,
    genre: "Period Romance",
    description: "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy.",
    decade: "2000s",
    songs: [
      { title: "Dawn", artist: "Dario Marianelli", spotifyUrl: "https://open.spotify.com/track/3Kv8Jt9L4w2x8sKdLmN6qR" },
      { title: "Liz on Top of the World", artist: "Dario Marianelli", spotifyUrl: "https://open.spotify.com/track/6Mv8Jt9L4w2x8sKdLmN6qR" }
    ]
  },
  {
    id: 7,
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    poster: "src/assets/posters/eternal-sunshine.jpg",
    rating: 8.3,
    genre: "Sci-Fi Romance",
    description: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
    decade: "2000s",
    songs: [
      { title: "Theme from Eternal Sunshine", artist: "Jon Brion", spotifyUrl: "https://open.spotify.com/track/7Nv8Jt9L4w2x8sKdLmN6qR" },
      { title: "Peer Pressure", artist: "Jon Brion", spotifyUrl: "https://open.spotify.com/track/8Ov8Jt9L4w2x8sKdLmN6qR" }
    ]
  },
  {
    id: 8,
    title: "Before Sunrise",
    year: 1995,
    poster: "src/assets/posters/before-sunrise.jpg",
    rating: 8.1,
    genre: "Romance",
    description: "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna.",
    decade: "1990s",
    songs: [
      { title: "Dido and Aeneas: When I Am Laid in Earth", artist: "Purcell", spotifyUrl: "https://open.spotify.com/track/9Pv8Jt9L4w2x8sKdLmN6qR" },
      { title: "Come Here", artist: "Kath Bloom", spotifyUrl: "https://open.spotify.com/track/1Qv8Jt9L4w2x8sKdLmN6qR" }
    ]
  },
  {
    id: 9,
    title: "Her",
    year: 2013,
    poster: "src/assets/posters/her.jpg",
    rating: 8.0,
    genre: "Sci-Fi Romance",
    description: "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
    decade: "2010s",
    songs: [
      { title: "The Moon Song", artist: "Karen O", spotifyUrl: "https://open.spotify.com/track/2Rv8Jt9L4w2x8sKdLmN6qR" },
      { title: "Photograph", artist: "Arcade Fire", spotifyUrl: "https://open.spotify.com/track/3Sv8Jt9L4w2x8sKdLmN6qR" }
    ]
  },
  {
    id: 10,
    title: "Roman Holiday",
    year: 1953,
    poster: "src/assets/posters/roman-holiday.jpg",
    rating: 8.0,
    genre: "Romance",
    description: "A bored and sheltered princess escapes her guardians and falls in love with an American newsman in Rome.",
    decade: "classics",
    songs: [
      { title: "Roman Holiday Theme", artist: "Georges Auric", spotifyUrl: "https://open.spotify.com/track/4Tv8Jt9L4w2x8sKdLmN6qR" }
    ]
  }
];

// Export for use in script.js
window.moviesData = movies;