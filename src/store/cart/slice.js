import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: 'empty',
  balance: 100,
  items: [
    {
      id: 1,
      price: 50,
      name: 'Cake',
    },
    {
      id: 2,
      price: 20,
      name: 'Coffee',
    },
    {
      id: 3,
      price: 200,
      name: 'Extra huge cake',
    },
  ],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart = 'full';
      // state.balance = state.balance - action.payload;
    },
    clearCart() {
      return initialState;
    },
    checkout(state) {
      state.cart = 'checked_out';
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addToCart, clearCart, checkout } = cartSlice.actions;
