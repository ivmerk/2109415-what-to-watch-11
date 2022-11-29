export const TIMEOUT_SHOW_ERROR = 2000;

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
  Login = '/login',
  Logout = '/logout',
}

export enum FilmGenre {
  AllGanres = 'ALL',
  Comedy = 'COMEDY',
  Triller = 'TRILLER',
  Drama = 'Drama',
}

export enum FilmInfoTab {
  Overview = 'OVERVIEW',
  Details = 'DETAILS',
  Reviews = 'REVIEWS',
}

export const FILMGENREBYDEFAULT = 'All genres';
