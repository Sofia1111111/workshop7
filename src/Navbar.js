import React, { useContext, useEffect } from "react";
import { ProductContext } from "./ProductContext";
import { UserContext } from "./UserContext";

const Navbar = () => {
  const { cart, setShowCart } = useContext(ProductContext);
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(UserContext);
  useEffect(() => {
    if (!isUserLoggedIn) {
      setShowCart(false);
    }
  }, [isUserLoggedIn]);
  console.log("navbar rerendered");
  return (
    <div>
      {cart.length} products in cart
      <button onClick={() => setShowCart((prevState) => !prevState)}>
        show cart
      </button>
      <button
        onClick={() => {
          setIsUserLoggedIn((prevState) => {
            return !prevState;
          });
        }}
      >
        {isUserLoggedIn ? "logout" : "login"}
      </button>
    </div>
  );
};

export default Navbar;
