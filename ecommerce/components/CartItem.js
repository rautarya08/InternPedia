// src/components/CartItem.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div>
      <h3>{item.name}</h3>
      <p>Price: {item.price}</p>
      <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}>
        Remove from Cart
      </button>
    </div>
  );
};

export default CartItem;
