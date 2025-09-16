import React, { useState } from "react";

export default function LoginScreen({ onLogin }) {
  const [username, setUsername] = useState("");

  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome Back 👋</h1>
        <input
          type="text"
          placeholder="Enter your username"
          className="border w-full p-2 mb-4 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={() => username && onLogin()}
          className="bg-green-600 text-white px-6 py-2 rounded w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
}
