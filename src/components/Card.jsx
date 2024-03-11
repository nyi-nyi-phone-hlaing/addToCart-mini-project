import React, { useState, useContext } from "react";
import { itemContext } from "../store/itemContext";
import "./Card.css";
const Card = ({ fruit }) => {
  const { addItem } = useContext(itemContext);
  const [currentAmount, setCurrentAmount] = useState(1);
  const currentAmountNumber = +currentAmount;
  const { id, price, name, description } = fruit;

  const addToCardHandler = () => {
    if (currentAmountNumber < 1 || currentAmountNumber > 10) {
      alert("Please enter a valid amount (1-10)");
      return;
    }
    addItem({
      id,
      name,
      price,
      amount: currentAmountNumber,
    });
  };

  return (
    <div className='card'>
      <h2>{name}</h2>
      <div className='row'>
        <p>
          Price: $ <span>{price}</span>
        </p>
        <div className='right'>
          <input
            type='number'
            min={1}
            max={10}
            value={currentAmount}
            onChange={(e) => {
              setCurrentAmount(e.target.value);
            }}
          />
          <button onClick={addToCardHandler}>+ Add</button>
        </div>
      </div>

      <p>{description}</p>
    </div>
  );
};

export default Card;
