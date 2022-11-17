const MAX_COMMENTS_ON_FILM = 5;

const FILM_COUNT = 13;

const NAME_COUNT = 3;

const GENRECOUNT = {
  MIN: 1,
  MAX: 3
};

const RATING = {
  MIN: 0,
  MAX: 10,
};

const AGERATING = {
  MIN: 0,
  MAX: 18
};

const FILMSRC = 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4';

const RUNTIME = {
  MIN: 60,
  MAX: 180
};

const YEARDURATION = {
  MIN: 2,
  MAX: 82
};

const DAYDURATION = {
  MIN: 0,
  MAX: 100
};

const VOICESCOUNT = {
  MIN: 0,
  MAX: 500000
};

const RELEASEDATE = {
  MIN: 1885,
  MAX: 2022
};

const TITLES:string[] = [
  'The Dance of Life',
  'Sagebrush Trail',
  'The Man with the Golden Arm',
  'Santa Claus Conquers the Martians',
  'Popeye the Sailor Meets Sindbad the Sailor',
];

const POSTERS:string[] = [
  'img/avatar.jpg',
  'img/aviator.jpg',
  '/img/bg-header.jpg',
  '/img/dardjeeling-limited.jpg',
  '/img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  '/img/johnny-english.jpg',
  '/img/macbeth.jpg',
  '/img/midnight-special.jpg',
];

const DIRECTORS:string[] = [
  'Takeshi Kitano',
  'Neil Affleck',
  'Ned Ambler',
  'Monty Banks',
  'Jason Bateman',
  'Massimo Dallamano',
  'Alberto De Martino',
  'Claire Denis',
  'J. D. Dillard',
];

const ACTORS:string[] = [
  'Robert De Niro',
  'Jack Nicholson',
  'Marlon Brando',
  'Denzel Washington',
  'Katharine Hepburn',
  'Humphrey Bogart',
  'Meryl Streep',
  'Daniel Day-Lewis',
  'Sidney Poitier',
  'Clark Gable',
  'Ingrid Bergman',
  'Arnold Schwarzenegger'
];

const COUNTRIES:string[] = [
  'USA',
  'USSR',
  'India',
  'S.Korea',
  'France'
];

const GENRES = {
  Comedy: 'COMEDY',
  Triller: 'TRILLER',
  Drama: 'Drama',
};


const DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';

const COMMENT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';

export {
  MAX_COMMENTS_ON_FILM,
  FILM_COUNT,
  NAME_COUNT,
  GENRECOUNT,
  RATING,
  AGERATING,
  COMMENT,
  DESCRIPTION,
  GENRES,
  RUNTIME,
  TITLES,
  POSTERS,
  YEARDURATION,
  DIRECTORS,
  ACTORS,
  COUNTRIES,
  DAYDURATION,
  VOICESCOUNT,
  RELEASEDATE,
  FILMSRC,
};
