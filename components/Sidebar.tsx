import Link from "next/link";

export default function Sidebar() {
  return (
    <div>
      <Link href="/dashboard">Dashboard</Link><br/>
      <Link href="/booking">Booking</Link><br/>
      <Link href="/resources">Resources</Link><br/>
      <Link href="/admin">Admin</Link>
    </div>
  );
}