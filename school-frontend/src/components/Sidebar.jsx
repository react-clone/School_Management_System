import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Sidebar() {
    const user = useSelector((state) => state.auth.user);

    console.log("USER FROM REDUX:", user);


    return (
        <div className="h-screen w-64 bg-black text-white fixed">
            <div className="p-6 text-2xl font-bold border-b border-blue-700">
                School MS
            </div>

            <nav className="p-4 space-y-4">
                <Link
                    to="/dashboard"
                    className="block font-semibold p-2 text-shadow-white hover:bg-gray-800 hover:border-white"
                >
                    Dashboard
                </Link>

                {user?.Role === "Teacher" && (
                    <>
                        <Link
                            to="/dashboard/attendance"
                            className="block font-semibold p-2 text-shadow-white hover:bg-gray-800 hover:border-white"
                        >
                            Attendance
                        </Link>

                        <Link
                            to="/dashboard/marks"
                            className="block font-semibold p-2 text-shadow-white hover:bg-gray-800 hover:border-white"
                        >
                            Marks
                        </Link>
                    </>
                )}

                {user?.Role === "Student" && (
                    <>
                        <Link
                            to="/dashboard/my-attendance"
                            className="block font-semibold p-2 text-shadow-white hover:bg-gray-800 hover:border-white"
                        >
                            My Attendance
                        </Link>

                        <Link
                            to="/dashboard/my-marks"
                            className="block font-semibold p-2 text-shadow-white hover:bg-gray-800 hover:border-white"
                        >
                            My Marks
                        </Link>
                    </>
                )}
            </nav>
        </div>
    );
}
