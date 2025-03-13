import React from "react";

export default function GradeSelectionPage({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-purple-700 p-6 rounded-2xl shadow-2xl w-80 max-w-sm text-center border-4 border-purple-300 relative">

        {/* Alert Icon */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center bg-red-600 rounded-full border-4 border-white shadow-md">
            <span className="text-white text-3xl font-bold">!</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-white text-xl font-bold mb-4" style={{
          textShadow: "1px 1px 0 black, -1px -1px 0 black"
        }}>
          Grade Selection Required
        </h2>

        {/* Message */}
        <p className="text-white mb-6" style={{
          textShadow: "1px 1px 0 black, -1px -1px 0 black"
        }}>
          Please select your grade before proceeding.
        </p>

        {/* Try Again Button */}
        <button
          onClick={onClose}
          className="w-full bg-gradient-to-b from-red-500 to-red-600 text-white text-lg py-2 rounded-lg border-4 border-black shadow-lg hover:from-red-400 hover:to-red-500 active:scale-95 font-bold"
          style={{
            textShadow: "1px 1px 0 black, -1px -1px 0 black",
          }}
        >
          TRY AGAIN
        </button>
      </div>
    </div>
  );
}
