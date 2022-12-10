import { APIRoute } from '../const';
import { AppRoute } from '../const';

export const getApiFilmUrlByID = (filmID: string):string => APIRoute.SelectedFilm + filmID;

export const getFilmUrlByID = (filmID: string):string => AppRoute.Film.replace(':id',filmID);

export const getSimilarFilmsById = (filmID:string):string => APIRoute.SimularFilms.replace('{filmId}',filmID);

export const getCommentsUrlByID = (filmID: string):string => APIRoute.Comments.replace('{filmId}',filmID);

export const getFavoriteUrlByIDwithStatus = (filmID:string, status:string) => APIRoute.ChangeStatus.replace('{filmID}',filmID).replace('{status}', status);

export const getAddReviewUlrByID = (filmID: string): string => AppRoute.AddReview.replace(':id',filmID);
