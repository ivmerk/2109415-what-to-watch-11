import { useAppSelector } from '../../hooks';
import { getPromoFilm } from '../../store/film-data/selectors';

type PromoPosterProps = {
    name?: string;
  }

function PromoPoster({name}:PromoPosterProps):JSX.Element{
  const film = useAppSelector(getPromoFilm);
  return(
    <div className={(name) ?
      `film-card__poster ${name}` :
      'film-card__poster'}
    >
      <img src={film?.posterImage} alt={film?.name} width="218" height="327" />
    </div>
  );
}

export default PromoPoster;
