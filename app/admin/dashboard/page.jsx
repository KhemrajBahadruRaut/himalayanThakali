"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push("/admin"); // redirect to login
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:opacity-80"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded shadow text-center">
            <h2 className="font-bold text-xl mb-2">Users</h2>
            <p className="text-gray-500">Manage all users</p>
          </div>
          <div className="bg-gray-50 p-4 rounded shadow text-center">
            <h2 className="font-bold text-xl mb-2">Orders</h2>
            <p className="text-gray-500">View all orders</p>
          </div>
          <div className="bg-gray-50 p-4 rounded shadow text-center">
            <h2 className="font-bold text-xl mb-2">Reports</h2>
            <p className="text-gray-500">Check system reports</p>
          </div>
          {/* Add more dashboard cards as needed */}
        </div>
      </div>
    </div>
  );
}
