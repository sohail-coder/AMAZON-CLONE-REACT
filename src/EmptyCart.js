import React from "react";
import "./EmptyCart.css";
function EmptyCart() {
  return (
    <div className="emptycart">
      {/* <div className="logo">
        <img
          className="emptycart__image"
          src="D:\amazon-challenge\src\cart.png"
          alt="nothing"
        />
      </div> */}
      <h2>No Items Found In Your Cart</h2>
    </div>
  );
}

export default EmptyCart;
