import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { generateMoviesList } from './mocks/films';
import { store } from './store';
import { MovieCard } from './types/moviescards';


let films:MovieCard[] = [];
films = generateMoviesList();

const filmTop:MovieCard = generateMoviesList()[0];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        films = {films}
        filmTop = {filmTop}
      />
    </Provider>
  </React.StrictMode>,
);
