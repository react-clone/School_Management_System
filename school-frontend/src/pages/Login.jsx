import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        };

        try {

            const res = await axios.post(
                "http://localhost:5000/api/auth/login",
                data
            );


            dispatch(loginSuccess(res.data));


            navigate("/dashboard");

        } catch (error) {
            alert("Invalid email or password");
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <form data-aos="zoom-out-up"
                onSubmit={handleLogin}
                className="bg-white p-8 rounded-xl shadow-lg w-96"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-primary">
                    Login
                </h2>

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
                    className="w-full p-2  mb-4 border rounded-lg"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-primary rounded-3xl text-blue-600 border-2 border-blue-600 p-2 hover:bg-blue-800 hover:text-white font-semibold shadow-2xl"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
