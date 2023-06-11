import React from "react";
import HeaderCart from "./HeaderCart";

function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <HeaderCart />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
