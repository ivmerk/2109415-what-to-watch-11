import {createAction} from '@reduxjs/toolkit';
import { MovieCard } from '../types/moviescards';
import {AuthorizationStatus} from '../const';

export const changeGenre = createAction<string>('list/changeGenre');

export const loadFilms = createAction<MovieCard[]>('data/loadFilms');

export const setFilmsLoadingStatus = createAction<boolean>('data/setFilmsLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const logIn = createAction<string>('user/login');

export const setError = createAction<string | null>('data/setError');
