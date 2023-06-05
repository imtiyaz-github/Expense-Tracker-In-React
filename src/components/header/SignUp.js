import React from "react";
import { useRef, useState } from "react";
import classes from "./SignUp.module.css";

function Signup() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmpasswordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmpasswordInputRef.current.value;

    //optional:add validation

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
        password: enteredPassword,
        confirmpassword: enteredConfirmPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed";
            // if(data && data.error && data.error.message){
            //     errorMessage=data.error.message
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        // AuthCtx.login(data.idToken);
        alert("Successfully login")
      })
      .catch((err) => {
        console.log("aaa failed");
        alert(err.message);
      });
  };

  return (
    <section className={classes.head}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
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
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Signup;
