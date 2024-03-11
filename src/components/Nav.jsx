import { useContext } from "react";
import { itemContext } from "../store/itemContext";
import "./Nav.css";
const Nav = (props) => {
  const { items } = useContext(itemContext);
  const totatCart = items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);
  return (
    <nav className='nav-bar'>
      <h1>Shoppy.io</h1>
      <button onClick={props.showCartHandler}>
        Cart <span>( {totatCart} )</span>
      </button>
    </nav>
  );
};

export default Nav;
