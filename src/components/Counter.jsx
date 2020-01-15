import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    // document.title = `You clicked ${count} times.`;
    // console.log(state)
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
    </div>
  );
};

export default Counter;
