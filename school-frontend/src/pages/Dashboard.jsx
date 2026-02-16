import { useSelector } from "react-redux";

export default function Dashboard() {
    const user = useSelector((state) => state.auth.user);

    return (
        <div className="bg-white p-6 rounded shadow text-center">
            <h1 className="text-2xl font-bold mb-4">
                Welcome <span className="text-green-600">{user?.FullName}</span>
            </h1>
            <p className="font-semibold">Role: {user?.Role}</p>
        </div>
    );
}
