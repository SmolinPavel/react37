import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: 'empty',
  balance: 100,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart = 'full';
      state.balance = state.balance - action.payload;
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
