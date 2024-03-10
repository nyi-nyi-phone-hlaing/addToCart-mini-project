import React from "react";
import "./CartItem.css";

const CartItem = ({ fruit }) => {
  return (
    <div className='cart-item' key={fruit.id}>
      <h2>{fruit.name}</h2>
      <div className='row'>
        <p>
          Price: $ <span>{fruit.price}</span>
        </p>
        <div className='right'>
          <input type='number' min={1} max={10} />
        </div>
      </div>
      <p>{fruit.description}</p>
    </div>
  );
};

export default CartItem;
