import { MovieCard } from '../types/moviescards';
import { getRandomFloat, getRandomInteger, getRandomValue } from '../utils/utils';
import { GENRES, NAME_COUNT, ACTORS, DIRECTORS, FILM_COUNT, POSTERS, RATING, RELEASEDATE, TITLES, VOICESCOUNT, DESCRIPTION, FILMSRC } from './const';


const generateMovieCard = () => {
  const card:MovieCard = {
    id: 0,
    name: getRandomValue(TITLES),
    posterImage: getRandomValue(POSTERS),
    previewImage: getRandomValue(POSTERS),
    backgroundImage: getRandomValue(POSTERS),
    backgroundColor: getRandomValue(POSTERS),
    videoLink: FILMSRC,
    previewVideoLink: FILMSRC,
    description: DESCRIPTION,
    rating: getRandomFloat(RATING.MAX),
    scoresCount: getRandomInteger(VOICESCOUNT.MAX),
    director: getRandomValue(DIRECTORS),
    starring:[Array.from({ length: getRandomInteger(1, NAME_COUNT) }, () => getRandomValue(ACTORS)).join()],
    runTime: getRandomInteger(RELEASEDATE.MIN, RELEASEDATE.MAX),
    genre: getRandomValue(Object.keys(GENRES)),
    released: getRandomInteger(VOICESCOUNT.MIN, VOICESCOUNT.MAX),
    isFavorite: false,
  };

  return card;
};

export const generateMoviesList = () => {
  const cards:MovieCard[] = Array.from({length: FILM_COUNT}, generateMovieCard);
  cards.map((item, index) => (item.id = index));
  return cards;
};

