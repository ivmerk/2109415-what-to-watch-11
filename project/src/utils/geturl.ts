import { APIRoute } from '../const';
import { AppRoute } from '../const';

export const getApiFilmUrlByID = (filmID: string):string => APIRoute.SelectedFilm + filmID;

export const getFilmUrlByID = (filmID: string):string => AppRoute.Film.slice(0,-3) + filmID;

export const getAddReviewUlrByID = (filmID: string): string => AppRoute.AddReview.slice(0,7) + filmID + AppRoute.AddReview.slice(10,17);
