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
  sameGenreFilms:MovieCard[];
  comments: Comment[];
  isFilmsLoading: boolean;
};

export type FilmProcess = {
  genre: string;
  renderingFilmsCount: number;
  error: string | null;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
