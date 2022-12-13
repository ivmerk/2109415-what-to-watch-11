import FilmsList from '../../components/films-list/films-list';
import GenresList from '../../components/genres-list/genres-list';
import PageHeader from '../../components/page-header/page-header';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import { useAppSelector } from '../../hooks';
import { filterFilms } from '../../utils/utils';
import { getFilms, getPromoFilm } from '../../store/film-data/selectors';
import { getGenre } from '../../store/film-process/selectors';
import BackGround from '../../components/back-ground/back-ground';
import PromoPoster from '../../components/promo-poster/promo-poster';
import PlayButton from '../../components/play-button/play-button';
import { MovieCard } from '../../types/moviescards';
import FilmCardTitle from '../../components/film-card-title/film-card-title';
import LoadingScreen from '../loading-screen/loading-screen';
import MyList from '../../components/my-list/my-list';

function MainScreen() :JSX.Element {

  const films = useAppSelector(getFilms);
  const newGenre = useAppSelector(getGenre);
  const filteredFilms = filterFilms(films, newGenre);
  const newFilm = useAppSelector(getPromoFilm);

  const checkSelectedFilm = (film: MovieCard|null) :MovieCard | undefined => {if(film) {
    return film;
  }};

  const promoFilm = checkSelectedFilm(newFilm);
  if (typeof promoFilm === 'undefined' ) {
    return(
      <HelmetProvider>
        <LoadingScreen/>
      </HelmetProvider>
    );}

  return (
    <>
      <section className="film-card">
        <Helmet>
          <title>What To Watch</title>
        </Helmet>
        <BackGround/>
        <h1 className="visually-hidden">WTW:</h1>
        <PageHeader/>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <PromoPoster/>
            <div className="film-card__desc">
              <FilmCardTitle
                film = {promoFilm}
              />
              <div className="film-card__buttons">
                <PlayButton
                  film = {promoFilm}
                />
                <MyList/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList
            films={films}
          />
          <FilmsList
            films={filteredFilms}
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
export default MainScreen;
