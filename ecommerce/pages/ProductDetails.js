// src/pages/ProductDetails.js
import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const products = [
  { id: 1, name: 'Product 1', price: '$10', description: 'Description of Product 1' },
  { id: 2, name: 'Product 2', price: '$20', description: 'Description of Product 2' },
  { id: 3, name: 'Product 3', price: '$30', description: 'Description of Product 3' },
];

const ProductDetails = () => {
  const { id } = useParams();
  const { dispatch } = useContext(CartContext);
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return <h2>Product not found</h2>;
  }

  const addToCart = () => {
    dispatch({ type: '', payload: product });
  };

  return (
    <div>
    console.log("Product Details.js")
    <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
      <br />
      <Link to="/products">Back to Products</Link>
    </div>
  );
};

export default ProductDetails;
