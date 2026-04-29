"use client";

import { useState } from "react";

export default function Resources() {
  const [resources, setResources] = useState([]);
  const [input, setInput] = useState("");

  const add = () => {
    setResources([...resources, input]);
    setInput("");
  };

  return (
    <div>
      <h1>Resources</h1>

      <div className="card">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Resource name"
        />
        <button onClick={add}>Add</button>
      </div>

      {resources.map((r, i) => (
        <div key={i} className="card">{r}</div>
      ))}
    </div>
  );
}