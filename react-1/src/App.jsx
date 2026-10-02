import { useState } from "react";
import "./App.css";
const App = () => {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h1>count is {count}</h1>
      <h1>this will remain the same</h1>
      <button onClick={
        
        () => {
        setCount(++count)
        }
      
      
      }>increse</button>
    </div>
  );
};

export default App;
