import { useNavigate } from 'react-router-dom';
import { MovieCard } from '../../types/moviescards';
import { getPlayerUrlByID } from '../../utils/geturl';

type PlayButtonPropes = {
  film: MovieCard;
}

function PlayButton({film}: PlayButtonPropes):JSX.Element{
  const {id} = film;
  const navigate = useNavigate();
  const onClickHeandle = () => {
    navigate(getPlayerUrlByID(id.toString()));
  };
  return (
    <button
      className="btn btn--play film-card__button"
      type="button"
      onClick = {onClickHeandle}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}

export default PlayButton;
