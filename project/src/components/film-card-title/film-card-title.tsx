import { MovieCard } from '../../types/moviescards';

type FilmCardTitleProps = {
    film: MovieCard;
}

function FilmCardTitle({film} : FilmCardTitleProps):JSX.Element{
  const {name, genre, released} = film;
  return(
    <>
      <h2 className="film-card__title">{name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{genre}</span>
        <span className="film-card__year">{released}</span>
      </p>
    </>);
}
export default FilmCardTitle;
