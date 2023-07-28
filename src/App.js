import React, { useEffect, useState } from "react";
import "./App.css";
import AddProducts from "./components/AddProducts/AddProducts";
import ShowProducts from "./components/ShowProducts/ShowProducts";

function App() {
  const [products, setProducts] = useState([]);
  const [localStorageLength,setLocalStorageLength]=useState(localStorage.length)

  useEffect(() => {
    const allProducts = [];
    for (var i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      const parsed=JSON.parse(value)
      allProducts[i] = parsed;
    }
    setProducts(allProducts);
  }, [localStorageLength]);

  function onAddProductHandler(product) {
    const obj = JSON.stringify(product);
    localStorage.setItem(product.id, obj);
    setLocalStorageLength(localStorageLength+1)
  }
  function onDeleteProductHandler(id){
    localStorage.removeItem(id)
    setLocalStorageLength(localStorageLength-1)

  }
  return (
    <React.Fragment>
      <section id="goal-form">
        <AddProducts onAddProduct={onAddProductHandler}></AddProducts>
      </section>
      <section id="goals">
        <ShowProducts onDeleteProduct={onDeleteProductHandler} products={products}></ShowProducts>
      </section>
    </React.Fragment>
  );
}

export default App;
