"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const login = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      router.push("/");
      router.refresh();
      toast.success("Login successful");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-[500px]">
        <div className="flex flex-col items-center gap-5 bg-secondary w-[400px] p-20 rounded-2xl ">
          <h1 className="text-primary text-4xl font-bold ">LogIn</h1>
          <input
            className="input "
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <input
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <button className="btn btn-primary" onClick={login}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}
