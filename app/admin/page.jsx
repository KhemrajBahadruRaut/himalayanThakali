"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
    const res = await axios.post(
      "http://localhost/himalayanthakali_backend/admin/admin_login.php",
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );

    // console.log("PHP RESPONSE:", res.data);   // 👈 ADD THIS

    if (res.data.status === "success") {
      localStorage.setItem("admin_token", res.data.token);
      router.push("/admin/dashboard");
    } else {
      setError(res.data.message);
    }

  } catch (err) {
    console.log("AXIOS ERROR:", err.response?.data || err.message);
    setError("Backend not reachable");
  }

  setLoading(false);
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-60"
      >
        <h2 className="text-xl font-bold text-center mb-2">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}

        <input
          type="email"
          placeholder="Admin Email"
          className="w-full border text-sm  mb-1 p-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border text-sm mb-4 p-1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          disabled={loading}
          className="w-full bg-black text-white  hover:opacity-80"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
