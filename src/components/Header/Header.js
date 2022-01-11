import { connect } from 'react-redux';

import { addToCart } from 'store/cart';

const HeaderComponent = ({ balance, cart, value, addToCart }) => {
  return (
    <header>
      <h3>
        Balance: {balance} / {value}
      </h3>
      <h3>Cart: {cart}</h3>
      <button onClick={addToCart}>Add to cart</button>
    </header>
  );
};

const mapStateToProps = store => ({
  balance: store.cart.balance,
  cart: store.cart.cart,
});

const mapDispatchToProps = {
  addToCart,
};

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderComponent);
