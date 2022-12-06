import { APIRoute } from '../const';
import { AppRoute } from '../const';

export const getApiFilmUrlByID = (filmID: string):string => APIRoute.SelectedFilm + filmID;

export const getFilmUrlByID = (filmID: string):string => AppRoute.Film + filmID;
