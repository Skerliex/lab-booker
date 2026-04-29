"use client";

import { useState } from "react";

export default function Admin() {
  const [requests, setRequests] = useState([
    { name: "Lab A", status: "pending" },
    { name: "Lab B", status: "pending" }
  ]);

  const updateStatus = (index, status) => {
    const updated = [...requests];
    updated[index].status = status;
    setRequests(updated);
  };

  return (
    <div>
      <h1>🛠 Admin Panel</h1>

      {requests.map((r, i) => (
        <div key={i} className="card">
          {r.name} - {r.status}
          <button onClick={() => updateStatus(i, "approved")}>Approve</button>
          <button onClick={() => updateStatus(i, "rejected")}>Reject</button>
        </div>
      ))}
    </div>
  );
}