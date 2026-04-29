"use client";

import Calendar from "react-calendar";
import { useState } from "react";

export default function CalendarPage() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h1> Calendar</h1>

      <div className="card">
        <Calendar onChange={setDate} value={date} />
        <p>Selected: {date.toDateString()}</p>
      </div>
    </div>
  );
}