import { useEffect, useRef, useState } from 'react';
import { AppRoute } from '../../const';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoriteFilms, getIsFavoriteFilmsChanging, getIsFavoriteFilmsLoading } from '../../store/film-data/selectors';
import { changeFavoriteFilmAction, loadFavoriteFilmsAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function MyList():JSX.Element{
  const params = useParams();
  const getFilmId = () =>(params.id) ? params.id : '1';
  const filmId = parseInt(getFilmId(), 10);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const favoriteFilms = useRef(useAppSelector(getFavoriteFilms));
  const isFavoriteFilmsChanging = useAppSelector(getIsFavoriteFilmsChanging);
  const isFavoriteFilmsLoading = useRef(useAppSelector(getIsFavoriteFilmsLoading));
  const [isFavorite, setIsFavorite] = useState(true);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const [favoriteFilmsCount, setFavoriteFilmsCount] = useState(0);
  const [isFavoriteChange, setIsFavoriteChange] = useState(false);
  const changeStatus = (isFavorite ? 0 : 1);

  useEffect(() => {
    dispatch(loadFavoriteFilmsAction());
    if(isFavoriteFilmsLoading.current){
      return;
    }
    setFavoriteFilmsCount(favoriteFilms.current.length);
    setIsFavorite(!!favoriteFilms.current.find((film) => film.id === filmId));
  },[filmId]);

  const onClickHandle = () => {
    if(authorizationStatus !== 'AUTH') {navigate(AppRoute.Login);}
    dispatch(changeFavoriteFilmAction({filmId, status: changeStatus }));
    if (isFavorite){
      setFavoriteFilmsCount((prev) => prev - 1);}
    else {setFavoriteFilmsCount((prev) => prev + 1);}
    setIsFavorite(!isFavorite);
    if(isFavoriteFilmsChanging) {
      return;
    }
    setIsFavoriteChange(!isFavoriteChange);
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
      <span className="film-card__count">{favoriteFilmsCount}</span>
    </button>
  );
}
export default MyList;
