import { NameSpace } from '../../const';
import { Comment, MovieCard } from '../../types/moviescards';
import {State} from '../../types/state';

export const getFilms = (state: State): MovieCard[] => state[NameSpace.Data].films;
export const getFilmsDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFilmsLoading;
export const getSelectedFilm = (state: State) :MovieCard | null => state[NameSpace.Data].selectedFilm;
export const getIsSelectedFilmLoading = (state: State) :boolean => state[NameSpace.Data].isSelectedFilmLoading;
export const getSameGenreFilms = (state: State) :MovieCard[] => state[NameSpace.Data].sameGenreFilms;
export const getComments = (state: State) :Comment[] => state[NameSpace.Data].comments;
export const getIsFilmsLoading = (state: State) :boolean => state[NameSpace.Data].isFilmsLoading;
export const getErrorStatus = (state: State) :boolean => state[NameSpace.Data].hasError;
export const getPromoFilm = (state: State) :MovieCard | null => state[NameSpace.Data].promoFilm;
export const getFavoriteFilms = (state: State) :MovieCard[] => state[NameSpace.Data].favoriteFilms;
export const getChangedFilm = (state: State) :MovieCard | null => state[NameSpace.Data].changedFavoriteFilms;
export const getIsFavoriteFilmsChanging = (state: State) :boolean => state[NameSpace.Data].isFavoriteFilmsChanging;
export const getIsFavoriteFilmsLoading = (state: State) :boolean => state[NameSpace.Data].isFavoriteFilmsLoading;
