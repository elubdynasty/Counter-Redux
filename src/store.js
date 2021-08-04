import { createStore } from "redux";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const initialState = { counter: 0 };

//new state, never mutate your current state

export const incCounter = () => {
  return {
    type: INCREASE
  };
};

export const decCounter = () => {
  return {
    type: DECREASE
  };
};

const counterReducer = (state = initialState, action) => {
  // will take state & action
  switch (action.type) {
    case INCREASE:
      return {
        counter: state.counter + 1
      };

    case DECREASE:
      return {
        counter: state.counter - 1
      };

    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
