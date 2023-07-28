import { useState } from "react";
import "./AddProducts.css";
function AddProducts(props) {
  const [productId, setProductId] = useState();
  const [sellingPrice, setSellingPrice] = useState();
  const [productName, setProductName] = useState();

  function productIdHandler(e) {
    setProductId(e.target.value);
  }
  function SellingPriceHandler(e) {
    setSellingPrice(e.target.value);
  }
  function ProductNameHandler(e) {
    setProductName(e.target.value);
  }
  function AddUserHandler(e) {
    e.preventDefault();
    const obj = {
      id: productId,
      price: sellingPrice,
      name: productName,
    };

    props.onAddProduct(obj);
    setProductId("")
    setSellingPrice("")
    setProductName("")
  }
  return (
    <div>
      <form onSubmit={AddUserHandler}>
        <div className="form-control">
          <label> Product ID</label>
          <input onChange={productIdHandler} type="text" value={productId} />
          <label> Selling Price</label>
          <input
            onChange={SellingPriceHandler}
            type="number"
            value={sellingPrice}
          />
          <label> Product Name</label>
          <input
            onChange={ProductNameHandler}
            type="text"
            value={productName}
          />
        </div>
        <button className="button" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}
export default AddProducts;
