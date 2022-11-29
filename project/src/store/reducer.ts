import {createReducer} from '@reduxjs/toolkit';
import { FILMGENREBYDEFAULT, AuthorizationStatus } from '../const';
import {changeGenre, loadFilms, setFilmsLoadingStatus, requireAuthorization, setError, logIn } from './action';
import { MovieCard} from '../types/moviescards';

type InitialState = {
  genre: string;
  films: MovieCard[];
  isFilmsLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  avatarUrl: string;
}

const initialState: InitialState = {
  genre: FILMGENREBYDEFAULT,
  films: [],
  isFilmsLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  avatarUrl:'',
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setFilmsLoadingStatus, (state, action) => {
      state.isFilmsLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(logIn, (state, action) => {
      state.avatarUrl = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

