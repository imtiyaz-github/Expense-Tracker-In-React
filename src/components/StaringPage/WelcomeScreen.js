import React, { useCallback, useEffect, useState } from "react";
import { useContext, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import classes from "./WelcomeScreen.module.css";
import ExpensesList from "./ExpensesList";
import AddExpenses from "./AddExpenses";

const WelcomeScreen = () => {
  const ctx = useContext(AuthContext);
  const history = useHistory();
  const [items, setItems] = useState([]);
  const [editingId, setEdit] = useState(null);

  
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
        }),
      }
    )
      .then(async (res) => {
        if (res.ok) {
          return res.json();
        } else {
          const data = await res.json();
          if (data.error.messsge) {
            alert(data.error.messsge);
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

  const saveExpenseDataHandler = (expense) => {
    setItems((prev) => [...prev, expense]);
  };

  const getExpense = useCallback(async () => {
    const response = await fetch(
      "https://http-authentication1-default-rtdb.firebaseio.com/expense.json"
    );

    const data = await response.json();

    console.log(data);

    const loadedExpenses = []

    for (const key in data) {
      loadedExpenses.push({
        id: key,
        amount: data[key].amount,
        description: data[key].description,
        category: data[key].category,
      });
    }
    setItems(loadedExpenses);
  }, []);

  useEffect(() => {
    getExpense();
  }, [getExpense]);

  const deleteHandler = (id) => {
    console.log("deleted", id);

    setItems((prev) => {
      const updatedExpense = prev.filter((item) => item.id !== id)
      return updatedExpense;
    })
  }

  const editHandler = (id) => {
    console.log(" recevide edited id", id);
    setEdit(id)
  }

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
      <AddExpenses
        onSaveData={saveExpenseDataHandler}
        editingId={editingId}
        items={items}
      />
      <ExpensesList
        items={items}
        onDelete={deleteHandler}
        onEdit={editHandler}
      />
    </Fragment>
  );
};

export default WelcomeScreen;
