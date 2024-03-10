import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";

const fruits = [
  {
    id: 1,
    price: 2.5,
    name: "Apple",
    description: "A crisp and juicy fruit, commonly red or green in color.",
  },

  {
    id: 2,
    price: 1.75,
    name: "Banana",
    description: "A long curved fruit with a yellow skin and soft flesh.",
  },

  {
    id: 3,
    price: 3.2,
    name: "Orange",
    description:
      "A round citrus fruit with a bright orange skin and juicy segments.",
  },

  {
    id: 4,
    price: 4.0,
    name: "Grapes",
    description:
      "Small, sweet, and seedless fruits typically clustered in bunches.",
  },

  {
    id: 5,
    price: 2.8,
    name: "Strawberry",
    description:
      "A small, sweet, and juicy red fruit with tiny seeds on its surface.",
  },

  {
    id: 6,
    price: 1.9,
    name: "Kiwi",
    description:
      "A small oval fruit with brown fuzzy skin and green flesh with black seeds.",
  },
];

console.log(fruits);

const Cart = () => {
  return (
    <div className='cart-box'>
      <header>
        <h1>Your cart list</h1>
        <button>Close</button>
      </header>
      <div className='cart-list'>
        {fruits.map((fruit) => {
          return <CartItem fruit={fruit} key={fruit.id} />;
        })}
      </div>
      <div className='footer'>
        <p>
          Total Price <span>$ 35.65</span>
        </p>
        <button>Order Now</button>
      </div>
    </div>
  );
};

export default Cart;
