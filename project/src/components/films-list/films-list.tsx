import { MovieCard } from '../../types/moviescards';
import SmallFilmCard from '../small-film-card/small-film-card';
import { useAppSelector } from '../../hooks';
type FilmsListProps = {
  films:MovieCard[];
}

function FilmsList({films }: FilmsListProps) :JSX.Element {
  const renderingFilmsCount = useAppSelector((state) => (state.renderingFilmsCount));
  const renderedFilms = films.slice(0, renderingFilmsCount);

  return (
    <div className="catalog__films-list">
      {renderedFilms.map((film,id) => (
        <SmallFilmCard film={film} key={film.id} id={id}/>)
      )}
    </div> );
}

export default FilmsList;
