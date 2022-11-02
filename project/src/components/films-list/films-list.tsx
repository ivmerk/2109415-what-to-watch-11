import { MovieCard } from '../../types/moviescards';
import FilmCard from '../film-card/film-card';

type FilmsListProps = {
  films:MovieCard[];
}

function FilmsList(props: FilmsListProps) :JSX.Element {
  const {films} = props;
  return (
    <>
      {films.map((film,id) => (
        <FilmCard film={film} key={film.id} id={id}/>)
      )}
    </>
  );
}

export default FilmsList;
