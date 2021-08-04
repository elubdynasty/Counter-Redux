import { useSelector, useDispatch } from "react-redux";
import { incCounter, decCounter } from "./store";

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const incHandler = () => {
    console.log("Incremented");

    dispatch(incCounter());
  };

  const decHandler = () => {
    console.log("Decremented");

    dispatch(decCounter());
  };

  return (
    <>
      <h2> Counter Component: {counter}</h2>
      <button onClick={incHandler}>Add</button>
      <button onClick={decHandler}>Subtract</button>
    </>
  );
};

export default Counter;
