import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggeleCounter = () => {};

  return (
    <main className={classes.main}>
      <h1 className={classes.header}>Redux Counter</h1>

      <div className={classes.counter}>{counter}</div>
      <div className={classes.button}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={toggeleCounter}>Toggle Counter</button>
      </div>
    </main>
  );
}

export default Counter;
