import {createSlice } from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { FilmData } from '../../types/state';
import {getFilmAction, loadFavoriteFilmsAction, loadCommentsAction, loadFilmsAction, loadSameGenreFilmsAction, postRewiewAction, getPromoAction, changeFavoriteFilmAction} from '../api-actions';

const initialState: FilmData = {
  films: [],
  selectedFilm: null,
  promoFilm: null,
  sameGenreFilms:[],
  favoriteFilms:[],
  isFavoriteFilmsLoading: false,
  changedFavoriteFilms: null,
  isFavoriteFilmsChanging: false,
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
      .addCase( getPromoAction.fulfilled, (state, actions) => {
        state.promoFilm = actions.payload;
      })
      .addCase(loadSameGenreFilmsAction.fulfilled, (state, actions) => {
        state.sameGenreFilms = actions.payload;
      })
      .addCase(loadFavoriteFilmsAction.pending, (state) => {
        state.isFavoriteFilmsLoading = true;
      })
      .addCase(loadFavoriteFilmsAction.fulfilled, (state, actions) => {
        state.favoriteFilms = actions.payload;
        state.isFavoriteFilmsLoading = false;
      })
      .addCase(changeFavoriteFilmAction.pending, (state) => {
        state.isFavoriteFilmsChanging = true;
      })
      .addCase(changeFavoriteFilmAction.fulfilled, (state, actions) => {
        state.isFavoriteFilmsChanging = false;
        state.changedFavoriteFilms = actions.payload;
      })
      .addCase(loadCommentsAction.fulfilled, (state, actions) => {
        state.comments = actions.payload;
      })
      .addCase(postRewiewAction.fulfilled, (state, actions) => {
        state.comments = actions.payload;
      });
  }
});
