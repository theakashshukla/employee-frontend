import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Register from "@/components/Register";
import TimesheetForm from "@/components/TimesheetForm";

export default function Home() {
  return (
    <main>
      <div>
        <Login/>
        <Register/>
        <Dashboard/>
      </div>
    </main>
  );
}
