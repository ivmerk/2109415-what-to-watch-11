import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

type Film = {
  nameOfFilm: string;
  ganre: string;
  releaseDate: number;
};

const filmTop: Film = {
  nameOfFilm: 'Name',
  ganre: 'Drame',
  releaseDate: 2001,
};
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App nameOfFilm={filmTop.nameOfFilm} ganre={filmTop.ganre} releaseDate={filmTop.releaseDate}/>
  </React.StrictMode>,
);
