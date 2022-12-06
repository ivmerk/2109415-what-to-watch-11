import SmallFilmCard from '../small-film-card/small-film-card';
import { useAppSelector } from '../../hooks';
import { filterFilms } from '../../utils/utils';
import ShowMoreButton from '../show-more-button/show-more-button';


function FilmsList() :JSX.Element {
  const newGenre = useAppSelector((state) => state.genre);
  const films = useAppSelector((state) => (state.films));
  const filteredFilms = filterFilms(films, newGenre);
  const renderingFilmsCount = useAppSelector((state) => (state.renderingFilmsCount));
  const renderedFilms = filteredFilms.slice(0, renderingFilmsCount);

  return (
    <>
      <div className="catalog__films-list">
        {renderedFilms.map((film,_id) => (
          <SmallFilmCard selectedFilm={film} key={film.id} id={film.id}/>)
        )}
      </div> );
      {(filteredFilms.length >= renderingFilmsCount) ? <ShowMoreButton/> : ''}
    </>
  );
}

export default FilmsList;
