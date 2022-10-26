import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';


function App(props: { nameOfFilm: string; ganre: string; releaseDate: number}): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={
          <MainScreen nameOfFilm={props.nameOfFilm} ganre={props.ganre} releaseDate={props.releaseDate} />
        }
        />
        <Route path={AppRoute.Login} element={<SignInScreen/>} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyListScreen/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<PlayerScreen/>} />
        <Route path={AppRoute.Film} element={<FilmScreen/>} />
        <Route path={AppRoute.AddReview} element={<AddReviewScreen/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
