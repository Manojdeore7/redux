import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { sliceCounterActions } from "../strore/Counter";
const Counter = () => {
  let counter = useSelector((state) => state.counter.counter);
  let show = useSelector((state) => state.counter.show);
  let dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(sliceCounterActions.toggle());
  };
  const onIncreamentHandler = () => {
    dispatch(sliceCounterActions.increment());
  };
  const ondecreamentHandler = () => {
    dispatch(sliceCounterActions.decrement());
  };
  const onIncreaseHandler = () => {
    dispatch(sliceCounterActions.increase(5));
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
