import { MovieCard } from '../../types/moviescards';
import SmallFilmCard from '../small-film-card/small-film-card';

type FilmsListProps = {
  films:MovieCard[];
}

function FilmsList(props: FilmsListProps) :JSX.Element {
  const {films} = props;
  return (
    <>
      {films.map((film,id) => (
        <SmallFilmCard film={film} key={film.id} id={id}/>)
      )}
    </>
  );
}

export default FilmsList;
