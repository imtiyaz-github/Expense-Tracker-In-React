import React from "react";
import HeaderCart from "./HeaderCart";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <HeaderCart/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
