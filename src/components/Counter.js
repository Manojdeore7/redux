import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  let counter = useSelector((state) => state.counter);
  let show = useSelector((state) => state.show);
  let dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };
  const onIncreamentHandler = () => {
    dispatch({ type: "increment" });
  };
  const ondecreamentHandler = () => {
    dispatch({ type: "decrement" });
  };
  const onIncreaseHandler = () => {
    dispatch({ type: "increase", amount: 10 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={onIncreamentHandler}>increment</button>
        <button onClick={onIncreaseHandler}>Increase By</button>
        <button onClick={ondecreamentHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
