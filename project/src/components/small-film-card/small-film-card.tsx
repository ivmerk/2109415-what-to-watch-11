import { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MovieCard } from '../../types/moviescards';
import { getFilmUrlByID } from '../../utils/geturl';
import VideoPlayer from '../video-player/video-player';
type SmallFilmCardProps = {
  selectedFilm:MovieCard;
  id:number;
}

function SmallFilmCard({selectedFilm: film}: SmallFilmCardProps): JSX.Element {
  const{posterImage, name, id} = film;

  const navigate = useNavigate();
  let timer = setTimeout(()=>null, 100);
  const [isActiveCard, setActiveCard] = useState(false);

  function onMouseOverHandle() {
    timer = setTimeout(()=>setActiveCard(true),1000);
  }

  function onMouseOutHandle() {
    clearTimeout(timer);
    setActiveCard(false);
  }

  function onMouseClickHandle() {
    navigate(getFilmUrlByID(id.toString()));
  }

  return (

    <article className="small-film-card catalog__films-card">
      <Link to={`/films/${id}`}>
        <div
          className="small-film-card__image"
          onMouseOver={onMouseOverHandle}
          onMouseOut={onMouseOutHandle}

          onClick={onMouseClickHandle}
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
        <h3 className="small-film-card__title">
          <Link className="small-film-card__link" to={`/films/${id}`}>{name}{isActiveCard.toString()}</Link>
        </h3>
      </Link>
    </article>
  );
}
export default SmallFilmCard;
