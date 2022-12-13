import { MovieCard } from '../../../types/moviescards';

type DetailsProps = {
  selectedFilm: MovieCard;
}


function getStarList(starring:[string]): JSX.Element{
  return(
    <>{starring[0].split(',').map((item) => `${item}`).join(', ')}</>);
}

function Details({selectedFilm}: DetailsProps): JSX.Element {
  const {director, starring, runTime, genre, released} = selectedFilm;
  return(
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {getStarList(starring)}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{(runTime / 60 > 0) ? `${Math.floor(runTime / 60)}h` : ''} {(runTime % 60 > 0) ? `${runTime % 60}m` : ''}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );}

export default Details;

