import { useSelector, useDispatch, connect } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/Redux";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement()); // {type: some unique indetiieres,payload :10}
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const toggeleCounter = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.main}>
      <h1 className={classes.header}>Redux Counter</h1>

      {show && <div className={classes.counter}>{counter}</div>}
      <div className={classes.button}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={toggeleCounter}>Toggle Counter</button>
      </div>
    </main>
  );
}

export default connect()(Counter);
