import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import Basket from "./Basket";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2017/img/Home/XCM_1079385_Manual_1500x250_1079385_us_183_hallmark_1500x250_en_jpg_seasonal_decor._V513657060_.jpg"
          alt=""
        />

        <div>
          <h3>Wellcome  {user?.email}</h3>
          <h2 className="checkout__title">
            {basket.length == 0 ? "Ваша корзина пуста" : `Количество товаров в корзине: ${basket.length}`}
          </h2>

          {basket.map(item => (
            <Basket
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
