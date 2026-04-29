"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const login = () => {
    if (email) router.push("/dashboard");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>
      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={login}>Login</button>
    </div>
  );
}