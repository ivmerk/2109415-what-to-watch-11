import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { MovieCard, Comment } from '../types/moviescards';
import {AppDispatch, State} from '../types/state';
// import { setError } from './action';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {saveToken, dropToken} from '../services/token';
// import {store} from './';
import { CommentData } from '../types/comment-data';

// const clearErrorAction = createAsyncThunk(
//   'data/clearError',
//   () => {
//     setTimeout(
//       () => store.dispatch(setError(null)),
//       TIMEOUT_SHOW_ERROR,
//     );
//   },
// );

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
    const {data} = await api.get<MovieCard>(`/films/${id}`);
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
    const {data} = await api.get<MovieCard[]>(`/films/${id}/similar`);
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
    const {data} = await api.get<Comment[]>(`/comments/${id}`);
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
    const {data} = await api.post<Comment[]>(`/comments/${id}`, {comment, rating});
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
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
