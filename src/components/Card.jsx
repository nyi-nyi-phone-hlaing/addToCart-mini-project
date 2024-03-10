import React from "react";
import "./Card.css";
const Card = ({ fruit }) => {
  const { price, name, description } = fruit;
  return (
    <div className='card'>
      <h2>{name}</h2>
      <div className='row'>
        <p>
          Price: $ <span>{price}</span>
        </p>
        <div className='right'>
          <input type='number' min={1} max={10} />
          <button>+ Add</button>
        </div>
      </div>

      <p>{description}</p>
    </div>
  );
};

export default Card;
