import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FILM_COUNT_PER_STEP, FILM_GENRE_BY_DEFAULT, NameSpace } from '../../const';
import { FilmProcess } from '../../types/state';

const initialState: FilmProcess = {
  genre: FILM_GENRE_BY_DEFAULT,
  renderingFilmsCount:FILM_COUNT_PER_STEP,
};

export const filmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {
    changeGenre: (state, actions: PayloadAction<string>) =>{
      state.genre = actions.payload;
    },
    increaseRenderingFilmsCount: (state, actions: PayloadAction<number>) => {
      state.renderingFilmsCount += FILM_COUNT_PER_STEP;
    },
  }
});

export const {changeGenre, increaseRenderingFilmsCount } = filmProcess.actions;
