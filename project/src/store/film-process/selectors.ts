import { NameSpace } from '../../const';
import {State} from '../../types/state';

export const getGenre = (state: State): string => state[NameSpace.Film].genre;
export const getRenderingFilmsCount = (state: State): number => state[NameSpace.Film].renderingFilmsCount;


