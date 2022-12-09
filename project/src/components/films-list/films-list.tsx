import SmallFilmCard from '../small-film-card/small-film-card';
import { useAppSelector } from '../../hooks';
import ShowMoreButton from '../show-more-button/show-more-button';
import { MovieCard } from '../../types/moviescards';
import { getRenderingFilmsCount } from '../../store/film-process/selectors';

type FilmListPropes = {
  films: MovieCard[];
}

function FilmsList({films} :FilmListPropes) :JSX.Element {
  const renderingFilmsCount = useAppSelector(getRenderingFilmsCount);
  const renderedFilms = films.slice(0, renderingFilmsCount);

  return (
    <>
      <div className="catalog__films-list">
        {renderedFilms.map((film,_id) => (
          <SmallFilmCard selectedFilm={film} key={film.id} id={film.id}/>)
        )}
      </div>
      {(films.length >= renderingFilmsCount) ? <ShowMoreButton/> : ''}
    </>
  );
}

export default FilmsList;
