import "./ShowProducts.css";
function ShowProducts(props) {
    function deleteProductHandler(e){
        props.onDeleteProduct(e.target.value)
    }
  return (
    <div className="big-div">
      {props.products.map((item, index) => (
        <div key={index}>
          <ul className="goal-list">
            <li className="goal-item">
                Product Name is <b>{item.name}</b> Of Rs. <b>{item.price}</b>
                {" "}
              <button value={item.id} className="button" onClick={deleteProductHandler}>Delete</button>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
export default ShowProducts;
