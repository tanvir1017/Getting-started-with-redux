import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "./counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      {" "}
      <button onClick={() => dispatch(increment())}>+</button>
      <span>counter: {count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          increment By 10{" "}
        </button>
        <button onClick={() => dispatch(decrementByAmount(10))}>
          increment By 10{" "}
        </button>
      </div>
    </div>
  );
}
