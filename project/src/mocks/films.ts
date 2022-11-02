import { MovieCard } from '../types/moviescards';
import { getRandomFloat, getRandomInteger, getRandomValue } from '../utils/utils';
import { GENRECOUNT, GENRES, NAME_COUNT, ACTORS, DIRECTORS, FILM_COUNT, POSTERS, RATING, RELEASEDATE, TITLES, VOICESCOUNT, DESCRIPTION, FILMSRC } from './const';


const generateMovieCard = () => {
  const card:MovieCard = {
    id: 0,
    filmInfo: {
      poster: getRandomValue(POSTERS),
      picture: getRandomValue(POSTERS),
      title: getRandomValue(TITLES),
      ganre: Array.from({ length: getRandomInteger(GENRECOUNT.MIN, GENRECOUNT.MAX) }, () => getRandomValue(GENRES)),
      releaseDate: getRandomInteger(VOICESCOUNT.MIN, VOICESCOUNT.MAX),
      src: FILMSRC,
    },
    overviewAndDetails: {
      description: DESCRIPTION,
      rating: getRandomFloat(RATING.MAX),
      ratingDecription: DESCRIPTION,
      voiceCount: getRandomInteger(VOICESCOUNT.MAX),
      director: getRandomValue(DIRECTORS),
      actors:Array.from({ length: getRandomInteger(1, NAME_COUNT) }, () => getRandomValue(ACTORS)),
      continuance: getRandomInteger(RELEASEDATE.MIN, RELEASEDATE.MAX),
    }
  };

  return card;
};

export const generateMoviesList = () => {
  const cards:MovieCard[] = Array.from({length: FILM_COUNT}, generateMovieCard);
  cards.map((item, index) => (item.id = index));
  return cards;
};

