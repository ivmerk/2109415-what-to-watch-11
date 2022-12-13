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
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import {getAuthorizationStatus } from '../../store/user-process/selectors';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { getErrorStatus, getFilmsDataLoadingStatus } from '../../store/film-data/selectors';
import ErrorScreen from '../../pages/error-screen/error-screen';


function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isFilmsDataLoading = useAppSelector(getFilmsDataLoadingStatus);
  const hasError = useAppSelector(getErrorStatus);
  if (isFilmsDataLoading) {
    return(
      <HelmetProvider>
        <LoadingScreen/>
      </HelmetProvider>
    );
  }

  if (hasError){
    return (
      <ErrorScreen/>
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
          <Route path={AppRoute.SingIn} element={<SignInScreen/>} />
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
              <PlayerScreen/>
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
                <AddReviewScreen/>
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
