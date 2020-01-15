import React, { useState, useEffect } from "react";
import axios from "axios";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");


  useEffect(() => {
    axios
      .get("http://worldclockapi.com/api/json/est/now")
      .then(response => {
        // console.log(response.data);
        setTime(response.data);
      });
  });

  return (
    <div>
      <h1>Counter</h1>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <form>
        <label>
          Your Name:
          <input type="text" onChange={e => setName(e.currentTarget.value)} />
        </label>
      </form>
      <p>Your Name is {name}</p>
      <p>The time is {time.currentDateTime}</p>
    </div>
  );
};

export default Counter;
