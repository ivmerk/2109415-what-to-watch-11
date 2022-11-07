import { useState} from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { MovieCard } from '../../types/moviescards';
import VideoPlayer from '../video-player/video-player';
type FilmCardProps = {
  film:MovieCard;
  id:number;
}

function FilmCard(props: FilmCardProps): JSX.Element {
  const{id} = props;
  const{film} = props;
  const {filmInfo} = film;
  const{picture, title} = filmInfo;
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
            ? <VideoPlayer autoPlay src={filmInfo.src} />
            :
            <
              img
              src={picture}
              alt={title}
              key={id}
              id={`film-${id}`}
              width="280"
              height="175"
            />}
        </div>
      </Link>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{title}{isActiveCard.toString()}</a>
      </h3>
    </article>
  );
}

export default FilmCard;

