import React, { useState } from "react";
import HookMouse from "./HookMouse";

export default function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <h2>useEffect Hook</h2>
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Toggle Display
      </button>
      {display && <HookMouse />}
    </div>
  );
}
