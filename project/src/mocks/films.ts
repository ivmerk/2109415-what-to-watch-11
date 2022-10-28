import { getRandomFloat, getRandomInteger, getRandomValue } from '../utils/utils';
import { GENRECOUNT, GENRES, NAME_COUNT, ACTORS, DIRECTORS, FILM_COUNT, POSTERS, RATING, RELEASEDATE, TITLES, VOICESCOUNT, DESCRIPTION, FILMSRC } from './const';

type filmInfo = {
  poster:string;
  picture:string;
  title:string;
  ganre:string[];
  releaseDate:number;
  src: string;
};
type overviewAndDetails = {
  description: string;
  rating: number;
  ratingDecription: string;
  voiceCount: number;
  director:string;
  actors:string[];
  continuance:number;
};

type movieCard = {
  id: number;
  filmInfo: filmInfo;
  overviewAndDetails: overviewAndDetails;
}


const generateMovieCard = () => {
  const card:movieCard = {
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
  const cards = Array.from({length: FILM_COUNT}, generateMovieCard);
  cards.map((item, index) => (item.id = index));
  return cards;
};

