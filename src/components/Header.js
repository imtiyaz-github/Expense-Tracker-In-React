import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/Redux";
import classes from './Header.module.css';

function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/"> My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>{" "}
            </li>
          </ul>
          <button onClick={logoutHandler}>Logout</button>
        </nav>
      )}
    </header>
  );
}

export default Header;
