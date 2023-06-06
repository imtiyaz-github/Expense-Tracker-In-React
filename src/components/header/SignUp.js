import React, { useContext, useState, Fragment } from "react";
import classes from "./SignUp.module.css";
import AuthContext from "../store/AuthContext";
import { useHistory } from "react-router-dom";

function Signup() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpass, setconfPass] = useState("");
  const history = useHistory();

  const ctx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const confpasswordChangeHandler = (e) => {
    setconfPass(e.target.value);
  };

  const resetpasswordHandler = () => {
    history.push("/resetpassword");
    console.log("fogetted password");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    //optional:add validation

    setIsLoading(true);
    let url;
    if (!isLogin && password !== conpass) {
      return alert("password is not same");
    } else {
      if (isLogin) {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCs1zdQMstoPmRG4AjfS4JwQfNMW7HsMBE";
      } else {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCs1zdQMstoPmRG4AjfS4JwQfNMW7HsMBE";
      }

      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          setIsLoading(false);
          const resp = res.json();
          resp.then((resp) => {
            console.log(resp);
            localStorage.setItem("idToken", resp.idToken);
          });
          if (res.ok) {
            console.log("Successfully signed up");
            ctx.login();
            history.replace("/welcomescreen");
          } else {
            return res.json().then((data) => {
              let errorMessage = "Authentication failed";

              console.log(errorMessage);
              alert("failed");
            });
          }
        })
        .then((data) => {
          console.log(data);
          alert("Successfully login");
        })
        .catch((err) => {
          console.log("aaa failed");
          alert(err.message);
        });
    }
  };

  return (
    <Fragment>
      <section className={classes.head}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              onChange={emailChangeHandler}
              value={email}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={passwordChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="phone">Confirm Password</label>
            <input
              type="password"
              required
              id="password"
              value={conpass}
              onChange={confpasswordChangeHandler}
            />
          </div>

          <div className={classes.actions}>
            {!isLoading && (
              <button>{isLogin ? "Login" : "Create Account"}</button>
            )}
            {isLoading && <p>Sending request..!</p>}


            <div>
              {isLogin && (
                <button type="submit" onClick={resetpasswordHandler}>
                  Forget Password?
                </button>
              )}
            </div>

            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
    </Fragment>
  );
}

export default Signup;
