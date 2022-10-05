import { createContext, useState } from "react";

export const ProductContext = createContext();
console.log(ProductContext);
export const ProviderForProductContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const addToCart = (product) => {
    setCart((prevState) => [...prevState, product]);
  };
  return (
    <ProductContext.Provider
      value={{ cart, setCart, addToCart, showCart, setShowCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};
