import React from "react";
import classes from "./Cart.module.css";

function Cart() {
  return (
    <div className={classes.cart}>
      <h1>Your Shopping Cart</h1>
      <div>
        <div className={classes.test}>
          <h2>Test Item </h2>
          <h3>
            $18.00 <span>($6.00/item)</span>
          </h3>
          <button className={classes.increase}>+</button>
          <button className={classes.decrease}>-</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
