import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      {" "}
      <button onClick={() => dispatch(increment())}>+</button>
      <span>counter: {count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
