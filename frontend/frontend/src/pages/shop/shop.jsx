import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PRODUCTS } from "../../products";
import { Product } from "./products";
import "./shop.css";

export const Shop = () => {
  const renderArrowPrev = (clickHandler) => (
    <button className="arrow prev" onClick={clickHandler}>
      Previous
    </button>
  );

  const renderArrowNext = (clickHandler) => (
    <button className="arrow next" onClick={clickHandler}>
      Next
    </button>
  );


  const tents = PRODUCTS.filter((product) =>
    product.productName === "6 Person Tent"
  );
  const backpacks = PRODUCTS.filter((product) =>
    product.productName === "4 Person Tent"
  );

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Available Camping Equipments</h1>
      </div>
      <h2>Tents</h2> 
      <div className="carouselContainer">
        <Carousel
          renderArrowPrev={renderArrowPrev}
          renderArrowNext={renderArrowNext}
        >
          {tents.map((product) => (
            <div key={product.id} className="carouselItem">
              <Product data={product} />
            </div>
          ))}
        </Carousel>
      </div>

      <h2>Other Equipments</h2> 
      <div className="carouselContainer">
        <Carousel
          renderArrowPrev={renderArrowPrev}
          renderArrowNext={renderArrowNext}
        >
          {backpacks.map((product) => (
            <div key={product.id} className="carouselItem">
              <Product data={product} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
