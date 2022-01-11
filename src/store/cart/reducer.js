import { ACTIONS } from './actions';

const initialStore = {
  cart: 'empty',
  balance: 100,
};

export const cartReducer = (state = initialStore, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      return { ...state, balance: state.balance - 10, cart: 'full' };
    case ACTIONS.CLEAR_CART:
      return { ...initialStore };
    case ACTIONS.CHECKOUT:
      return { ...state, cart: 'checked_out' };
    default:
      return state;
  }
};
