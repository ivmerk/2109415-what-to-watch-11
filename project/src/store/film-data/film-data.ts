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
  hasError: false,
};

export const filmData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadFilmsAction.pending, (state) => {
        state.isFilmsLoading = true;
        state.hasError = false;
      })
      .addCase(loadFilmsAction.fulfilled, (state, actions) => {
        state.films = actions.payload;
        state.isFilmsLoading = false;
      })
      .addCase( loadFilmsAction.rejected, (state) => {
        state.isFilmsLoading = false;
        state.hasError = true;
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
