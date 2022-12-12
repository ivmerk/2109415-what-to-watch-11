import {store} from '../store/index.js';
import {AuthorizationStatus} from '../const';
import { Comment, MovieCard } from './moviescards.js';

export type UserProcess = {
   authorizationStatus: AuthorizationStatus;
   avatarUrl: string;
 };

export type FilmData = {
  films: MovieCard[];
  selectedFilm: MovieCard | null;
  promoFilm: MovieCard | null;
  sameGenreFilms:MovieCard[];
  favoriteFilms: MovieCard[];
  isFavoriteFilmsLoading: boolean;
  changedFavoriteFilms: MovieCard | null;
  isFavoriteFilmsChanging: boolean;
  comments: Comment[];
  isFilmsLoading: boolean;
  hasError: boolean;
};

export type FilmProcess = {
  genre: string;
  renderingFilmsCount: number;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
