import { default as dayjs } from 'dayjs';
import { FILM_GENRE_BY_DEFAULT } from '../const';
import { MovieCard } from '../types/moviescards';

const formatStringToDate = (date:string):string => dayjs(date).format('MMMM D, YYYY');


function filterFilms(films :MovieCard[], newGenre :string):MovieCard[] {
  return (newGenre !== FILM_GENRE_BY_DEFAULT) ?
    films.filter((film)=>film.genre.includes(newGenre)) :
    films;
}
function getArray(count:number):number[] {
  const result :number[] = [1];
  while (result.length < count) {
    result.unshift(result.length + 1);
  }
  return result;
}
function getRatingDescription (rating :number):string{
  if (rating === 10) { return 'Awesome';}
  if (rating >= 8) { return 'Very good';}
  if (rating >= 5) { return 'Good';}
  if (rating >= 3) {return 'Normal';}
  return 'Bad';
}

export {
  getArray,
  formatStringToDate,
  filterFilms,
  getRatingDescription,
};
