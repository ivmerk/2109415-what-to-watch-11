import { useState} from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { MovieCard } from '../../types/moviescards';
import VideoPlayer from '../video-player/video-player';
type SmallFilmCardProps = {
  film:MovieCard;
  id:number;
}

function SmallFilmCard(props: SmallFilmCardProps): JSX.Element {
  const{id} = props;
  const{film} = props;
  const{posterImage, name} = film;
  let timer = setTimeout(()=>null, 100);
  const [isActiveCard, setActiveCard] = useState(false);
  const urlOfFilm:string = AppRoute.Film.slice(0,-2) + id.toString();

  function onMouseOverHandle() {
    timer = setTimeout(()=>setActiveCard(true),1000);
  }

  function onMouseOutHandle() {
    clearTimeout(timer);
    setActiveCard(false);
  }

  return (
    <article className="small-film-card catalog__films-card">
      <Link to={urlOfFilm} >
        <div
          className="small-film-card__image"
          onMouseOver={onMouseOverHandle}
          onMouseOut={onMouseOutHandle}
        >
          {isActiveCard
            ? <VideoPlayer autoPlay muted film={film} />
            :
            <
              img
              src={posterImage}
              alt={name}
              key={id}
              id={`film-${id}`}
              width="280"
              height="175"
            />}
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}{isActiveCard.toString()}</a>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
