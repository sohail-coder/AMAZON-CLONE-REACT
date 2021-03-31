import React from "react";
import "./Checkout.css";
import SubTotal from "./SubTotal";
import { useStateValue } from "./StateProvider";
import CheckOutProduct from "./CheckOutProduct";
export default function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          classNme="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div className="checkout__title">
          <h2>Your Basket Items</h2>
        </div>
        <div className="checkoutproduct">
          {basket.map((item) => {
            return (
              <div key={item.id}>
                <CheckOutProduct {...item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}
