import { getRandomInteger, getRandomValue } from '../utils/utils';
import { ACTORS, DESCRIPTION, RATING } from './const';

type review = {
  id: number;
  description:string;
  ratingOfFilms:number;
  nameReviewer:string;
  dateOfReply:string;
}

const generateReview = () => {
  const review:review = {
    id: 0,
    description: DESCRIPTION,
    ratingOfFilms: getRandomInteger(RATING.MAX),
    nameReviewer: getRandomValue(ACTORS),
    dateOfReply: 'December 24, 2018',
  };
  return review;
};

export const generateReviewList = (count:number) => {
  const reviews = Array.from({length: count}, generateReview);
  reviews.map((item, index) => (item.id = index));
  return reviews;
};
