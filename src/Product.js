import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price
      }
    });
  };

  const checkProductInfo = () => {
    dispatch({
      type: "CHECK_PRODUCT_INFO",
      item: {
        id: id,
        title: title,
        image: image,
        price: price
      }
    });
  };

  return (
    <div className="product">
      <Link
        to="/productInfo"
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="product__container" onClick={checkProductInfo}>
          <p className="product__describe">{title}</p>

          <p className="product__price">
            <small>$</small>
            <strong> {price}</strong>
          </p>
        </div>
      </Link>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}
 
export default Product;
