import { getBasketTotal } from "./Reducer";
import { useStateValue } from "./Stateprovider";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import React from "react";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const Nav = useNavigate();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => Nav("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
