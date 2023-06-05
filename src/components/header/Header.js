import React from "react";
import classes from "./Header.module.css";
import { useContext,Fragment,Link } from "react";
import AuthContext from "../store/AuthContext";

function Header() {
  const ctx = useContext(AuthContext);

  const url =
    "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCs1zdQMstoPmRG4AjfS4JwQfNMW7HsMBE";

  const verifyEmailHandler = (e) => {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        requestType: "VERIFY_EMAIL",
        idToken: localStorage.getItem("idToken"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        const data = res.json();
        data.then((resp) => {
          console.log(resp);
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <Fragment>
      <div className={classes.main}>
        <div className={classes.left}>Welcome to expance tracker!!!!</div>
        <div className={classes.right}>
          Your profile is incomplete.
          <Link to="/completeprofile">Complete now</Link>
        </div>
      </div>
      <button
        type="submit"
        onClick={verifyEmailHandler}
        className={classes.verifyEmail}
      >
        Verify Email
      </button>
      <button className={classes.logout} onClick={() => ctx.logout()}>
        logout
      </button>
    </Fragment>
  );
}

export default Header;
