"use client";
import React, { useState } from "react";
import { register } from "@/app/api/auth";

export default function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee");
  const [manager, setManager] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register({ username, password, role, manager });
    } catch (error) {
      console.error("Registration Failed", error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <div>
          <label>
            Role:{" "}
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="employee">Employee</option>
            </select>
          </label>
          {role === "employee" && (
            <label>
              Manager ID
              <input
                type="text"
                value={manager}
                onChange={(e) => setManager(e.target.value)}
              />
            </label>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
