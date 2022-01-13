import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from './cart';
import { userReducer } from './user';

const reducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer,
});
