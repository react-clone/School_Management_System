import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../layouts/DashboardLayout";

const Attendance = () => {
    const [attendance, setAttendance] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAttendance();
    }, []);

    const fetchAttendance = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/data/attendance");
            console.log("ATTENDANCE DATA:", res.data);
            setAttendance(res.data);
        } catch (error) {
            console.error("Attendance fetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <h2 className="text-xl font-bold mb-4">📋 Attendance</h2>

            {loading ? (
                <p>Loading attendance...</p>
            ) : (
                <table className="w-full bg-white border">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-2">#</th>
                            <th className="p-2">Student Name</th>
                            <th className="p-2">Date</th>
                            <th className="p-2">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {attendance.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="p-4 text-center">
                                    No attendance found
                                </td>
                            </tr>
                        ) : (
                            attendance.map((a, index) => (
                                <tr key={a.AttendanceId} className="border-t">
                                    <td className="p-2">{index + 1}</td>
                                    <td className="p-2">{a.StudentName}</td>
                                    <td className="p-2">
                                        {new Date(a.CreatedAt).toLocaleDateString()}
                                    </td>
                                    <td className="p-2">{a.Status}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default Attendance;
