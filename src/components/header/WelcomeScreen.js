import React from "react";
import { useContext, Fragment } from "react";
import { Link, useHistory} from "react-router-dom";
import AuthContext from "../store/AuthContext";
import classes from "./SignUp.module.css";

const WelcomeScreen = () => {
  const ctx = useContext(AuthContext);
  const history = useHistory();

  const verifyEmailHandler = () => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCs1zdQMstoPmRG4AjfS4JwQfNMW7HsMBE",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: ctx.token,
          // idToken: localStorage.getItem("idToken"),
        }),
      }
    )
      .then(async (res) => {
        if (res.ok) {
          return res.json();
        } else {
          const data = await res.json();
          console.log(data);
          if (data.error.message) {
            alert(data.error.message);
          }
        }
      })
      .then((data) => {
        console.log("recevied data", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logoutHandler = () => {
    ctx.logout();
    history.replace("/");
  };

  return (
    <Fragment>
      <div className={classes.main}>
        <div className={classes.left}>Welcome to expance tracker!!!!</div>
        <div className={classes.right}>
          Your profile is incomplete.
          <Link to="/welcomescreen/profile">Complete now</Link>
        </div>
      </div>
      <button
        type="submit"
        onClick={verifyEmailHandler}
        className={classes.verifyEmail}
      >
        Verify Email
      </button>
      <button className={classes.logout} onClick={logoutHandler}>
        Logout
      </button>
    </Fragment>
  );
};

export default WelcomeScreen;
