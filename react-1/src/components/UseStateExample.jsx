import React, { useState } from "react";

const UseStateExample = () => {
  let [count, setCount] = useState(0);
  return (
    <div>
          <h1 className="border text-6xl">Count: {count}</h1>
          <br />
          <button onClick={() => {
            //   you can't change it like this
              //   count++;
              setCount(count+=1)
              console.log(count)
          }} className="border px-6 py-2 rounded-2xl">Increse</button>
    </div>
  );
};

export default UseStateExample;
