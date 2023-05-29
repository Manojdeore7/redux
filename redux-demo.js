const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 2,
  };
};
let store = redux.createStore(counterReducer);
console.log(store.getState());
const counterSubscriber = () => {
  let latestState = store.getState();

  console.log(latestState);
};

store.dispatch({ type: "increament" });
store.dispatch({ type: "increament" });
store.subscribe(counterSubscriber);
store.subscribe(counterSubscriber);
store.dispatch({ type: "increament" });
