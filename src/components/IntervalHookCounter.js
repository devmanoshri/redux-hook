import React, { useEffect, useState } from "react";

export default function IntervalHookCounter() {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return (
    <div>
      <h2>useEffect Hook - incorrect dependency</h2>
      {count}
    </div>
  );
}
