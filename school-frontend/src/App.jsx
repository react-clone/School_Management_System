import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Public pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Layout
import DashboardLayout from "./layouts/DashboardLayout";

// Dashboard pages
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Marks from "./pages/Marks";
import MyAttendance from "./pages/MyAttendance";
import MyMarks from "./pages/MyMarks";

export default function App() {
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <Routes>

      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />


      <Route
        path="/dashboard"
        element={user ? <DashboardLayout /> : <Navigate to="/login" />}
      >
        <Route index element={<Dashboard />} />


        <Route path="attendance" element={<Attendance />} />
        <Route path="marks" element={<Marks />} />


        <Route path="my-attendance" element={<MyAttendance />} />
        <Route path="my-marks" element={<MyMarks />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
