// src/pages/Cart.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { state } = useContext(CartContext);

  const total = state.cart.reduce((acc, item) => acc + parseFloat(item.price.slice(1)), 0);

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      {state.cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Go back to shop</Link></p>
      ) : (
        <div>
          {state.cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <h2>Total: ${total.toFixed(2)}</h2>
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
