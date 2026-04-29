"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Lab Booker Dashboard</h1>

      <nav>
        <Link href="/booking">Booking</Link> |{" "}
        <Link href="/calendar">Calendar</Link> |{" "}
        <Link href="/resources">Resources</Link> |{" "}
        <Link href="/admin">Admin</Link> |{" "}
        <Link href="/analytics">Analytics</Link>
      </nav>

      <h3>KPI Overview</h3>
      <p>Total Bookings: 24</p>
      <p>Approved: 18</p>
      <p>Pending: 6</p>
    </div>
  );
}