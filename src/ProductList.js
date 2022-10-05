import React, { useContext, useState } from "react";
import { ProductContext } from "./ProductContext";
import { UserContext } from "./UserContext";

const ProductList = ({ setCartItems }) => {
  const [products] = useState([
    { id: 1, name: "hi" },
    { id: 2, name: "hello" },
  ]);
  const {} = useContext(ProductContext);
  console.log("product list rerendered");
  return (
    <div>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            setCartItems={setCartItems}
            product={product}
          />
        );
      })}
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(ProductContext);
  const { isUserLoggedIn } = useContext(UserContext);
  const { name } = product;
  console.log("product card rerendered");
  return (
    <div>
      <h1>{name}</h1>
      {isUserLoggedIn && (
        <button onClick={() => addToCart(product)}>add to cart</button>
      )}
    </div>
  );
};

export default ProductList;
