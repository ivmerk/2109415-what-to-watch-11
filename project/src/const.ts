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
