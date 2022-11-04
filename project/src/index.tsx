import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { generateMoviesList } from './mocks/films';
// import { generateReviewList } from './mocks/reviews';
import { MovieCard } from './types/moviescards';


let films:MovieCard[] = [];
films = generateMoviesList();

const filmTop:MovieCard = generateMoviesList()[0];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      films = {films}
      filmTop = {filmTop}
    />
  </React.StrictMode>,
);
