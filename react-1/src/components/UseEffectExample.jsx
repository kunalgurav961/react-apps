import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
    // useEffect(function, dependancyArray)
    

      let [count, setCount] = useState(0);
    let [name, setName] = useState("Kunal");

  useEffect(function () {
    console.log("Hey I am UseEffect...");
  }, [count, name]);

    return (
        <div>
            <h1>useEffectExample</h1>
        <h1 className="border text-6xl">Count: {count}</h1>
        <br />
        <button
          onClick={() => {
            //   you can't change it like this
            //   count++;
            setCount((count += 1));
            console.log(count);
          }}
          className="border px-6 py-2 rounded-2xl"
        >
          Increse
            </button>
            <br />
            <br />
            <h1>Name: {name}</h1>
            <input className="border rounded-2xl px-2" onChange={(e) => {
                setName(e.target.value)
          }} type="text"  />
      </div>
    );
};

export default UseEffectExample;
