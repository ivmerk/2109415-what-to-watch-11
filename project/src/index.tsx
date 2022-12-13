import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './components/app/app';
import { store } from './store';
import { loadFilmsAction, checkAuthAction, getPromoAction, loadFavoriteFilmsAction } from './store/api-actions';


store.dispatch(loadFilmsAction());
store.dispatch(checkAuthAction());
store.dispatch(getPromoAction());
store.dispatch(loadFavoriteFilmsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer/>
      <App/>
    </Provider>
  </React.StrictMode>,
);
