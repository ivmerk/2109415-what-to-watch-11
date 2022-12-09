import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './components/app/app';
import { generateMoviesList } from './mocks/films';
import { store } from './store';
import { loadFilmsAction, checkAuthAction } from './store/api-actions';
import { MovieCard } from './types/moviescards';

const filmTop:MovieCard = generateMoviesList()[0];
store.dispatch(loadFilmsAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer/>
      <App
        filmTop = {filmTop}
      />
    </Provider>
  </React.StrictMode>,
);
