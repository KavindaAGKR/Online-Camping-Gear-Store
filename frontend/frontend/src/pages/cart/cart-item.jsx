// import React ,{useContext} from "react";
// import {ShopContext} from "../../context/shop-context"
// export const CartItem = (props) => {
//   const { id, productName, price, productImage } = props.data;
//   const {cartItems ,removFromCart ,addToCart,updateCartItemCount}=useContext(ShopContext);

//   return (
//     <div className="cartItem">
//       <img src={productImage} alt={productName} />
//       <div className="description">
        
//         <b>{productName}</b>
//         <p>Price: ${price}</p>
//         <div className="countHandler">
//             <button onClick={()=>removFromCart(id)}>-</button>
//             <input
//             value={cartItems[id]}
//             onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
//             />

//             <button onClick={()=>addToCart(id)}>+</button>

//         </div>

//       </div>
//     </div>
//   );
// };


import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, name, price, image } = props.data;
  const { cartItems, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={image} alt={name} />
      <div className="description">
        <b>{name}</b>
        <p>Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id] || 0}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => updateCartItemCount(1, id)}>+</button>
        </div>
      </div>
    </div>
  );
};
