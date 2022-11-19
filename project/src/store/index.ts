import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { updateStore } from './reducer';

<<<<<<< HEAD
export const api = createAPI();
=======
export const api = create
>>>>>>> 68ba663 (something)

export const store = configureStore({
  reducer:updateStore,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
