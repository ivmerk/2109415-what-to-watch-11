import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import MainScreen from '../../pages/main-screen/main-screen';
import { AppRoute } from '../../const';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { MovieCard } from '../../types/moviescards';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

type AppScreenProps = {
  filmTop: MovieCard;

};

function App({filmTop}:AppScreenProps): JSX.Element {

  const films = useAppSelector((state) => state.films);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isFilmsDataLoading = useAppSelector((state) => state.isFilmsLoading);
  if (isFilmsDataLoading) {
    return(
      <HelmetProvider>
        <LoadingScreen/>
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>

      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={
            <MainScreen
              films = {films}
            />
          }
          />
          <Route path={AppRoute.Login} element={<SignInScreen/>} />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <MyListScreen/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Player}
            element={
              <PlayerScreen
                filmTop = {filmTop}
              />
            }
          />
          <Route path={AppRoute.Film}
            element={
              <FilmScreen/>
            }
          />
          <Route path={AppRoute.AddReview}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <AddReviewScreen
                  filmTop = {filmTop}
                />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
