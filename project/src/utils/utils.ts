import { default as dayjs } from 'dayjs';
import { FILMGENREBYDEFAULT } from '../const';
import { MovieCard } from '../types/moviescards';

// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomFloat = (a = 1, b = 0) => {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  return lower + Math.random() * (upper - lower);
};

const getRandomValue = (items:string[]) => items[getRandomInteger(0, items.length - 1)];


const formatStringToDate = (date:string):string => dayjs(date).format('MMMM D, YYYY');

function getArray(count:number):number[] {
  const result :number[] = [1];
  while (result.length < count) {
    result.unshift(result.length + 1);
  }
  return result;
}

function filterFilms(films :MovieCard[], newGenre :string):MovieCard[] {
  return (newGenre !== FILMGENREBYDEFAULT) ?
    films.filter((film)=>film.genre.includes(newGenre)) :
    films;
}

function getRatingDescription (rating :number):string{
  if (rating === 10) { return 'Awesome';}
  if (rating >= 8) { return 'Very good';}
  if (rating >= 5) { return 'Good';}
  if (rating >= 3) {return 'Normal';}
  return 'Bad';
}

export {
  getRandomInteger,
  getRandomValue,
  getRandomFloat,
  formatStringToDate,
  getArray,
  filterFilms,
  getRatingDescription,
};
