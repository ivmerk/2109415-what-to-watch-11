import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FILMGENREBYDEFAULT, FILM_COUNT_PER_STEP, NameSpace, TIMEOUT_SHOW_ERROR } from '../../const';
import { FilmProcess } from '../../types/state';

const initialState: FilmProcess = {
  genre: FILMGENREBYDEFAULT,
  renderingFilmsCount:FILM_COUNT_PER_STEP,
  error: null,
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
    clearErrorAction: (state) =>{
      setTimeout(
        () => {state.error = null;},
        TIMEOUT_SHOW_ERROR,
      );
    }
  }
});
