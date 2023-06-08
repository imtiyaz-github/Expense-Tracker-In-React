import React from "react";
import classes from "./ExpensesList.module.css";

const ExpensesList = (props) => {
  const deleteHandler = async (id) => {
    const response = await fetch(
      `https://http-authentication1-default-rtdb.firebaseio.com/expense${id}.json`,
      {
        method: "DELETE",
      }
    )
    const data = response;
    props.onDelete(id);
    console.log(data);
  };
  const editHandler = async (item) => {
    const response = await fetch(
      `https://http-authentication1-default-rtdb.firebaseio.com/expense${item.id}.json`
    );
    const data = await response.json();
    props.onEdit(item);
    console.log(data);
    deleteHandler(item.id);
  };

  return (
    <React.Fragment>
      <ul className={classes.list}>
        {props.items.map((item) => (
          <li key={item.id}>
            <span>{item.amount}</span>
            <span>{item.description}</span>
            <span>{item.category}</span>
            <div className={classes.div}>
              <button
                className={classes.delete}
                onClick={() => {
                  deleteHandler(item.id);
                }}
              >
                Delete
              </button>
              <button
                className={classes.edit}
                onClick={() => {
                  editHandler(item);
                }}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ExpensesList;
