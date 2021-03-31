import React from "react";
import CurrencyFormat from "react-currency-format";
import "./SubTotal.css";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({`${basket.length} items`}): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <Checkbox
                id="isGift"
                color="primary"
                inputProps={{ "aria-label": "uncontrolled-checkbox" }}
              />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Link to="#">
        <button className="button">Proceed to Checkout</button>
      </Link>
    </div>
  );
}

export default SubTotal;
