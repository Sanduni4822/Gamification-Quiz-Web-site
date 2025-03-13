import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Modal Component
const ErrorModal = ({ title, message, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-purple-700 p-6 rounded-2xl shadow-2xl w-80 max-w-sm text-center border-4 border-purple-300 relative">
      {/* Alert Icon */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 flex items-center justify-center bg-red-600 rounded-full border-4 border-white shadow-md">
        <span className="text-white text-4xl font-bold">!</span>
      </div>

      {/* Title */}
      <h2
        className="text-white text-xl font-title mt-8 mb-4 leading-snug"
        style={{
          textShadow: "1px 1px 0 black, -1px -1px 0 black",
        }}
      >
        {title}
      </h2>

      {/* Message */}
      <div
        className="rounded-lg py-3 px-4 mb-6 shadow-md"
        style={{
          backgroundColor: "#2a0a45", // Darker background
        }}
      >
        <p
          className="text-white"
          style={{
            textShadow: "1px 1px 0 black, -1px -1px 0 black",
          }}
        >
          {message}
        </p>
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="w-full bg-gradient-to-b from-green-400 to-green-500 text-black text-lg py-2 rounded-lg border-4 border-black shadow-lg hover:from-green-300 hover:to-green-400 active:scale-95 font-bold"
        style={{
          textShadow: "1px 1px 0 black, -1px -1px 0 black",
        }}
      >
        Got it
      </button>
    </div>
  </div>
);

export default function LoginPage() {
  const navigate = useNavigate();

  // Form state
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [grade, setGrade] = useState("");
  const [error, setError] = useState(null);

  // Validation & Navigation
  const handleLogin = () => {
    if (!name || !mobile) {
      setError({
        title: "Oops! Missing Information",
        message: "Please enter name and mobile number before continuing.",
      });
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      setError({
        title: "Invalid Mobile Number",
        message: "Please enter a valid 10-digit mobile number.",
      });
      return;
    }

    if (!grade || grade === "Grade") {
      setError({
        title: "Grade Selection Required",
        message: "Please select your grade before proceeding.",
      });
      return;
    }

    // Navigate to GradeSelectionPage if valid
    navigate("/grade-selection");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center px-4">
      <div className="bg-purple-600 p-6 rounded-2xl shadow-xl w-full max-w-sm text-center border-4 border-purple-300">
        {/* Title */}
        <h2 className="text-white text-2xl font-title mb-4">Login</h2>

        {/* Input: Name */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full bg-purple-500 text-lg px-4 py-2 rounded-lg mb-3 border border-purple-400 outline-none font-body placeholder-white"
          style={{
            color: "white",
            textShadow: "1px 1px 0 black, -1px -1px 0 black",
          }}
        />

        {/* Input: Mobile Number */}
        <input
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Mobile Number"
          className="w-full bg-purple-500 text-lg px-4 py-2 rounded-lg mb-3 border border-purple-400 outline-none font-body placeholder-white"
          style={{
            color: "white",
            textShadow: "1px 1px 0 black, -1px -1px 0 black",
          }}
        />

        {/* Dropdown: Grade */}
        <select
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
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
          onClick={handleLogin}
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

      {/* Error Modal */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={() => setError(null)}
        />
      )}
    </div>
  );
}
