import React from "react";

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center">
      <div className="bg-purple-600 p-6 rounded-2xl shadow-xl w-80 text-center border-4 border-purple-300">
        {/* Title */}
        <h2 className="text-white text-2xl font-title mb-4">Login</h2>

        {/* Input Fields */}
        <input 
          type="text" 
          placeholder="Your name"
          className="w-full bg-purple-500 text-white text-lg px-4 py-2 rounded-lg mb-3 border border-purple-400 placeholder-white outline-none font-body"
        />
        <input 
          type="tel" 
          placeholder="Mobile Number"
          className="w-full bg-purple-500 text-white text-lg px-4 py-2 rounded-lg mb-3 border border-purple-400 placeholder-white outline-none font-body"
        />
        
        {/* Dropdown */}
        <select className="w-full bg-purple-500 text-white text-lg px-4 py-2 rounded-lg mb-4 border border-purple-400 outline-none font-body">
          <option>Grade</option>
          <option>Grade 1</option>
          <option>Grade 2</option>
          <option>Grade 3</option>
        </select>

        {/* Button */}
        <button className="w-full bg-green-500 text-black text-lg py-2 rounded-lg border-2 border-black shadow-md hover:bg-green-400 font-button">
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
