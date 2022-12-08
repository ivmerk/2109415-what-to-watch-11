import {createAction} from '@reduxjs/toolkit';
import { Comment, MovieCard } from '../types/moviescards';
import {AuthorizationStatus} from '../const';

export const changeGenre = createAction<string>('list/changeGenre');

export const loadFilms = createAction<MovieCard[]>('data/loadFilms');

export const getFilm = createAction<MovieCard | null>('data/getFilm');

export const loadSameGenreFilms = createAction<MovieCard[]>('data/loadSameGenreFilms');

export const loadComments = createAction<Comment[]>('data/loadComments');

export const postRewiew = createAction<Comment[]>('data/postRewiew');

export const increaseRenderingFilmsCount = createAction<number>('list/increaseRenderingFilmsCount');

export const setFilmsLoadingStatus = createAction<boolean>('data/setFilmsLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const logIn = createAction<string>('user/login');

export const setError = createAction<string | null>('data/setError');
