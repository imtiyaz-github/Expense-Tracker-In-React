import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import Notification from "./UI/Notification";

import Cart from "./components/Cart";
import Products from "./components/Products";
import Layout from "./components/Layout";
import { uiActions } from "./store/ui-slice";

let isIntial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  const dispatch = useDispatch();
  useEffect(() => {
    const sendCardData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "Pending",
          title: "Sending",
          message: "Sending cart data!",
        })
      );
      const response = await fetch(
        "https://htttp-demo-67a41-default-rtdb.firebaseio.com/redux.json",
        {
          method: "POST",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error...!",
            message: "Sending cart data failed!",
          })
        );
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success...!",
          message: "Sent cart data successfully!",
        })
      );
    };
    if (isIntial) {
      isIntial = false;
      return;
    }
    sendCardData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
