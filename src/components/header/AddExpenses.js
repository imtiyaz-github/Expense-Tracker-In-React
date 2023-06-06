// import React, { Fragment, useRef } from "react";
// import classes from "./AddExpenses.module.css";
// // import { useHistory } from "react-router-dom";

// const AddExpenses = (props) => {
//   const inputPriceRef = useRef();
//   const inputDesRef = useRef();
//   const inputCatRef = useRef();

//   const submitHandler = (e) => {
//     e.preventDefault();

//     const enteredPrice = inputPriceRef.current.value;
//     const enteredDesc = inputDesRef.current.value;
//     const enteredCat = inputCatRef.current.value;

//     const obj = {
//       price: enteredPrice,
//       description: enteredDesc,
//       category: enteredCat,
//     };
//     props.onSaveData(obj);
//     console.log(obj);
//   };

//   return (
//     <Fragment>
//       <div className={classes.expenses}>
//         <form action="" onSubmit={submitHandler}>
//           <div className={classes.expenses1}>
//             <label htmlFor="money">Amount:</label>
//             <input type="number" id="money" required ref={inputPriceRef} />
//           </div>
//           <div className={classes.expenses2}>
//             <label htmlFor="description">Description:</label>
//             <input type="text" id="description" required ref={inputDesRef} />
//           </div>
//           <div className={classes.expenses3}>
//             <select name="" id="category" ref={inputCatRef}>
//               <option value="food">Food</option>
//               <option value="petrol">Petrol</option>
//               <option value="salary">Salary</option>
//             </select>
//           </div>
//           <button className={classes.button}>Add Expenses</button>
//         </form>

//        {expenses}
//             <h1>Expenses List</h1>
//             <ul className={classes.list}>
//           {props.items.map((item) => (
//             <li>
//               <span>{item.amount}</span>
//               <span>{item.description}</span>
//               <span>{item.category}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </Fragment>
//   );
// };

// export default AddExpenses;

import React, { useState } from "react";
import classes from "./AddExpenses.module.css";
import { useHistory } from "react-router-dom";

function AddExpenses() {
  const [money, setMoney] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("food");
  const [expensesList, setExpensesList] = useState([]);

  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    const newExpense = {
      money: money,
      description: description,
      category: category,
    };

    // Update the expenses list with the new expense entry
    setExpensesList((prevExpensesList) => [...prevExpensesList, newExpense]);

    // Reset the form fields after submission
    setMoney("");
    setDescription("");
    setCategory("food");

    // Redirect to the desired route
    history.replace("/");
  };

    const moneyChangeHandler = (event) => {
      setMoney(event.target.value);
    };

    const descriptionChangeHandler = (event) => {
      setDescription(event.target.value);
    };

    const categoryChangeHandler = (event) => {
      setCategory(event.target.value);
    };

  return (
    <div className={classes.expenses}>
      <form onSubmit={submitHandler}>
        <div className={classes.expenses1}>
          <label htmlFor="money">Money:</label>
          <input
            type="number"
            id="money"
            value={money}
            onChange={moneyChangeHandler}
          />
        </div>
        <div className={classes.expenses2}>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className={classes.expenses3}>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={categoryChangeHandler}
          >
            <option value="food">Food</option>
            <option value="petrol">Petrol</option>
            <option value="salary">Salary</option>
          </select>
        </div>
        <button type="submit" className={classes.button}>
          Add Expenses
        </button>
      </form>

      {expensesList.length > 0 && (
        <div className={classes.expensesList}>
          <h2>Expenses List</h2>
          <ul>
            {expensesList.map((expense, index) => (
              <li key={index}>
                <strong>Money:</strong> {expense.money},
                <strong> Description:</strong> {expense.description},
                <strong> Category:</strong> {expense.category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AddExpenses;
