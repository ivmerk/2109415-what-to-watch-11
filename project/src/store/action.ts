import {createAction} from '@reduxjs/toolkit';


export default createAction<string>('list/changeGenre');

export const loadFilms = createAction<MovieCard[]>('data/loadFilms');

export const setFilmsLoadingStatus = createAction<boolean>('data/setFilmsLoadingStatus');
