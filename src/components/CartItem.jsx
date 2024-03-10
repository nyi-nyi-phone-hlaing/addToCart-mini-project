import React from "react";
import "./CartItem.css";

const CartItem = ({ fruit }) => {
  return (
    <div className='cart-item' key={fruit.id}>
      <h2>{fruit.name}</h2>
      <p className='price'>
        Price: $ <span>{fruit.price}</span>
      </p>
      <div className='row'>
        <button className='decrese'>-</button>
        <input type='number' min={1} max={10} />
        <button className='increse'>+</button>
      </div>
    </div>
  );
};

export default CartItem;
