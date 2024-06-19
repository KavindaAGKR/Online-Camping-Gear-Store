// Product.js
import React from 'react';
import './Product.css';

const Product = ({ name, price, description, image }) => {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
};

export default Product;
