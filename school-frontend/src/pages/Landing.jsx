import { useNavigate } from "react-router-dom";

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black">
            <h1 className="text-4xl font-bold text-white mb-6" data-aos="zoom-in-down">
                School Management System
            </h1>

            <p className="text-white mb-8" data-aos="zoom-in-down">
                Manage students, teachers & academics professionally
            </p>

            <div className="flex gap-4">
                <button
                    onClick={() => navigate("/login")}
                    className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-200" data-aos="fade-right"
                >
                    Login
                </button>

                <button
                    onClick={() => navigate("/register")}
                    className="bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 hover:text-slate-200"
                    data-aos="fade-left"
                >
                    Register
                </button>
            </div>
        </div>
    );
}
