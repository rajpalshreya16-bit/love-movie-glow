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
import dirtyDancingPoster from '@/assets/posters/dirty-dancing.jpg';
import prettyWomanPoster from '@/assets/posters/pretty-woman.jpg';
import whenHarryMetSallyPoster from '@/assets/posters/when-harry-met-sally.jpg';
import princessBridePoster from '@/assets/posters/princess-bride.jpg';
import youveGotMailPoster from '@/assets/posters/youve-got-mail.jpg';
import forrestGumpPoster from '@/assets/posters/forrest-gump.jpg';
import topGunPoster from '@/assets/posters/top-gun.jpg';
import moulinRougePoster from '@/assets/posters/moulin-rouge.jpg';

export interface Song {
  title: string;
  artist: string;
  spotifyUrl?: string;
}

export interface Movie {
  id: number;
  title: string;
  year: number;
  poster: string;
  rating: number;
  genre: string;
  description: string;
  decade: string;
  songs?: Song[];
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
    decade: "2000s",
    songs: [
      {
        title: "I'm Not the Only One",
        artist: "Sam Smith",
        spotifyUrl: "https://open.spotify.com/track/4i9sYtSIlR80bxje5B3rUb"
      },
      {
        title: "Such Great Heights",
        artist: "Iron & Wine",
        spotifyUrl: "https://open.spotify.com/track/6zyfZDjYqjJCH23GWPxh7J"
      },
      {
        title: "I See You",
        artist: "Leona Lewis",
        spotifyUrl: "https://open.spotify.com/track/0r8CnVhv9qVUHFYlzMmAId"
      }
    ]
  },
  {
    id: 2,
    title: "Titanic",
    year: 1997,
    poster: titanicPoster,
    rating: 7.9,
    genre: "Romance",
    description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    decade: "1990s",
    songs: [
      {
        title: "My Heart Will Go On",
        artist: "Celine Dion",
        spotifyUrl: "https://open.spotify.com/track/3SdTKo2uVsxFblQjpScoHy"
      },
      {
        title: "Southampton",
        artist: "James Horner",
        spotifyUrl: "https://open.spotify.com/track/7vSiNKmcPq6FjhJT9SczPY"
      },
      {
        title: "Rose",
        artist: "James Horner",
        spotifyUrl: "https://open.spotify.com/track/4bM2CQbxP1LdaHwWmzjNPY"
      }
    ]
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
    decade: "2010s",
    songs: [
      {
        title: "City of Stars",
        artist: "Ryan Gosling",
        spotifyUrl: "https://open.spotify.com/track/3SdTKo2uVsxFblQjpScoHy"
      },
      {
        title: "Someone in the Crowd",
        artist: "Emma Stone, Callie Hernandez, Sonoya Mizuno, Jessica Rothe",
        spotifyUrl: "https://open.spotify.com/track/4JxIwYFcJmSNl2n8nkSuM9"
      },
      {
        title: "A Lovely Night",
        artist: "Ryan Gosling & Emma Stone",
        spotifyUrl: "https://open.spotify.com/track/2AmJzGbSYp5qzQGXhXg4Sq"
      },
      {
        title: "Audition (The Fools Who Dream)",
        artist: "Emma Stone",
        spotifyUrl: "https://open.spotify.com/track/7J5pY3b5S8hTfLT1I1yXgY"
      }
    ]
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
  },
  {
    id: 13,
    title: "When Harry Met Sally",
    year: 1989,
    poster: whenHarryMetSallyPoster,
    rating: 7.7,
    genre: "Romance Comedy",
    description: "Harry and Sally have known each other for years, and are very good friends, but they fear sex would ruin the friendship.",
    decade: "1980s"
  },
  {
    id: 14,
    title: "Dirty Dancing",
    year: 1987,
    poster: dirtyDancingPoster,
    rating: 7.0,
    genre: "Romance Drama",
    description: "Spending the summer at a Catskills resort with her family, Frances 'Baby' Houseman falls in love with the camp's dance instructor.",
    decade: "1980s",
    songs: [
      {
        title: "(I've Had) The Time of My Life",
        artist: "Bill Medley & Jennifer Warnes",
        spotifyUrl: "https://open.spotify.com/track/4JLakgLUICMINJsLSG9Vc9"
      },
      {
        title: "Hungry Eyes",
        artist: "Eric Carmen",
        spotifyUrl: "https://open.spotify.com/track/7MBXH3z5oQNDzbKRRBk5qg"
      },
      {
        title: "She's Like the Wind",
        artist: "Patrick Swayze",
        spotifyUrl: "https://open.spotify.com/track/1xziY2hm2nf7qjYV6JhLqv"
      },
      {
        title: "Be My Baby",
        artist: "The Ronettes",
        spotifyUrl: "https://open.spotify.com/track/1l6CsEAjdWmV5ZKJm2lFYs"
      }
    ]
  },
  {
    id: 15,
    title: "The Princess Bride",
    year: 1987,
    poster: "/placeholder.svg",
    rating: 8.0,
    genre: "Fantasy Romance",
    description: "A bedridden boy's grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles, enemies and allies in his quest to be reunited with his true love.",
    decade: "1980s"
  },
  {
    id: 16,
    title: "Say Anything",
    year: 1989,
    poster: "/placeholder.svg",
    rating: 7.3,
    genre: "Romance Comedy",
    description: "A noble underachiever and a beautiful valedictorian fall in love the summer before she goes to college.",
    decade: "1980s"
  },
  {
    id: 17,
    title: "The Way We Were",
    year: 1973,
    poster: "/placeholder.svg",
    rating: 7.1,
    genre: "Romance Drama",
    description: "Two desperately different individuals from different backgrounds fall in love and get married, but their conflicting ideologies and ambitions cause them to drift apart.",
    decade: "1970s"
  },
  {
    id: 18,
    title: "Love Story",
    year: 1970,
    poster: "/placeholder.svg",
    rating: 6.9,
    genre: "Romance Drama",
    description: "A boy and a girl from different backgrounds fall in love regardless of their upbringing - and then tragedy strikes.",
    decade: "1970s"
  },
  {
    id: 19,
    title: "Annie Hall",
    year: 1977,
    poster: "/placeholder.svg",
    rating: 8.0,
    genre: "Romance Comedy",
    description: "Alvy Singer, a neurotic comedian, reflects on his relationship with the ditzy but endearing Annie Hall.",
    decade: "1970s"
  },
  {
    id: 20,
    title: "Gone with the Wind",
    year: 1939,
    poster: "/placeholder.svg",
    rating: 8.1,
    genre: "Romance Epic",
    description: "A manipulative woman and a roguish man conduct a turbulent romance during the American Civil War and Reconstruction periods.",
    decade: "classics"
  },
  {
    id: 21,
    title: "An Officer and a Gentleman",
    year: 1982,
    poster: "/placeholder.svg",
    rating: 7.0,
    genre: "Romance Drama",
    description: "A young man must complete his work at a Navy Officer Candidate School to become an aviator, with the help of a tough Gunnery Sergeant and his new girlfriend.",
    decade: "1980s"
  },
  {
    id: 22,
    title: "Pretty Woman",
    year: 1990,
    poster: prettyWomanPoster,
    rating: 7.0,
    genre: "Romance Comedy",
    description: "A man in a legal but hurtful business needs an escort for some social events, and hires a beautiful prostitute he meets... only to fall in love.",
    decade: "1990s",
    songs: [
      {
        title: "Oh, Pretty Woman",
        artist: "Roy Orbison",
        spotifyUrl: "https://open.spotify.com/track/5Rl8UZ1cqsI33MtqhCj5VA"
      },
      {
        title: "King of Wishful Thinking",
        artist: "Go West",
        spotifyUrl: "https://open.spotify.com/track/1xGqOKd1MJ14k0w7wPkfpJ"
      },
      {
        title: "It Must Have Been Love",
        artist: "Roxette",
        spotifyUrl: "https://open.spotify.com/track/4t2cYFd17YwSjYlvowBFX1"
      },
      {
        title: "Fallen",
        artist: "Lauren Wood",
        spotifyUrl: "https://open.spotify.com/track/2UvwSrCr9V5FQYUPZRb9xw"
      }
    ]
  },
  {
    id: 23,
    title: "You've Got Mail",
    year: 1998,
    poster: "/placeholder.svg",
    rating: 6.7,
    genre: "Romance Comedy",
    description: "Two business rivals who despise each other in real life fall in love over the Internet.",
    decade: "1990s"
  },
  {
    id: 24,
    title: "Jerry Maguire",
    year: 1996,
    poster: "/placeholder.svg",
    rating: 7.3,
    genre: "Romance Drama",
    description: "When a sports agent has a moral epiphany and is fired for expressing it, he decides to put his new philosophy to the test as an independent agent with the only athlete who stays with him.",
    decade: "1990s"
  },
  {
    id: 25,
    title: "While You Were Sleeping",
    year: 1995,
    poster: "/placeholder.svg",
    rating: 6.8,
    genre: "Romance Comedy",
    description: "A hopelessly romantic Chicago Transit Authority token collector is mistaken for the fiancée of a coma patient.",
    decade: "1990s"
  },
  {
    id: 26,
    title: "Notting Hill",
    year: 1999,
    poster: "/placeholder.svg",
    rating: 7.2,
    genre: "Romance Comedy",
    description: "The life of a simple bookshop owner changes when he meets the most famous film star in the world.",
    decade: "1990s"
  },
  {
    id: 27,
    title: "Shakespeare in Love",
    year: 1998,
    poster: "/placeholder.svg",
    rating: 7.1,
    genre: "Period Romance",
    description: "The world's greatest ever playwright, William Shakespeare, is young, out of ideas and short of cash until he meets his ideal woman and is inspired to write one of his most famous plays.",
    decade: "1990s"
  },
  {
    id: 28,
    title: "The English Patient",
    year: 1996,
    poster: "/placeholder.svg",
    rating: 7.4,
    genre: "War Romance",
    description: "At the close of World War II, a young nurse tends to a badly-burned plane crash victim. His past is shown in flashbacks, revealing an involvement in a fateful love affair.",
    decade: "1990s"
  },
  {
    id: 29,
    title: "Moulin Rouge!",
    year: 2001,
    poster: moulinRougePoster,
    rating: 7.6,
    genre: "Musical Romance",
    description: "A poor Bohemian poet in 1890s Paris falls for a beautiful courtesan and nightclub star whom a jealous duke covets.",
    decade: "2000s",
    songs: [
      {
        title: "Lady Marmalade",
        artist: "Christina Aguilera, Lil' Kim, Mýa, Pink",
        spotifyUrl: "https://open.spotify.com/track/0l1oIgzSkkEGXPzFPzT2V4"
      },
      {
        title: "Come What May",
        artist: "Nicole Kidman & Ewan McGregor",
        spotifyUrl: "https://open.spotify.com/track/6V2UdwTt3XHSI7cNuHfZH1"
      },
      {
        title: "Elephant Love Medley",
        artist: "Nicole Kidman & Ewan McGregor",
        spotifyUrl: "https://open.spotify.com/track/4gzpzMOPyV5N5Y3KVBj3Zs"
      },
      {
        title: "Your Song",
        artist: "Ewan McGregor",
        spotifyUrl: "https://open.spotify.com/track/5JLoxcvLj4wE0VLM6DKuqa"
      }
    ]
  },
  {
    id: 30,
    title: "Sweet Home Alabama",
    year: 2002,
    poster: "/placeholder.svg",
    rating: 6.2,
    genre: "Romance Comedy",
    description: "A young woman who has reinvented herself as a New York City socialite must return home to Alabama to obtain a divorce from her husband after seven years of separation.",
    decade: "2000s"
  },
  {
    id: 31,
    title: "How to Lose a Guy in 10 Days",
    year: 2003,
    poster: "/placeholder.svg",
    rating: 6.5,
    genre: "Romance Comedy",
    description: "Benjamin Barry is an advertising executive and ladies' man who, to win a big campaign, bets that he can make a woman fall in love with him in 10 days.",
    decade: "2000s"
  },
  {
    id: 32,
    title: "Love Actually",
    year: 2003,
    poster: "/placeholder.svg",
    rating: 7.6,
    genre: "Romance Comedy",
    description: "Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.",
    decade: "2000s"
  },
  {
    id: 33,
    title: "50 First Dates",
    year: 2004,
    poster: "/placeholder.svg",
    rating: 6.8,
    genre: "Romance Comedy",
    description: "Henry Roth is a man afraid of commitment until he meets the beautiful Lucy. They hit it off and Henry think he's finally found the girl of his dreams until discovering she has short-term memory loss and forgets him the next day.",
    decade: "2000s"
  },
  {
    id: 34,
    title: "The Holiday",
    year: 2006,
    poster: "/placeholder.svg",
    rating: 6.9,
    genre: "Romance Comedy",
    description: "Two women troubled with guy-problems swap homes in each other's countries, where they each meet a local guy and fall in love.",
    decade: "2000s"
  },
  {
    id: 35,
    title: "27 Dresses",
    year: 2008,
    poster: "/placeholder.svg",
    rating: 6.1,
    genre: "Romance Comedy",
    description: "After serving as a bridesmaid 27 times, a young woman wrestles with the idea of standing by her sister's side as her sibling marries the man she's secretly in love with.",
    decade: "2000s"
  },
  {
    id: 36,
    title: "P.S. I Love You",
    year: 2007,
    poster: "/placeholder.svg",
    rating: 7.0,
    genre: "Romance Drama",
    description: "A young widow discovers that her late husband has left her 10 messages intended to help ease her pain and start a new life.",
    decade: "2000s"
  },
  {
    id: 37,
    title: "The Time Traveler's Wife",
    year: 2009,
    poster: "/placeholder.svg",
    rating: 7.1,
    genre: "Sci-Fi Romance",
    description: "A Chicago librarian has a gene that causes him to involuntarily time travel, creating complications in his marriage.",
    decade: "2000s"
  },
  {
    id: 38,
    title: "Dear John",
    year: 2010,
    poster: "/placeholder.svg",
    rating: 6.3,
    genre: "War Romance",
    description: "A romantic drama about a soldier who falls for a conservative college student while he's home on leave.",
    decade: "2010s"
  },
  {
    id: 39,
    title: "The Vow",
    year: 2012,
    poster: "/placeholder.svg",
    rating: 6.8,
    genre: "Romance Drama",
    description: "A car accident puts Paige in a coma, and when she wakes up with severe memory loss, her husband Leo works to win her heart again.",
    decade: "2010s"
  },
  {
    id: 40,
    title: "Safe Haven",
    year: 2013,
    poster: "/placeholder.svg",
    rating: 6.7,
    genre: "Romance Thriller",
    description: "A young woman with a mysterious past lands in Southport, North Carolina where her bond with a widower forces her to confront the dark secret that haunts her.",
    decade: "2010s"
  },
  {
    id: 41,
    title: "The Fault in Our Stars",
    year: 2014,
    poster: "/placeholder.svg",
    rating: 7.7,
    genre: "Romance Drama",
    description: "Hazel and Augustus are two teenagers who share an acerbic wit, a disdain for the conventional, and a love that sweeps them on a journey.",
    decade: "2010s"
  },
  {
    id: 42,
    title: "Me Before You",
    year: 2016,
    poster: "/placeholder.svg",
    rating: 7.4,
    genre: "Romance Drama",
    description: "A girl in a small town forms an unlikely bond with a recently-paralyzed man she's taking care of.",
    decade: "2010s"
  },
  {
    id: 43,
    title: "The Best of Me",
    year: 2014,
    poster: "/placeholder.svg",
    rating: 6.7,
    genre: "Romance Drama",
    description: "A pair of former high school sweethearts reunite after many years when they return to visit their small hometown.",
    decade: "2010s"
  },
  {
    id: 44,
    title: "About Time",
    year: 2013,
    poster: "/placeholder.svg",
    rating: 7.8,
    genre: "Sci-Fi Romance",
    description: "At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life.",
    decade: "2010s"
  },
  {
    id: 45,
    title: "Midnight in Paris",
    year: 2011,
    poster: "/placeholder.svg",
    rating: 7.7,
    genre: "Fantasy Romance",
    description: "While on a trip to Paris with his fiancée's family, a nostalgic screenwriter finds himself mysteriously going back to the 1920s every day at midnight.",
    decade: "2010s"
  },
  {
    id: 46,
    title: "Crazy, Stupid, Love",
    year: 2011,
    poster: "/placeholder.svg",
    rating: 7.4,
    genre: "Romance Comedy",
    description: "A middle-aged husband's life changes dramatically when his wife asks him for a divorce. He seeks to rediscover his manhood with the help of a newfound friend, Jacob.",
    decade: "2010s"
  },
  {
    id: 47,
    title: "The Proposal",
    year: 2009,
    poster: "/placeholder.svg",
    rating: 6.7,
    genre: "Romance Comedy",
    description: "A pushy boss forces her young assistant to marry her in order to keep her visa status in the U.S. and avoid deportation to Canada.",
    decade: "2000s"
  },
  {
    id: 48,
    title: "The Lucky One",
    year: 2012,
    poster: "/placeholder.svg",
    rating: 6.4,
    genre: "Romance Drama",
    description: "A Marine travels to Louisiana after serving three tours in Iraq and searches for the unknown woman he believes was his good luck charm during the war.",
    decade: "2010s"
  },
  {
    id: 49,
    title: "A Walk to Remember",
    year: 2002,
    poster: "/placeholder.svg",
    rating: 7.3,
    genre: "Romance Drama",
    description: "Two North Carolina teens, Landon Carter and Jamie Sullivan, are thrown together after Landon gets into trouble and is sentenced to perform community service.",
    decade: "2000s"
  },
  {
    id: 50,
    title: "The Last Song",
    year: 2010,
    poster: "/placeholder.svg",
    rating: 6.0,
    genre: "Romance Drama",
    description: "A rebellious girl is sent to a Southern beach town for the summer to stay with her father.",
    decade: "2010s"
  },
  {
    id: 51,
    title: "If Beale Street Could Talk",
    year: 2018,
    poster: "/placeholder.svg",
    rating: 7.1,
    genre: "Romance Drama",
    description: "A woman in Harlem desperately scrambles to prove her fiancé innocent of a crime while carrying their first child.",
    decade: "2010s"
  },
  {
    id: 52,
    title: "Call Me by Your Name",
    year: 2017,
    poster: "/placeholder.svg",
    rating: 7.9,
    genre: "Coming-of-Age Romance",
    description: "In 1980s Italy, romance blossoms between a seventeen-year-old student and the older man hired as his father's research assistant.",
    decade: "2010s"
  },
  {
    id: 53,
    title: "The Big Sick",
    year: 2017,
    poster: "/placeholder.svg",
    rating: 7.5,
    genre: "Romance Comedy",
    description: "Pakistan-born comedian Kumail Nanjiani and grad student Emily Gardner fall in love but struggle as their cultures clash.",
    decade: "2010s"
  },
  {
    id: 54,
    title: "To All the Boys I've Loved Before",
    year: 2018,
    poster: "/placeholder.svg",
    rating: 7.0,
    genre: "Teen Romance",
    description: "A teenage girl's secret love letters are exposed and wreak havoc on her love life.",
    decade: "2010s"
  },
  {
    id: 55,
    title: "Always Be My Maybe",
    year: 2019,
    poster: "/placeholder.svg",
    rating: 6.8,
    genre: "Romance Comedy",
    description: "Everyone assumed Sasha and Marcus would wind up together except for Sasha and Marcus. Reconnecting after 15 years, the two start falling for each other just as Sasha's about to marry another man.",
    decade: "2010s"
  },
  {
    id: 56,
    title: "Palm Springs",
    year: 2020,
    poster: "/placeholder.svg",
    rating: 7.4,
    genre: "Sci-Fi Romance",
    description: "When carefree Nyles and reluctant maid of honor Sarah have a chance encounter at a Palm Springs wedding, things get complicated as they find themselves unable to escape the venue, themselves, or each other.",
    decade: "2020s"
  },
  {
    id: 57,
    title: "The Half of It",
    year: 2020,
    poster: "/placeholder.svg",
    rating: 6.9,
    genre: "Coming-of-Age Romance",
    description: "A shy student living in a small town helps the sweet jock woo the girl they both like.",
    decade: "2020s"
  },
  {
    id: 58,
    title: "Emma.",
    year: 2020,
    poster: "/placeholder.svg",
    rating: 6.7,
    genre: "Period Romance",
    description: "In 1800s England, a well meaning but selfish young woman meddles in the love lives of her friends.",
    decade: "2020s"
  },
  {
    id: 59,
    title: "The Kissing Booth",
    year: 2018,
    poster: "/placeholder.svg",
    rating: 6.0,
    genre: "Teen Romance",
    description: "A high school student is forced to confront her secret crush when she volunteers with him at a kissing booth.",
    decade: "2010s"
  },
  {
    id: 60,
    title: "Set It Up",
    year: 2018,
    poster: "/placeholder.svg",
    rating: 6.5,
    genre: "Romance Comedy",
    description: "Two corporate executive assistants hatch a plan to match-make their two bosses.",
    decade: "2010s"
  },
  {
    id: 61,
    title: "Someone Great",
    year: 2019,
    poster: "/placeholder.svg",
    rating: 6.2,
    genre: "Romance Comedy",
    description: "After a devastating break up on the eve of her cross-country move, Jenny enjoys one last NYC adventure with her two best pals.",
    decade: "2010s"
  },
  {
    id: 62,
    title: "Purple Hearts",
    year: 2022,
    poster: "/placeholder.svg",
    rating: 6.7,
    genre: "Romance Drama",
    description: "An aspiring musician agrees to a marriage of convenience with a soon-to-deploy Marine, but a tragedy soon turns their fake relationship all too real.",
    decade: "2020s"
  },
  {
    id: 63,
    title: "After",
    year: 2019,
    poster: "/placeholder.svg",
    rating: 5.3,
    genre: "Romance Drama",
    description: "A young woman falls for a guy with a dark secret and the two embark on a rocky relationship.",
    decade: "2010s"
  },
  {
    id: 64,
    title: "The Perfect Date",
    year: 2019,
    poster: "/placeholder.svg",
    rating: 5.8,
    genre: "Teen Romance",
    description: "To save up for college, Brooks Rattigan creates an app where anyone can pay him to play the perfect stand-in boyfriend for any occasion.",
    decade: "2010s"
  },
  {
    id: 65,
    title: "Isn't It Romantic",
    year: 2019,
    poster: "/placeholder.svg",
    rating: 6.2,
    genre: "Romance Comedy",
    description: "A young woman disenchanted with love mysteriously finds herself trapped inside a romantic comedy.",
    decade: "2010s"
  },
  {
    id: 66,
    title: "Yesterday",
    year: 2019,
    poster: "/placeholder.svg",
    rating: 6.8,
    genre: "Music Romance",
    description: "A struggling musician realizes he's the only person on Earth who can remember The Beatles after waking up in an alternate timeline where they never existed.",
    decade: "2010s"
  },
  {
    id: 67,
    title: "Bridget Jones's Diary",
    year: 2001,
    poster: "/placeholder.svg",
    rating: 6.8,
    genre: "Romance Comedy",
    description: "A British woman is determined to improve herself while she looks for love in a year in which she keeps a personal diary.",
    decade: "2000s"
  },
  {
    id: 68,
    title: "Serendipity",
    year: 2001,
    poster: "/placeholder.svg",
    rating: 6.8,
    genre: "Romance Comedy",
    description: "A couple search for each other years after the night they first met, fell in love, and separated, convinced that one day they'd end up together.",
    decade: "2000s"
  },
  {
    id: 69,
    title: "French Kiss",
    year: 1995,
    poster: "/placeholder.svg",
    rating: 6.6,
    genre: "Romance Comedy",
    description: "A woman flies to France to confront her straying fiancé, but gets into trouble when the charming crook seated next to her uses her for smuggling.",
    decade: "1990s"
  },
  {
    id: 70,
    title: "Four Weddings and a Funeral",
    year: 1994,
    poster: "/placeholder.svg",
    rating: 7.1,
    genre: "Romance Comedy",
    description: "Over the course of five social occasions, a committed bachelor must consider the notion that he may have discovered love.",
    decade: "1990s"
  },
  {
    id: 71,
    title: "My Best Friend's Wedding",
    year: 1997,
    poster: "/placeholder.svg",
    rating: 6.3,
    genre: "Romance Comedy",
    description: "When a woman's long-time friend reveals he's engaged, she realizes she loves him herself and sets out to get him, with only days before the wedding.",
    decade: "1990s"
  },
  {
    id: 72,
    title: "Runaway Bride",
    year: 1999,
    poster: "/placeholder.svg",
    rating: 5.6,
    genre: "Romance Comedy",
    description: "A reporter is assigned to write a story about a woman who has left a string of fiancés at the altar.",
    decade: "1990s"
  },
  {
    id: 73,
    title: "Simply Irresistible",
    year: 1999,
    poster: "/placeholder.svg",
    rating: 5.2,
    genre: "Fantasy Romance",
    description: "A magical crab works wonders for a terrible chef's culinary skills, leading her towards the man of her dreams.",
    decade: "1990s"
  },
  {
    id: 74,
    title: "Sixteen Candles",
    year: 1984,
    poster: "/placeholder.svg",
    rating: 7.0,
    genre: "Teen Romance",
    description: "A young girl's sweet sixteenth birthday becomes anything but special as she suffers from every embarrassment possible.",
    decade: "1980s"
  },
  {
    id: 75,
    title: "The Breakfast Club",
    year: 1985,
    poster: "/placeholder.svg",
    rating: 7.8,
    genre: "Teen Romance",
    description: "Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.",
    decade: "1980s"
  },
  {
    id: 76,
    title: "Some Kind of Wonderful",
    year: 1987,
    poster: "/placeholder.svg",
    rating: 7.0,
    genre: "Teen Romance",
    description: "A young tomboy, Watts, finds her feelings for her best friend, Keith, run deeper than just friendship when he gets a date with the most popular girl in school.",
    decade: "1980s"
  },
  {
    id: 77,
    title: "Can't Hardly Wait",
    year: 1998,
    poster: "/placeholder.svg",
    rating: 6.5,
    genre: "Teen Romance",
    description: "A complete graduating class, consisting of beautiful girls, geeks and promising footballers, assemble at a rich classmate's residence for a party.",
    decade: "1990s"
  },
  {
    id: 78,
    title: "She's All That",
    year: 1999,
    poster: "/placeholder.svg",
    rating: 5.9,
    genre: "Teen Romance",
    description: "A high school jock makes a bet that he can turn an unattractive girl into the school's prom queen.",
    decade: "1990s"
  },
  {
    id: 79,
    title: "10 Things I Hate About You",
    year: 1999,
    poster: "/placeholder.svg",
    rating: 7.3,
    genre: "Teen Romance",
    description: "A pretty, popular teenager can't go out on a date until her ill-tempered older sister does.",
    decade: "1990s"
  },
  {
    id: 80,
    title: "Never Been Kissed",
    year: 1999,
    poster: "/placeholder.svg",
    rating: 6.0,
    genre: "Teen Romance",
    description: "A newspaper reporter enrolls in high school as part of research for a story.",
    decade: "1990s"
  },
  {
    id: 81,
    title: "Clueless",
    year: 1995,
    poster: "/placeholder.svg",
    rating: 6.9,
    genre: "Teen Romance",
    description: "A rich high school student tries to boost a new pupil's popularity, but reckons without affairs of the heart getting in the way.",
    decade: "1990s"
  },
  {
    id: 82,
    title: "The Wedding Planner",
    year: 2001,
    poster: "/placeholder.svg",
    rating: 5.3,
    genre: "Romance Comedy",
    description: "A wedding planner falls in love with her client's fiancé.",
    decade: "2000s"
  },
  {
    id: 83,
    title: "Maid in Manhattan",
    year: 2002,
    poster: "/placeholder.svg",
    rating: 5.3,
    genre: "Romance Comedy",
    description: "A Senatorial candidate falls for a hotel maid, thinking she is a socialite, when he sees her trying on a wealthy woman's dress.",
    decade: "2000s"
  },
  {
    id: 84,
    title: "13 Going on 30",
    year: 2004,
    poster: "/placeholder.svg",
    rating: 6.2,
    genre: "Fantasy Romance",
    description: "A girl makes a wish on her thirteenth birthday, and wakes up the next day as a thirty-year-old woman.",
    decade: "2000s"
  },
  {
    id: 85,
    title: "Win a Date with Tad Hamilton!",
    year: 2004,
    poster: "/placeholder.svg",
    rating: 5.6,
    genre: "Romance Comedy",
    description: "A small-town girl wins a date with a Hollywood star through a contest. When the date goes better than expected, a love triangle forms between the girl, the celebrity, and the girl's best friend.",
    decade: "2000s"
  },
  {
    id: 86,
    title: "Just Like Heaven",
    year: 2005,
    poster: "/placeholder.svg",
    rating: 6.7,
    genre: "Fantasy Romance",
    description: "A lonely landscape architect falls for the spirit of the beautiful woman who used to live in his new apartment.",
    decade: "2000s"
  },
  {
    id: 87,
    title: "Made of Honor",
    year: 2008,
    poster: "/placeholder.svg",
    rating: 5.6,
    genre: "Romance Comedy",
    description: "Hannah and Tom have been platonic friends for 10 years. He's a serial dater, while she wants marriage but hasn't found Mr. Right. Just as Tom is starting to think that he is relationship material after all, Hannah gets engaged.",
    decade: "2000s"
  },
  {
    id: 88,
    title: "What Happens in Vegas",
    year: 2008,
    poster: "/placeholder.svg",
    rating: 6.1,
    genre: "Romance Comedy",
    description: "A man and a woman are compelled, for legal reasons, to live life as a couple for a limited period of time.",
    decade: "2000s"
  },
  {
    id: 89,
    title: "The Ugly Truth",
    year: 2009,
    poster: "/placeholder.svg",
    rating: 6.4,
    genre: "Romance Comedy",
    description: "An uptight television producer takes control of a morning show segment on modern relationships hosted by a misogynistic man.",
    decade: "2000s"
  },
  {
    id: 90,
    title: "Valentine's Day",
    year: 2010,
    poster: "/placeholder.svg",
    rating: 5.7,
    genre: "Romance Ensemble",
    description: "Intertwining couples and singles in Los Angeles break-up and make-up based on the pressures and expectations of Valentine's Day.",
    decade: "2010s"
  },
  {
    id: 91,
    title: "Letters to Juliet",
    year: 2010,
    poster: "/placeholder.svg",
    rating: 6.5,
    genre: "Romance Drama",
    description: "Sophie dreams of becoming a writer and travels to Verona, Italy where she meets the 'Secretaries of Juliet'.",
    decade: "2010s"
  },
  {
    id: 92,
    title: "Life as We Know It",
    year: 2010,
    poster: "/placeholder.svg",
    rating: 6.1,
    genre: "Romance Comedy",
    description: "Two single adults become caregivers to an orphaned girl when their mutual best friends die in an accident.",
    decade: "2010s"
  },
  {
    id: 93,
    title: "New Year's Eve",
    year: 2011,
    poster: "/placeholder.svg",
    rating: 5.6,
    genre: "Romance Ensemble",
    description: "The lives of several couples and singles in New York intertwine over the course of New Year's Eve.",
    decade: "2010s"
  },
  {
    id: 94,
    title: "Friends with Benefits",
    year: 2011,
    poster: "/placeholder.svg",
    rating: 6.5,
    genre: "Romance Comedy",
    description: "A young man and woman decide to take their friendship to the next level without becoming a couple, but soon discover that adding sex only leads to complications.",
    decade: "2010s"
  },
  {
    id: 95,
    title: "No Strings Attached",
    year: 2011,
    poster: "/placeholder.svg",
    rating: 6.2,
    genre: "Romance Comedy",
    description: "A guy and girl try to keep their relationship strictly physical, but it's not long before they learn that they want something more.",
    decade: "2010s"
  },
  {
    id: 96,
    title: "The Switch",
    year: 2010,
    poster: "/placeholder.svg",
    rating: 6.1,
    genre: "Romance Comedy",
    description: "Seven years after the fact, a man comes to the realization that he was the sperm donor for his best friend's boy.",
    decade: "2010s"
  },
  {
    id: 97,
    title: "What's Your Number?",
    year: 2011,
    poster: "/placeholder.svg",
    rating: 6.0,
    genre: "Romance Comedy",
    description: "A woman looks back at the past nineteen men she's had relationships with in her life and wonders if one of them might be her one true love.",
    decade: "2010s"
  },
  {
    id: 98,
    title: "The Choice",
    year: 2016,
    poster: "/placeholder.svg",
    rating: 6.5,
    genre: "Romance Drama",
    description: "Travis and Gabby first meet as neighbors in a small coastal town and wind up in a relationship that is tested by life's most defining events.",
    decade: "2010s"
  },
  {
    id: 99,
    title: "The Longest Ride",
    year: 2015,
    poster: "/placeholder.svg",
    rating: 7.0,
    genre: "Romance Drama",
    description: "The lives of a young couple intertwine with a much older man as he reflects back on a lost love while he's trapped in an automobile crash.",
    decade: "2010s"
  },
  {
    id: 100,
    title: "Brooklyn",
    year: 2015,
    poster: "/placeholder.svg",
    rating: 7.5,
    genre: "Period Romance",
    description: "An Irish immigrant lands in 1950s Brooklyn, where she quickly falls into a romance with a local. When her past catches up with her, however, she must choose between two countries and the lives that exist within.",
    decade: "2010s"
  },
  {
    id: 101,
    title: "Carol",
    year: 2015,
    poster: "/placeholder.svg",
    rating: 7.2,
    genre: "Period Romance",
    description: "An aspiring photographer develops an intimate relationship with an older woman in 1950s New York.",
    decade: "2010s"
  },
  {
    id: 102,
    title: "Begin Again",
    year: 2013,
    poster: "/placeholder.svg",
    rating: 7.4,
    genre: "Music Romance",
    description: "A chance encounter between a disgraced music-business executive and a young singer-songwriter new to Manhattan turns into a promising collaboration between the two talents.",
    decade: "2010s"
  },
  {
    id: 103,
    title: "The Age of Adaline",
    year: 2015,
    poster: "/placeholder.svg",
    rating: 7.2,
    genre: "Fantasy Romance",
    description: "A young woman, born at the turn of the 20th century, is rendered ageless after an accident. After many solitary years, she meets a man who complicates the eternal life she has established for herself.",
    decade: "2010s"
  },
  {
    id: 104,
    title: "Like Crazy",
    year: 2011,
    poster: "/placeholder.svg",
    rating: 6.6,
    genre: "Romance Drama",
    description: "A British college student falls for an American student, only to be separated from him when she's banned from the U.S. after overstaying her visa.",
    decade: "2010s"
  },
  {
    id: 105,
    title: "Blue Valentine",
    year: 2010,
    poster: "/placeholder.svg",
    rating: 7.3,
    genre: "Romance Drama",
    description: "The relationship of a contemporary married couple, charting their evolution over a span of years by cross-cutting between time periods.",
    decade: "2010s"
  }
];