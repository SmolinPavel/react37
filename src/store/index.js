import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { cartReducer } from './cart';
import { userReducer } from './user';

const composeEnhancers = composeWithDevTools({
  name: 'DO_NOT_FOLLOW_DIRTY_LINKS',
});

const reducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

export const store = createStore(reducer, composeEnhancers());
