import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  let counter = useSelector((state) => state.counter);
  let dispatch = useDispatch();
  const toggleCounterHandler = () => {};
  const onIncreamentHandler = () => {
    dispatch({ type: "increment" });
  };
  const ondecreamentHandler = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={onIncreamentHandler}>increment</button>
        <button onClick={ondecreamentHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
