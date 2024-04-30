import React, { useContext } from "react";
import { ShopContext } from '../../context/shop-context'

export const Product = (props) => {
  const { productName, price, productImage, id } = props.data; // Extract 'id' from props.data

  const { addToCart ,cartItems} = useContext(ShopContext);
  const cartItemAmount=cartItems[id]
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>LKR.{price}</p>
        <button className="button" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount>0 && <>({cartItemAmount})</>}
                
            
        </button> 
      </div>
    </div>
  );
};
