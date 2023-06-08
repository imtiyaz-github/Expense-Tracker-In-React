import React, { Fragment, useEffect, useRef } from "react";
import classes from "./AddExpenses.module.css";

const AddExpenses = (props) => {
  const inputPricRef = useRef();
  const inputDesRef = useRef();
  const inputCatRef = useRef();

  useEffect(() => {
    const fetchExpensedData = async () => {
      if (props.editingId) {
        const response = await fetch(
          `https://http-authentication1-default-rtdb.firebaseio.com/expense/${props.editingId.id}.json`
        );

        const data = await response.json();
        inputPricRef.current.value = data.amount;
        inputDesRef.current.value = data.description;
        inputCatRef.current.value = data.category;
      }
    };

    fetchExpensedData();
  }, [props.editingId]);

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredPrice = inputPricRef.current.value;
    const enteredDes = inputDesRef.current.value;
    const enteredCat = inputCatRef.current.value;

    const newExpense = {
      amount: enteredPrice,
      description: enteredDes,
      category: enteredCat,
    };

    props.onSaveData(newExpense);
    console.log(newExpense);

    const response = await fetch(
      "https://http-authentication1-default-rtdb.firebaseio.com/expense.json",
      {
        method: "POST",
        body: JSON.stringify(newExpense),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <Fragment>
      <div className={classes.expenses}>
        <form onSubmit={submitHandler}>
          <div className={classes.expenses1}>
            <label htmlFor="money">Money</label>
            <input type="number" id="money" ref={inputPricRef} />
          </div>
          <div className={classes.expenses2}>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" ref={inputDesRef} />
          </div>
          <div className={classes.expenses3}>
            <label htmlFor="category">Category</label>
            <select id="category" ref={inputCatRef}>
              <option value="food">Food</option>
              <option value="petrol">Petrol</option>
              <option value="salary">Salary</option>
            </select>
          </div>

          <button type="submit" className={classes.button}>
            Add Expenses
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddExpenses;
