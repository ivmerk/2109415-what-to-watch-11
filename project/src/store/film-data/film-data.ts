import {createSlice } from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { FilmData } from '../../types/state';
import {getFilmAction, loadCommentsAction, loadFilmsAction, loadSameGenreFilmsAction, postRewiewAction} from '../api-actions';

const initialState: FilmData = {
  films: [],
  selectedFilm: null,
  sameGenreFilms:[],
  comments:[],
  isFilmsLoading: false,
};

export const filmData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadFilmsAction.pending, (state) => {
        state.isFilmsLoading = true;
      })
      .addCase(loadFilmsAction.fulfilled, (state, actions) => {
        state.films = actions.payload;
        state.isFilmsLoading = false;
      })
      .addCase( getFilmAction.fulfilled, (state, actions) => {
        state.selectedFilm = actions.payload;
      })
      .addCase(loadSameGenreFilmsAction.fulfilled, (state, actions) => {
        state.sameGenreFilms = actions.payload;
      })
      .addCase(loadCommentsAction.fulfilled, (state, actions) => {
        state.comments = actions.payload;
      })
      .addCase(postRewiewAction.fulfilled, (state, actions) => {
        state.comments = actions.payload;
      });
  }
});
