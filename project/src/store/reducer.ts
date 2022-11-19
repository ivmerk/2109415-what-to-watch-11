import {createReducer} from '@reduxjs/toolkit';
import { FILMGENREBYDEFAULT } from '../const';
import {changeGenre, loadFilms, setFilmsLoadingStatus } from './action';
import { MovieCard} from '../types/moviescards';

type InitialState = {
  genre: string;
  films: MovieCard[];
  isFilmsLoading: boolean;
}

const initialState: InitialState = {
  genre: FILMGENREBYDEFAULT,
  films: [],
  isFilmsLoading: false,
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
    });
});

