export const SAME_GENRE_FILMS_QT = 4;
export const FILM_COUNT_PER_STEP = 8;


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

export enum FilmGenre {
  AllGanres = 'ALL',
  Comedy = 'COMEDY',
  Triller = 'TRILLER',
  Drama = 'Drama',
}

export const FilmInfoTab = ['Overview', 'Details', 'Reviews'];

export const FILMGENREBYDEFAULT = 'All genres';

export const GENRES_CONT = 10;

export enum NameSpace {
  Data = 'DATA',
  Film = 'FILM',
  User = 'USER'
}

export const Rating = { '10':'Awesome', '8':'Very good', '5':'Good', '3':'Normal', '0':'Bad'};
