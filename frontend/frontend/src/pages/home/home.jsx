


import React from "react";
import { Link } from "react-router-dom";
import './home.css';

export const Home = () => {
  const categories = ["Tents", "Back Packs", "Stoves" ];

  return (
    <div className="home">
      <h1>Camping Equipments</h1>
      <h2>Shop by category</h2>
      <div className="category-buttons">
        {categories.map((category, index) => (
          // <Link to={`/category/${index + 1}`} key={index}>
          //   <button className="category-button">{category}</button>
          // </Link>
          <Link to="/shop" key={index}>
              <button className="category-button">{category}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
