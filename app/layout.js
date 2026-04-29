import "./globals.css";
import "react-calendar/dist/Calendar.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="layout">
          <aside className="sidebar">
            <h2>Lab Booker</h2>
            <a href="/dashboard">Dashboard</a>
            <a href="/booking">Booking</a>
            <a href="/calendar">Calendar</a>
            <a href="/resources">Resources</a>
            <a href="/admin">Admin</a>
            <a href="/analytics">Analytics</a>
          </aside>

          <main className="content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}