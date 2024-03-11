import React, { useContext } from "react";
import { itemContext } from "../store/itemContext";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { items, totalAmount } = useContext(itemContext);
  const totalPrice = `$ ${totalAmount.toFixed(2)}`;
  return (
    <div className='cart-box'>
      <header>
        <h1>Your cart items</h1>
        <button onClick={props.hideCartHandler}>Close</button>
      </header>
      <div className='cart-list'>
        {items.length === 0 ? (
          <p className='no-item'>No items in the cart</p>
        ) : (
          items.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })
        )}
      </div>
      <div className='footer'>
        <p>
          Total Price <span>{totalPrice}</span>
        </p>
        {items.length > 0 ? (
          <button>Order Now</button>
        ) : (
          <button onClick={props.hideCartHandler}>Save cart item first</button>
        )}
      </div>
    </div>
  );
};

export default Cart;
