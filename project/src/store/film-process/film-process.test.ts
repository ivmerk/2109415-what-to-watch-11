import { FILM_COUNT_PER_STEP, FILM_GENRE_BY_DEFAULT } from '../../const';
import {filmProcess} from './film-process';

describe('Reducer: filmProcess', () => {
  it('without additional parametrs should return initial state', () => {
    expect(filmProcess.reducer(undefined, { type: 'UNKNOWN_ACTION'}))
      .toEqual({genre: FILM_GENRE_BY_DEFAULT, renderingFilmsCount: FILM_COUNT_PER_STEP});
  });

});
