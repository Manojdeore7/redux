import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { sliceActions } from "../strore/index";
const Counter = () => {
  let counter = useSelector((state) => state.counter);
  let show = useSelector((state) => state.show);
  let dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(sliceActions.toggle());
  };
  const onIncreamentHandler = () => {
    dispatch(sliceActions.increment());
  };
  const ondecreamentHandler = () => {
    dispatch(sliceActions.decrement());
  };
  const onIncreaseHandler = () => {
    dispatch(sliceActions.increase(5));
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
