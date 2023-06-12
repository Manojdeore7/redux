import { createStore } from "redux";
let initialState = {
  counter: 0,
  show: true,
};
let counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      show: state.show,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      show: state.show,
    };
  }
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      show: !state.show,
    };
  }
  if (action.type === "increase") {
    return {
      show: state.show,
      counter: state.counter + action.amount,
    };
  }
  return state;
};
let store = createStore(counterReducer);
export default store;
