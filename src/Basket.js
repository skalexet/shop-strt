import React from "react";
import "./Basket.css";
import { useStateValue } from "./StateProvider";

function Basket({ id, image, title, price, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
  };

  return (
    <div className="basket">
      <img className="basket__image" src={image} />

      <div className="basket__info">
        <p className="basket__title">{title}</p>
        <p className="basket__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        {!hideButton && (
          <button onClick={removeFromBasket}>Delete from basket</button>
        )}
      </div>
    </div>
  );
}

export default Basket;
