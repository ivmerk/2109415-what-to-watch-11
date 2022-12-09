import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FILMGENREBYDEFAULT, FILM_COUNT_PER_STEP, NameSpace } from '../../const';
import { FilmProcess } from '../../types/state';

const initialState: FilmProcess = {
  genre: FILMGENREBYDEFAULT,
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
      state.renderingFilmsCount = actions.payload;
    },
  }
});

export const {changeGenre, increaseRenderingFilmsCount } = filmProcess.actions;
