import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/Redux";
import classes from "./Auth.module.css";

function Auth() {
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <div className={classes.form}>
      <form action="" onSubmit={loginHandler}>
        <div>
          <label htmlFor="email">EMAIL</label>
          <input type="text" id="email" />
        </div>
        <div>
          <label htmlFor="password">PASSWORD</label>
          <input type="password" id="password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Auth;
