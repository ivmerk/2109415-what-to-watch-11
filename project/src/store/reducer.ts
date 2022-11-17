import {createReducer} from '@reduxjs/toolkit';
import { FILMGENREBYDEFAULT } from '../const';
import {changeGenre, loadFilms } from './action';
import { MovieCard} from '../types/moviescards';

type InitialState = {
  genre: string;
  films: MovieCard[];
  isFilmsLoaded: boolean;
}

const initialState: InitialState = {
  genre: FILMGENREBYDEFAULT,
  films: [],
  isFilmsLoaded: false,
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    });
});

