import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from './cart';
import { userReducer } from './user';
import { logger } from './middlewares/logger';
import { tracker } from './middlewares/tracker';

const reducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});
