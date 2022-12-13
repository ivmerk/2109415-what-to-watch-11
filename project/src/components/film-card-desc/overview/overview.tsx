import { MovieCard } from '../../../types/moviescards';
import { getRatingDescription } from '../../../utils/utils';

type OverviewProps = {
  selectedFilm: MovieCard;
}

function Overview({selectedFilm} : OverviewProps): JSX.Element {
  const {rating, scoresCount, description, director, starring} = selectedFilm;
  return(
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingDescription(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {starring.join(', ')} and other</strong></p>
      </div>
    </>);}

export default Overview;

