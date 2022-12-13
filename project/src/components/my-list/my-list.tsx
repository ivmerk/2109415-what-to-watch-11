import { useEffect } from 'react';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoriteFilms, getSelectedFilm, getIsFavoriteFilmsLoading, getChangedFilm} from '../../store/film-data/selectors';
import { changeFavoriteFilmAction, loadFavoriteFilmsAction, getFilmAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function MyList():JSX.Element{
  const params = useParams();
  const getFilmId = () =>(params.id) ? params.id : '1';
  const filmId = parseInt(getFilmId(), 10);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const film = useAppSelector(getSelectedFilm);
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const isFavoriteFilmsLoading = useAppSelector(getIsFavoriteFilmsLoading);
  const changedFilm = useAppSelector(getChangedFilm);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  let isFavorite = (film?.isFavorite);

  const changeStatus = (isFavorite ? 0 : 1);

  useEffect(() => {
    dispatch(getFilmAction(filmId.toString()));
    if (authorizationStatus !== AuthorizationStatus.Auth){return;}
    dispatch(loadFavoriteFilmsAction());
    if(isFavoriteFilmsLoading){
      return;
    }
    if(!changedFilm || !film){
      return;
    }
    isFavorite = changedFilm.isFavorite;
  },[filmId, authorizationStatus, changedFilm]);

  const onClickHandle = () => {
    if(authorizationStatus !== AuthorizationStatus.Auth) {navigate(AppRoute.SingIn);}
    dispatch(changeFavoriteFilmAction({filmId, status: changeStatus }));

  };
  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={onClickHandle}
    >
      <svg
        viewBox="0 0 19 20"
        width="19"
        height="20"
      >
        <use
          xlinkHref={(isFavorite) ? '#in-list' : '#add'}
        >
        </use>
      </svg>
      <span>My list</span>
      <span
        className="film-card__count"
      >{(authorizationStatus === AuthorizationStatus.Auth) ? favoriteFilms.length : '0'}
      </span>
    </button>
  );
}
export default MyList;
