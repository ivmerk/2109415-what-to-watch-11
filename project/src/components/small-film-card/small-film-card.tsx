import { useCallback, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { CARD_VIDEO_DELAY_TIMER, MOUSE_OVER_CHECKING_TIMER } from '../../const';
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
  let timer = setTimeout(()=>null, MOUSE_OVER_CHECKING_TIMER);
  const [isActiveCard, setActiveCard] = useState(false);

  const onMouseOverHandle = () => {
    timer = setTimeout(()=>setActiveCard(true),CARD_VIDEO_DELAY_TIMER);
  };

  const onMouseOutHandle = useCallback(() => {
    clearTimeout(timer);
    setActiveCard(false);},[timer]
  );

  const onMouseClickHandle = useCallback(() =>
    navigate(getFilmUrlByID(id.toString())), [id, navigate]);


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
