import { useAppSelector } from '../../hooks';
import { getPromoFilm } from '../../store/film-data/selectors';

function BackGround():JSX.Element{
  const film = useAppSelector(getPromoFilm);
  return(
    <div className="film-card__bg">
      <img src={film?.backgroundImage} alt={film?.name} />
    </div>);
}

export default BackGround;
