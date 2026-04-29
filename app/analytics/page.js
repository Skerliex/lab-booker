"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const data = [
  { week: "W1", bookings: 5 },
  { week: "W2", bookings: 10 },
  { week: "W3", bookings: 7 },
  { week: "W4", bookings: 15 }
];

export default function Analytics() {
  return (
    <div>
      <h1>Analytics</h1>

      <div className="card">
        <LineChart width={400} height={300} data={data}>
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Line dataKey="bookings" />
        </LineChart>
      </div>
    </div>
  );
}