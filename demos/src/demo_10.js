import React, { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <p onClick={() => setCount(() => count + 1)}>
        <h1 title={count}>{count}</h1> and save to reload.
      </p>
    </div>
  );
}