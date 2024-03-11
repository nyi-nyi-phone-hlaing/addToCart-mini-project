import React, { useContext } from "react";
import "./CartItem.css";
import { itemContext } from "../store/itemContext";

const CartItem = ({ item }) => {
  const { addItem, removeItem } = useContext(itemContext);
  const increseItemHandler = () => {
    addItem({ ...item, amount: 1 });
  };
  const decreseItemHandler = () => {
    removeItem(item.id);
  };
  return (
    <div className='cart-item' key={item.id}>
      <h2>{item.name}</h2>
      <p className='price'>
        Price: $ <span>{item.price}</span>
      </p>
      <div className='row'>
        <button className='decrese' onClick={decreseItemHandler}>
          -
        </button>
        <p className='quantity'>{item.amount}</p>
        <button className='increse' onClick={increseItemHandler}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
