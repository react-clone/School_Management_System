import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Marks() {
    const user = useSelector(state => state.auth.user);
    const [marksList, setMarksList] = useState([]);
    const [form, setForm] = useState({
        studentId: "",
        subject: "",
        marks: ""
    });


    const fetchMarks = async () => {
        const res = await axios.get("http://localhost:5000/api/data/marks");
        setMarksList(res.data);
    };

    useEffect(() => {
        fetchMarks();
    }, []);


    const submitMarks = async () => {
        console.log("SAVE CLICKED", form, user.UserId);

        try {
            await axios.post("http://localhost:5000/api/data/marks", {
                studentId: Number(form.studentId),
                subject: form.subject,
                marks: Number(form.marks),
                teacherId: user.UserId
            });

            alert("Marks added");
            fetchMarks();
        } catch (err) {
            console.error("SAVE ERROR:", err.response?.data || err.message);
        }
    };


    return (
        <div className="bg-white p-6 rounded shadow space-y-6">

            <div>
                <h1 className="text-xl font-bold mb-3">Add Marks</h1>

                <input placeholder="Student ID"
                    className="border p-2 mr-2"
                    onChange={e => setForm({ ...form, studentId: e.target.value })} />

                <input placeholder="Subject"
                    className="border p-2 mr-2"
                    onChange={e => setForm({ ...form, subject: e.target.value })} />

                <input placeholder="Marks"
                    className="border p-2 mr-2"
                    onChange={e => setForm({ ...form, marks: e.target.value })} />

                <button
                    onClick={submitMarks}
                    className="bg-blue-600 text-white px-4 py-2">
                    Save
                </button>
            </div>


            <div>
                <h2 className="text-lg font-bold mb-2">Marks List</h2>

                <table className="w-full border">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-2">Student</th>
                            <th className="p-2">Subject</th>
                            <th className="p-2">Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marksList.map((m, i) => (
                            <tr key={i} className="border-t">
                                <td className="p-2">{m.StudentName}</td>
                                <td className="p-2">{m.Subject}</td>
                                <td className="p-2">{m.Marks}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}
