import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Checkout from "./Checkout";
import Validation from "./MyComp";
import Navbar from "./Navbar";
import { ProviderForProductContext } from "./ProductContext";
import ProductList from "./ProductList";
import { UserContextProvider } from "./UserContext";
export const instance = axios.create({
  baseURL: "http://localhost:3001/users",
});
const App = () => {
  return (
    <div>
      <ProviderForProductContext>
        <UserContextProvider>
          <Navbar />
          <ProductList />
        </UserContextProvider>
        <Checkout />
      </ProviderForProductContext>
    </div>
  );
};

export default App;
