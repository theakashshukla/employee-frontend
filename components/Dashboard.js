"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import { signOut, useSession } from "next-auth/react";

export default function Dashboard() {
  // const { data: session } = useSession();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/user");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user Data:", error);
      }
    };
    fetchUserData();
  }, []);

  const handleRating = async (timesheetId, rating) => {
    try {
      await axois.post("/api/timesheet/rate/${timesheetId}", { rating });
      fetchUserData();
    } catch (error) {
      console.error("Error adding rating:", error);
    }
  };

  const handleLogout = async () => {
    await signOut();
  };

  if (!userData) {
    return <div>Loading.....</div>;
  }
  return (
    <div>
      <h1>Welcome, {userData.username}</h1>
      <p>Welcome, {userData.name}</p>
      <h2>Timesheets:</h2>
      <ul>
        {userData.timesheets.map((timesheet) => (
          <li key={timesheet.id}>
            Date:{timesheet.dayDate}, Hours: {timesheet.hours}, Rating:
            {timesheet.rating || "Not Rated"}
            {userRole === "manager" && !timesheet.locked && (
              <div>
                <label htmlFor={`rating-${timesheet.id}`}>Rate Employee</label>
                <select
                  id={`rating-${timesheet.id}`}
                  onChange={(e) => handleRating(timesheet.id, e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="6">5</option>
                </select>
              </div>
            )}
          </li>
        ))}
      </ul>
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
}
