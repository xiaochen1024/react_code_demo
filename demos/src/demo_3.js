import React, { useState, useLayoutEffect } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    if (count === 1) {
      setCount(count + "useLayoutEffect");
    }
  }, [count]); //flushSyncCallbackQueue在concurrent mode下立即执行
  return (
    <div className="App">
      <header className="App-header">
        <p onClick={() => setCount(() => count + 1)}>
          <code title={count}>{count}</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}