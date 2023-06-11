import React from "react";
import classes from "./Header.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

function HeaderCart() {
  const dispatch = useDispatch();

  const ToggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={ToggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}> 0</span>
    </button>
  );
}

export default HeaderCart;
