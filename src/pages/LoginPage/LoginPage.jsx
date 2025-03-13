import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  // Navigate to GradeSelectionPage
  const handleLogin = () => {
    navigate("/grade-selection");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center px-4">
      <div className="bg-purple-600 p-6 rounded-2xl shadow-xl w-full max-w-sm text-center border-4 border-purple-300">
        {/* Title */}
        <h2 className="text-white text-2xl font-title mb-4">Login</h2>

        {/* Input Fields */}
        <input
          type="text"
          placeholder="Your name"
          className="w-full bg-purple-500 text-lg px-4 py-2 rounded-lg mb-3 border border-purple-400 outline-none font-body placeholder-white"
          style={{
            color: "white",
            textShadow: "1px 1px 0 black, -1px -1px 0 black",
          }}
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full bg-purple-500 text-lg px-4 py-2 rounded-lg mb-3 border border-purple-400 outline-none font-body placeholder-white"
          style={{
            color: "white",
            textShadow: "1px 1px 0 black, -1px -1px 0 black",
          }}
        />

        {/* Dropdown */}
        <select
          className="w-full bg-purple-500 text-lg px-4 py-2 rounded-lg mb-4 border border-purple-400 outline-none font-body"
          style={{
            color: "white",
            textShadow: "1px 1px 0 black, -1px -1px 0 black",
          }}
        >
          <option>Grade</option>
          <option>Grade 1</option>
          <option>Grade 2</option>
          <option>Grade 3</option>
        </select>

        {/* Login Button */}
        <button
          onClick={handleLogin} // Navigate on click
          className="w-full bg-gradient-to-b from-green-400 to-green-500 text-black text-lg py-2 rounded-lg border-4 border-black shadow-lg hover:from-green-300 hover:to-green-400 active:scale-95 font-button"
          style={{
            textShadow: "1px 1px 0 black, -1px -1px 0 black",
          }}
        >
          LOGIN
        </button>

        {/* Footer */}
        <p className="text-xs text-white mt-3 font-body">
          Rs.5.0 tax will be deducted daily for subscribed users.
        </p>
      </div>
    </div>
  );
}
