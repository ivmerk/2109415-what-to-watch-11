import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
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
        <p className="small-film-card__link">{name}</p>
      </h3>
    </article>
  );
}
export default SmallFilmCard;
