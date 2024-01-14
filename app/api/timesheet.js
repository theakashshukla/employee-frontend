import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8000/timesheet",
});

export const submitTimeSheet = async (timesheetData) => {
    try {
      const response = await api.post("/submit", timesheetData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };