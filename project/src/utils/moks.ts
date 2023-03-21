import {name, datatype, internet, lorem, music, } from 'faker';
import { MovieCard } from '../types/moviescards';

export const makeFakeMovieCard = (): MovieCard => ({
  id: datatype.number(),
  name: name.title(),
  posterImage: internet.avatar(),
  previewImage: internet.avatar(),
  backgroundImage: internet.avatar(),
  backgroundColor: internet.color(),
  videoLink: internet.url(),
  previewVideoLink: internet.url(),
  description: lorem.text(),
  rating: datatype.number(10),
  scoresCount: datatype.number(100000),
  director: [name.firstName(), name.lastName()].join(' '),
  starring: [new Array(datatype.number(10)).fill(null).map(() => [name.firstName(), name.lastName()].join(' ')).join(' ')],
  runTime: datatype.number(300),
  genre: music.genre(),
  released: datatype.number({min: 1890, max: 2022, precision: 1}),
  isFavorite: datatype.boolean()

});

