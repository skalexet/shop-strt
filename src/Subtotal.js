import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              {/* Part of the homework */}
              Итог: ({basket.length} товаров): <strong>{value} рублей</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> Какой-нибудь feature
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
      />

      <button>Оформить заказ</button>
    </div>
  );
}

export default Subtotal;
