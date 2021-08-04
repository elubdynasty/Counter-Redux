import { createStore } from "redux";
const INCREASE = "INCREASE";
//const

const initialState = { counter: 0 };

//new state, never mutate your current state

const counterReducer = (state = initialState, action) => {
  // will take state & action
  switch (action.type) {
    case INCREASE:
      return {
        counter: state.counter + 1
      };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
