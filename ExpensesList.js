import React from "react";
import classes from "./ExpensesList.module.css";

const ExpensesList = (props) => {
  return (
    <React.Fragment>
      <ul className={classes.list}>
        {props.items.map((item) => (
          <li key={item.id}>
            <span>{item.amount}</span>
            <span>{item.description}</span>
            <span>{item.category}</span>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ExpensesList;
