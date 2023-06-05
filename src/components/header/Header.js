import React from "react";

import classes from "./Header.module.css";

function Header() {
  return (
    <>
      <nav className={classes.navbar}>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About Us</li>
        </ul>
      </nav>
    </>
  );
}

export default Header;