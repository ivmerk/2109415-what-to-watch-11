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
  id: number;
  filmInfo: FilmInfo;
  overviewAndDetails: OverviewAndDetails;
};
