import Header from "./components/Header";
import { useSelector } from "react-redux";
import CartList from "./components/CartList";
// import HeaderCart from "./components/HeaderCart";
import Cart from "./components/Cart";
import { Fragment } from "react";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <Fragment>
      <Header />
      {showCart && <Cart />}
      <CartList/>
    </Fragment>
  );
}

export default App;
