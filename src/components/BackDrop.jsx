import React from "react";
import "./BackDrop.css";
import Cart from "./Cart";

const BackDrop = (props) => {
  return (
    <>
      {props.showCart && (
        <>
          <section className='backdrop' onClick={props.hideCartHandler} />
          <Cart hideCartHandler={props.hideCartHandler} />
        </>
      )}
    </>
  );
};

export default BackDrop;
