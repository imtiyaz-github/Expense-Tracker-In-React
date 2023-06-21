import { useSelector } from "react-redux";

import Cart from "./components/Cart";
import Products from "./components/Products";
import Layout from "./components/Layout";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
