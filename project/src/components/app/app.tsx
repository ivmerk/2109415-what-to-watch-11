import { Route, Routes } from 'react-router-dom';
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
import {getAuthorizationStatus } from '../../store/user-process/selectors';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { getFilmsDataLoadingStatus } from '../../store/film-data/selectors';
// import {getQuestionsDataLoadingStatus} from '../../store/game-data/selectors';


type AppScreenProps = {
  filmTop: MovieCard;

};

function App({filmTop}:AppScreenProps): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isFilmsDataLoading = useAppSelector(getFilmsDataLoadingStatus);
  if (isFilmsDataLoading) {
    return(
      <HelmetProvider>
        <LoadingScreen/>
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={
            <MainScreen/>
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
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
