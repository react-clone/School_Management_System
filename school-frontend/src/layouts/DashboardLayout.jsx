import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function DashboardLayout() {
    return (
        <div>
            <Sidebar />
            <Navbar />

            <main className="ml-64 mt-16 p-6 bg-gray-100 min-h-screen">
                <Outlet />
            </main>
        </div>
    );
}
