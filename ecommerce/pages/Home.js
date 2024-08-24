// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Our E-commerce Store</h1>
      <p>Shop the best products at amazing prices.</p>
      <Link to="/products">
        <button>Shop Now</button>
      </Link>
    </div>
  );
};

export default Home;

