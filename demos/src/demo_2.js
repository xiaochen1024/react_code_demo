import React, { useState, useEffect } from "react";
export default function App() {
  const [c, setC] = useState(0);
  useEffect(() => {
    console.log("useEffect");
  }, []);
  return (
    <div
      onClick={() => {
        setC(c + 1);
      }}
    >
      {c}
    </div>
  );
}
