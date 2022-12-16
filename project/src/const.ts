export const FILM_COUNT_PER_STEP = 8;
export const RATING_COUNT = 10;
export const MOUSE_OVER_CHECKING_TIMER = 100;
export const CARD_VIDEO_DELAY_TIMER = 1000;


export enum AppRoute {
  Main = '/',
  SingIn = '/login',
  MyList = '/mylist',
  Player = '/player/:id',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}


export enum APIRoute {
  Films = '/films',
  SelectedFilm = '/films/',
  SimularFilms = '/films/{filmId}/similar',
  PromoFilm = '/promo',
  FavoritesFilms = '/favorite',
  ChangeStatus = '/favorite/{filmId}/{status}',
  Comments = '/comments/{filmId}',
  PostComment = '/comments/{filmId}',
  Login = '/login',
  Logout = '/logout',
}

export const FilmInfoTab = ['Overview', 'Details', 'Reviews'];

export const FILM_GENRE_BY_DEFAULT = 'All genres';

export const GENRES_CONT = 10;

export enum NameSpace {
  Data = 'DATA',
  Film = 'FILM',
  User = 'USER'
}

