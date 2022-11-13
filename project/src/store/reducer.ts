import {createReducer} from '@reduxjs/toolkit';
import { FILMGENREBYDEFAULT } from '../const';
import changeGenre from './action';

const initialState = {
  genre: FILMGENREBYDEFAULT,
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    });
});

