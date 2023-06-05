import React from "react";
import { useRef, useState } from "react";
import classes from "./Signup.module.css";

function Signup() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmpasswordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmpasswordInputRef.current.value;

    setIsLoading(true);
    let url;

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
        email: enteredEmail,
        pasword: enteredPassword,
        confirmpassword: enteredConfirmPassword,
      }),
      headers: {
        "Content-type": "appliction/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Something Went Wrong");
      }
    });
    alert("Succefull Login");
  };

  return (
    <>
      <section className={classes.head}>
        <h1>{!isLogin ? "Login" : "Sign Up"}</h1>
        <form action="" onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter your name"
              ref={emailInputRef}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              ref={passwordInputRef}
              required
              id="password"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="phone">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              ref={confirmpasswordInputRef}
              required
              id="password"
            />
          </div>

          <div className={classes.actions}>
            {!isLoading && (
              <button>{isLogin ? "Login" : "Create Account"}</button>
            )}
            {isLoading && <p>Sending request..!</p>}
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Signup;
