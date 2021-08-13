import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index";

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <h2>{count}</h2>
    </div>
  );
}

export default App;
