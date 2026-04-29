"use client";

import { useState } from "react";

export default function Booking() {
  const [bookings, setBookings] = useState([]);
  const [input, setInput] = useState("");

  const addBooking = () => {
    if (!input) return;
    setBookings([...bookings, { name: input, status: "pending" }]);
    setInput("");
  };

  return (
    <div>
      <h1>Booking</h1>

      <div className="card">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Booking name"
        />
        <button onClick={addBooking}>Add</button>
      </div>

      {bookings.map((b, i) => (
        <div key={i} className="card">
          {b.name} - {b.status}
        </div>
      ))}
    </div>
  );
}