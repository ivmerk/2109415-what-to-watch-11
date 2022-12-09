import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {useParams, Link } from 'react-router-dom';
import FilmCardDesc from '../../components/film-card-desc/film-card-desc';
import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilmAction, loadCommentsAction, loadSameGenreFilmsAction } from '../../store/api-actions';
import { MovieCard } from '../../types/moviescards';
import { getAddReviewUlrByID } from '../../utils/geturl';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundPage from '../not-found-page/not-found-page';
function FilmScreen():JSX.Element{
  const params = useParams();
  const dispatch = useAppDispatch();
  const filmId = params.id;
  const newFilm = useAppSelector((state) => state.selectedFilm);
  const sameGenreFilms = useAppSelector((state) => state.sameGenreFilms).slice(1);
  const error = useAppSelector((state) => state.error);
  const comments = useAppSelector((state) => state.comments);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {

    if(filmId){
      dispatch(getFilmAction(filmId));
      dispatch(loadSameGenreFilmsAction(filmId));
      dispatch(loadCommentsAction(filmId));
    }
  }, [dispatch, filmId]);

  const getSelectedFilm = (film: MovieCard|null) :MovieCard | undefined => {if(film) {
    return film;
  }};

  const selectedFilm = getSelectedFilm(newFilm);
  if(error) { return <NotFoundPage/>;}

  if (typeof selectedFilm === 'undefined' ) {
    return(
      <HelmetProvider>
        <LoadingScreen/>
      </HelmetProvider>
    );
  }
  const{backgroundImage, name, genre, released, posterImage, id} = selectedFilm;
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
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 18 14" width="18" height="14">
                    <use xlinkHref="#in-list"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
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
