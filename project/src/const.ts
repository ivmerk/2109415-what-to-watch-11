export const TIMEOUT_SHOW_ERROR = 2000;
export const SAME_GENRE_FILMS_QT = 4;
export const FILM_COUNT_PER_STEP = 8;


export enum AppRoute {
  Main = '/',
  Login = '/login',
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

export enum FilmGenre {
  AllGanres = 'ALL',
  Comedy = 'COMEDY',
  Triller = 'TRILLER',
  Drama = 'Drama',
}

export const FilmInfoTab = ['Overview', 'Details', 'Reviews'];

export const FILMGENREBYDEFAULT = 'All genres';

export enum NameSpace {
  Data = 'DATA',
  Film = 'FILM',
  User = 'USER'
}
