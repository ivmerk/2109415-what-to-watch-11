import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { MovieCard } from '../../types/moviescards';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import { useAppSelector } from '../../hooks';

type AppScreenProps = {
  films: MovieCard[];
  filmTop: MovieCard;

};

function App({films, filmTop}:AppScreenProps): JSX.Element {
  const isFilmsLoaded = useAppSelector((state) => state.isFilmsLoaded);
  console.log(isFilmsLoaded);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={
          <MainScreen
            filmTop = {filmTop}
            films = {films}
          />
        }
        />
        <Route path={AppRoute.Login} element={<SignInScreen/>} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyListScreen
                filmTop = {filmTop}
                films = {films}
              />
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
            <FilmScreen
              filmTop = {filmTop}
            />
          }
        />
        <Route path={AppRoute.AddReview}
          element={
            <AddReviewScreen
              filmTop = {filmTop}
            />
          }
        />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
