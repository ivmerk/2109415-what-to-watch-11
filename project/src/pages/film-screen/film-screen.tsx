import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {useParams, Link } from 'react-router-dom';
import FilmCardDesc from '../../components/film-card-desc/film-card-desc';
import FilmCardTitle from '../../components/film-card-title/film-card-title';
import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import MyList from '../../components/my-list/my-list';
import PlayButton from '../../components/play-button/play-button';
import UserBlock from '../../components/user-block/user-block';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilmAction, loadCommentsAction, loadSameGenreFilmsAction } from '../../store/api-actions';
import { getComments, getErrorStatus, getSameGenreFilms, getSelectedFilm } from '../../store/film-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { MovieCard } from '../../types/moviescards';
import { getAddReviewUlrByID } from '../../utils/geturl';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundPage from '../not-found-page/not-found-page';

function FilmScreen():JSX.Element{
  const params = useParams();
  const dispatch = useAppDispatch();
  const filmId = params.id;
  const newFilm = useAppSelector(getSelectedFilm);
  const sameGenreFilms = useAppSelector(getSameGenreFilms).slice(1);
  const hasError = useAppSelector(getErrorStatus);
  const comments = useAppSelector(getComments);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if(filmId){
        dispatch(getFilmAction(filmId));
        dispatch(loadSameGenreFilmsAction(filmId));
        dispatch(loadCommentsAction(filmId));
      } }
    return () => {isMounted = false;};
  }, [dispatch, filmId]);

  const checkSelectedFilm = (film: MovieCard|null) :MovieCard | undefined => {if(film) {
    return film;
  }};

  const selectedFilm = checkSelectedFilm(newFilm);
  if(hasError) { return <NotFoundPage/>;}

  if (typeof selectedFilm === 'undefined' ) {
    return(
      <HelmetProvider>
        <LoadingScreen/>
      </HelmetProvider>
    );
  }
  const{backgroundImage, name, posterImage, id} = selectedFilm;
  return(
    <>
      <section className="film-card film-card--full">
        <Helmet>
          <title>Film Details</title>
        </Helmet>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>
            <UserBlock/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <FilmCardTitle
                film = {selectedFilm}
              />

              <div className="film-card__buttons">
                <PlayButton
                  film={selectedFilm}
                />
                <MyList/>
                {(authorizationStatus === 'AUTH')
                  ?
                  <Link
                    className="btn film-card__button"
                    to={getAddReviewUlrByID(id.toString())}
                  >Add review
                  </Link>
                  : ''}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name}+poster`} width="218" height="327" />
            </div>
            < FilmCardDesc
              comments = {comments}
              selectedFilm = {selectedFilm}
            />
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList
            films={sameGenreFilms}
          />
        </section>

        <footer className="page-footer">
          <Logo name={'logo__link--light'}/>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default FilmScreen;
