import "./Counter.css";
import { useState } from "react";

function Counter() {
  const [state, setState] = useState(0);
  const [count, setCount] = useState(1);

  console.log("Re-rendering");

  const increaseCount = () => {
    setState((prevState) => prevState + 3);
    setCount((prevCount) => prevCount + 1); // Use count here
  };

  return (
    <div className="counter">
      <h2>Counter App in React </h2>
      <p>State Value is : {state}</p>
      <p>Count Value is : {count}</p> {/* Display count */}
      <button onClick={increaseCount}>incCount</button>
    </div>
  );
}

export default Counter;
