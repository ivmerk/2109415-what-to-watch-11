export type FilmInfo = {
  poster:string;
  picture:string;
  title:string;
  ganre:string[];
  releaseDate:number;
  src: string;
};

export type OverviewAndDetails = {
  description: string;
  rating: number;
  ratingDecription: string;
  voiceCount: number;
  director:string;
  actors:string[];
  continuance:number;
};

export type MovieCard = {
  backgroundColor: string;
  backgroundImage: string;
  description: string;
  director: string;
  genre: string;
  id: number;
  isFavorite: boolean;
  name: string;
  posterImage: string;
  previewImage: string;
  previewVideoLink: string;
  rating: number;
  released: number;
  runTime: number;
  scoresCount: number;
  starring: [string];
  videoLink: string;
};

export type Genre = {
  genre: string;
};
