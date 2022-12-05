import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import FilmCardDesc from '../../components/film-card-desc/film-card-desc';
import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilmAction } from '../../store/api-actions';
import { MovieCard } from '../../types/moviescards';
import { filterFilms } from '../../utils/utils';
import { FilmID } from '../../types/moviescards';

function FilmScreen():JSX.Element{
  const params = useParams();
  const dispatch = useAppDispatch();
  const filmId = params.id;

  useEffect(() => {
    debugger;
    if(filmId){
      dispatch(getFilmAction(filmId));
    }
  }, [dispatch, filmId]);


  const newFilm = useAppSelector((state) => state.selectedFilm);

  const getSelectedFilm = (film: MovieCard|null) :MovieCard => {if(film) {
    return film;
  }};

  const selectedFilm = getSelectedFilm(newFilm);

  const{backgroundImage, name, genre, } = selectedFilm;
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
                <a href="add-review.html" className="btn film-card__button">Add review</a>
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
              selectedFilm = {selectedFilm}
            />
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <FilmsList/>
          </div>
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
