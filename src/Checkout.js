import React, { useContext, useState } from "react";
import { ProductContext } from "./ProductContext";
import { UserContext } from "./UserContext";

const Checkout = () => {
  const { cart, showCart } = useContext(ProductContext);
  console.log("checkout rerender");
  return (
    <div>
      {showCart ? (
        cart.map((item) => <h1 key={item.id}>{item.name}</h1>)
      ) : (
        <h1>you can't see list</h1>
      )}
    </div>
  );
};

export default Checkout;
