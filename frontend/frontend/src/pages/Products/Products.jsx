import React from 'react';
import Product from './Product';

const ProductList = () => {
  // Sample product data
  const products = [
    {
      name: 'Product 1',
      price: 19.99,
      description: 'Description of Product 1',
      image: '/path/to/product1.jpg',
    },
    {
      name: 'Product 2',
      price: 29.99,
      description: 'Description of Product 2',
      image: '/path/to/product2.jpg',
    },
    {
      name: 'Product 3',
      price: 39.99,
      description: 'Description of Product 3',
      image: '/path/to/product3.jpg',
    },
  ];

  return (
    <div>
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
