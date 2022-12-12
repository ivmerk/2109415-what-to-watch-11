import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getFavoriteFilms, getIsFavoriteFilmsChanging, getIsFavoriteFilmsLoading, getSelectedFilm } from '../../store/film-data/selectors';
import { store } from '../../store';
import { changeFavoriteFilmAction, getFilmAction, loadFavoriteFilmsAction } from '../../store/api-actions';

function MyList():JSX.Element{
  const params = useParams();
  const getFilmId = () =>(params.id) ? params.id : '1';
  const filmId = parseInt(getFilmId(), 10);
  const currentFilm = useRef(useAppSelector(getSelectedFilm));
  const favoriteFilms = useRef(useAppSelector(getFavoriteFilms));
  const isFavoriteFilmsChanging = useAppSelector(getIsFavoriteFilmsChanging);
  const isFavoriteFilmsLoading = useAppSelector(getIsFavoriteFilmsLoading);
  const [isFavorite, setIsFavorite] = useState(true);
  const [favoriteFilmsCount, setFavoriteFilmsCount] = useState(0);
  const [isFavoriteChange, setIsFavoriteChange] = useState(false);
  const changeStatus = (isFavorite ? 0 : 1);

  useEffect(() => {

    store.dispatch(loadFavoriteFilmsAction());
    if(isFavoriteFilmsLoading){
      return;
    }

    store.dispatch(getFilmAction(getFilmId()));
    if(currentFilm.current === null){
      return;
    }
    setFavoriteFilmsCount(favoriteFilms.current.length);
    setIsFavorite(currentFilm.current.isFavorite);
  },[isFavoriteChange, getFilmId()]);

  const onClickHandle = () => {
    store.dispatch(changeFavoriteFilmAction({filmId, status: changeStatus }));
    if(isFavoriteFilmsChanging) {
      return;
    }
    setIsFavoriteChange((prev) => !prev);
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
