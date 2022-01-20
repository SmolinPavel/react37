import { createSelector } from 'reselect';

export const selectCartBalance = store => store.cart.balance;
export const selectCart = store => store.cart.cart;

const selectItems = store => store.cart.items;

export const selectAvailableItems = createSelector(
  [selectItems, selectCartBalance],
  (items, balance) => items.filter(item => item.price < balance),
);
