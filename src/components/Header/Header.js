import { connect } from 'react-redux';

import {
  addToCart,
  selectCart,
  selectCartBalance,
  selectAvailableItems,
} from 'store/cart';

const HeaderComponent = ({ value, balance, addToCart, items }) => {
  console.log('render', items);
  return (
    <header>
      <h3>Balance: {balance}</h3>
      {/* <h3>Cart: {cart}</h3> */}
      <button
        onClick={() => {
          addToCart(50);
        }}
      >
        Add to cart
      </button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </header>
  );
};

const mapStateToProps = store => ({
  balance: selectCartBalance(store),
  // cart: selectCart(store),
  items: selectAvailableItems(store),
});

const mapDispatchToProps = {
  addToCart,
};

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderComponent);
