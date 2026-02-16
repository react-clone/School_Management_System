import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(loginSuccess(null));
        navigate("/login");
    };

    return (
        <div className="h-16 bg-white shadow flex items-center justify-between px-6 ml-64">
            <h2 className="font-semibold text-gray-700">
                Dashboard
            </h2>

            <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
            >
                Logout
            </button>
        </div>
    );
}
