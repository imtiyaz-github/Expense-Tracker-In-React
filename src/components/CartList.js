import React from "react";
import classes from './CartList.module.css'

function CartList() {
  return (
    <div className={classes.cart}>
      <div className={classes.CartList}>
        <h2>BUY YOUR FAVORITE PRODUCTS</h2>
      </div>
      <div className={classes.test}>
        <h4>Test</h4>
        <button className={classes.dollor}>$6.00</button>
      </div>
      <p>This is a First Product Amazing</p>
      <div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default CartList;
