import Header from "./Header";
import Body from "./Body";
import BackDrop from "../components/BackDrop";
import { useState } from "react";

const Main = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <>
      <Header showCartHandler={showCartHandler} />
      <Body />
      <BackDrop showCart={showCart} hideCartHandler={hideCartHandler} />
    </>
  );
};

export default Main;
