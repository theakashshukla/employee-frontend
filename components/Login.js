"use client";
import React, { useState } from "react";
import { login } from "@/app/api/auth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({
        username,
        password,
      });
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Error Logging in:", error);
    }
  };

  return (
    <div className="flex flex-col-2 bg-white w-[400px] text-black">
      <h1 className="text-black">Login Form</h1>
      <form onSubmit={handelSubmit}>
        <div>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-black"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
