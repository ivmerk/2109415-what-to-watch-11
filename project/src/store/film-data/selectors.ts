import { NameSpace } from '../../const';
import { Comment, MovieCard } from '../../types/moviescards';
import {State} from '../../types/state';

export const getFilms = (state: State): MovieCard[] => state[NameSpace.Data].films;
export const getFilmsDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFilmsLoading;
export const getSelectedFilm = (state: State) :MovieCard | null => state[NameSpace.Data].selectedFilm;
export const getSameGenreFilms = (state: State) :MovieCard[] => state[NameSpace.Data].sameGenreFilms;
export const getComments = (state: State) :Comment[] => state[NameSpace.Data].comments;
export const getIsFilmsLoading = (state: State) :boolean => state[NameSpace.Data].isFilmsLoading;
export const getHasError = (state: State) :boolean => state[NameSpace.Data].hasError;


