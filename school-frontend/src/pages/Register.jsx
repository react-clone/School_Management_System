import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Student");

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        const data = {
            fullName: fullName,
            email: email,
            password: password,
            role: role
        };

        try {

            await axios.post(
                "http://localhost:5000/api/auth/register",
                data
            );

            alert("Registration Successful");
            navigate("/login");

        } catch (error) {
            console.error(error);
            alert("Registration Failed");
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100" data-aos="zoom-in-up">
            <form
                onSubmit={handleRegister}
                className="bg-white p-8 rounded-xl shadow-lg w-96"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-primary">
                    Create Account
                </h2>

                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-2 mb-4 border rounded"
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 mb-4 border rounded"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 mb-4 border rounded"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <select
                    className="w-full p-2 mb-6 border rounded"
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                </select>

                <button
                    type="submit"
                    className="w-full bg-primary text-white p-2 rounded hover:bg-blue-800"
                >
                    Register
                </button>

                <p className="text-center text-sm mt-4">
                    Already have an account?{" "}
                    <span
                        className="text-primary cursor-pointer font-semibold"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </span>
                </p>
            </form>
        </div>
    );
}
