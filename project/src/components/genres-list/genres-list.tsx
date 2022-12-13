import React, { MouseEvent, useCallback } from 'react';
import { MovieCard } from '../../types/moviescards';
import {changeGenre} from '../../store/film-process/film-process';
import { useAppDispatch } from '../../hooks';
import { FILMGENREBYDEFAULT, GENRES_CONT } from '../../const';

type GenresListProps = {
  films: MovieCard[];
}

function GenresList(props: GenresListProps) :JSX.Element {
  const {films} = props;
  const genres = new Set<string>().add(FILMGENREBYDEFAULT);
  films.map((film) => genres.add(film.genre));
  const genresArr:string[] = [...genres].slice(0, GENRES_CONT);
  const dispatch = useAppDispatch();

  const onClickHandle = useCallback((evt:MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(changeGenre(evt.currentTarget.id));
  },[dispatch]);

  return(
    <ul className="catalog__genres-list">
      {genresArr.map((genre: string) => (
        <li
          className="catalog__genres-item catalog__genres-item--active"
          key = {genre}
        >
          <div
            onClick={onClickHandle}
            id = {genre}
            className="catalog__genres-link"
          >{genre}
          </div>
        </li>))}
    </ul>
  );
}
export default GenresList;

