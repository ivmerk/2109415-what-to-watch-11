import {createAction} from '@reduxjs/toolkit';
import { MovieCard } from '../types/moviescards';


export const changeGenre = createAction<string>('list/changeGenre');


export const loadFilms = createAction<MovieCard[]>('data/loadFilms');

export const setFilmsLoadingStatus = createAction<boolean>('data/setFilmsLoadingStatus');
