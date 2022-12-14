import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { MovieCard, Comment } from '../types/moviescards';
import {AppDispatch, State} from '../types/state';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {saveToken, dropToken} from '../services/token';
import { CommentData } from '../types/comment-data';
import { getCommentsUrlByID, getFavoriteUrlByIDwithStatus, getFilmUrlByID, getSimilarFilmsById } from '../utils/geturl';
import { FavoriteFilmStatus } from '../types/favorite-film-status';
import { redirectToRoute } from './action';

export const loadFilmsAction = createAsyncThunk<MovieCard[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<MovieCard[]>(APIRoute.Films);
    return data;
  },
);

export const getFilmAction = createAsyncThunk<MovieCard | null, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/getFilm',
  async (id, {extra: api}) => {
    const {data} = await api.get<MovieCard | null>(getFilmUrlByID(id));
    return data;
  },
);

export const getPromoAction = createAsyncThunk<MovieCard | null, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/getPromo',
  async (_arg, {extra: api})=>{
    const {data} = await api.get<MovieCard | null>(APIRoute.PromoFilm);
    return data;
  },
);

export const loadSameGenreFilmsAction = createAsyncThunk<MovieCard[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadSameGenreFilms',
  async (id, {extra: api}) => {
    const {data} = await api.get<MovieCard[]>(getSimilarFilmsById(id));
    return data;
  },
);

export const loadFavoriteFilmsAction = createAsyncThunk<MovieCard[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadFavoriteFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<MovieCard[]>(APIRoute.FavoritesFilms);
    return data;
  },
);

export const changeFavoriteFilmAction = createAsyncThunk<MovieCard | null, FavoriteFilmStatus, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/changeFavoriteFilm',
  async ({filmId, status}, {extra: api}) => {
    const {data} = await api.post<MovieCard | null>(getFavoriteUrlByIDwithStatus(filmId, status.toString()));
    return data;
  },
);

export const loadCommentsAction = createAsyncThunk<Comment[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadComments',
  async (id, {extra: api}) => {
    const {data} = await api.get<Comment[]>(getCommentsUrlByID(id));
    return data;
  },
);

export const postRewiewAction = createAsyncThunk<Comment[], CommentData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postRewiew',
  async ({comment, rating, id}, {dispatch, extra: api}) => {
    const {data} = await api.post<Comment[]>(getCommentsUrlByID(id), {comment, rating});
    dispatch(redirectToRoute(getFilmUrlByID(id)));
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<string, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data: {avatarUrl}} = await api.get<UserData>(APIRoute.Login);
    return avatarUrl;
  },
);

export const logInAction = createAsyncThunk<string, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {extra: api}) => {
    const {data: {token, avatarUrl}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    return avatarUrl;
  },
);


export const logOutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
