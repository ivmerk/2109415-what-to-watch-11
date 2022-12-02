import {createReducer} from '@reduxjs/toolkit';
import { FILMGENREBYDEFAULT, AuthorizationStatus, FILM_COUNT_PER_STEP } from '../const';
import {changeGenre, loadFilms, setFilmsLoadingStatus, requireAuthorization, setError, logIn, increaseRenderingFilmsCount } from './action';
import { MovieCard} from '../types/moviescards';

type InitialState = {
  genre: string;
  films: MovieCard[];
  renderingFilmsCount: number;
  isFilmsLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  avatarUrl: string;
}

const initialState: InitialState = {
  genre: FILMGENREBYDEFAULT,
  films: [],
  renderingFilmsCount: FILM_COUNT_PER_STEP,
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
    .addCase(increaseRenderingFilmsCount, (state) => {
      state.renderingFilmsCount = state.renderingFilmsCount + FILM_COUNT_PER_STEP;
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

