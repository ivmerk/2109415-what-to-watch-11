import React from 'react';
import { MovieCard } from '../../types/moviescards';
import changeGenre from '../../store/action';
import { useAppDispatch } from '../../hooks';
import { FILMGENREBYDEFAULT } from '../../const';

type GenresLostProps = {
  films: MovieCard[];
}

function GenresList(props: GenresLostProps) :JSX.Element {
  const {films} = props;
  const genres = new Set<string>().add(FILMGENREBYDEFAULT);
  films.map((film) => genres.add(film.genre));
  const genresArr:string[] = [...genres];
  const dispatch = useAppDispatch();
  return(
    <ul className="catalog__genres-list">
      {genresArr.map((genre) => (
        <li
          className="catalog__genres-item catalog__genres-item--active"
          key = {genre}
        >
          <a
            onClick={()=>{dispatch(changeGenre(genre));}}
            href="#"
            className="catalog__genres-link"
          >{genre}
          </a>
        </li>))}
    </ul>
  );
}
export default GenresList;

