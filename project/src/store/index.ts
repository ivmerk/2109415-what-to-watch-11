import { configureStore } from '@reduxjs/toolkit';
import { updateStore } from './reducer';

export const api = create

export const store = configureStore({
  reducer:updateStore,
  middleware: (getDefaultMiddleware) => {
    const default1 = getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    });
    return default1;
  },
});
