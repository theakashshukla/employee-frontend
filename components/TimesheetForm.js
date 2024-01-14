"use client";
import React, { useState } from "react";
import { submitTimeSheet } from "@/app/api/timesheet";

export default function TimesheetForm() {
  const [dayDate, setDayDate] = useState("");
  const [hours, setHours] = useState("");
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [performanceRemark, setPerformanceRemark] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitTimeSheet({
        dayDate,
        hours,
        projectName,
        description,
        performanceRemark,
      });
      setDayDate("");
      setHours("");
      setProjectName("");
      setDescription("");
      setPerformanceRemark("");
    } catch (error) {
      console.error("Error Submitting timesheet:", error);
    }
  };

  return (
    <div>
      <h1>Timesheet Form</h1>
      <form onSubmit={handelSubmit}>
        <div>
          <label htmlFor="dayDate">Day Date</label>
          <input
            type="date"
            id="dayDate"
            value={dayDate}
            onChange={(e) => setDayDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="hours">Hours</label>
          <input
            type="number"
            id="hours"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="performanceRemark">Performance Remark</label>
          <textarea
            id="performanceRemark("
            value={performanceRemark}
            onChange={(e) => setPerformanceRemark(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
