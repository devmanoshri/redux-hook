import React, { useState } from "react";

function UseStateHook() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState({ firstName: "", secondName: "" });
  return (
    <div>
      <h2>useState Hook Practice</h2>
      <div>
        <h3>useState Hook with array</h3>
        <button
          onClick={() =>
            setItems([
              ...items,
              { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
            ])
          }
        >
          Add Item
        </button>
        <div>
          <ul>
            {items.map((item) => (
              <li key={item.id}>{item.value}</li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <div>
        <h3>useState Hook with Object</h3>
        <form>
          <input
            placeholder="Enter your first name"
            type="text"
            value={name.firstName}
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
          />
          <input
            placeholder="Enter your last name"
            type="text"
            value={name.lastName}
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
          />
          <h4>Your first name is - {name.firstName}</h4>
          <h4>Your last name is - {name.lastName}</h4>
          <h4>{JSON.stringify(name)}</h4>
        </form>
      </div>
    </div>
  );
}

export default UseStateHook;
