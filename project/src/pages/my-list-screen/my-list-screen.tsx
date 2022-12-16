import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import {Helmet} from 'react-helmet-async';
import UserBlock from '../../components/user-block/user-block';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoriteFilms, getIsFavoriteFilmsLoading } from '../../store/film-data/selectors';
import { loadFavoriteFilmsAction } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import { useEffect } from 'react';

function MyListScreen(): JSX.Element{
  const dispatch = useAppDispatch();

  const films = useAppSelector(getFavoriteFilms);
  const isFavoriteFilmsLoading = useAppSelector(getIsFavoriteFilmsLoading);
  useEffect(()=>{
    let isMounted = true;

    if (isMounted) {
      dispatch(loadFavoriteFilmsAction());}
    return ()=> {isMounted = false;};
  },[dispatch]);
  if(isFavoriteFilmsLoading){
    <LoadingScreen/>;
  }
  return(
    <div className="user-page">
      <Helmet>
        <title>Your filmslist</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{films.length}</span></h1>
        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList
          films={films}
        />

      </section>

      <footer className="page-footer">
        <Logo name={'logo__link--light'}/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListScreen;
