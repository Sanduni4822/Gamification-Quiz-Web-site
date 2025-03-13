import React from "react";

export default function GradeSelectionPage({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {/* Modal Container */}
      <div className="bg-purple-700 p-6 rounded-2xl shadow-2xl w-80 max-w-sm text-center border-4 border-purple-300 relative">

        {/* Alert Icon (Positioned Inside the Frame) */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 flex items-center justify-center bg-red-600 rounded-full border-4 border-white shadow-md">
          <span className="text-white text-4xl font-bold font-title">!</span>
        </div>

        {/* Title (Split into Two Lines) */}
        <h2
          className="text-white text-xl font-bold mt-10 mb-4 leading-snug font-title"
          style={{
            textShadow: "1px 1px 0 black, -1px -1px 0 black",
          }}
        >
          Grade Selection <br /> Required
        </h2>

        {/* Message with Darker Background */}
        <div
          className="rounded-lg py-3 px-4 mb-6 shadow-md"
          style={{
            backgroundColor: "#2a0a45", // Custom darker purple color
          }}
        >
          <p
            className="text-white font-body"
            style={{
              textShadow: "1px 1px 0 black, -1px -1px 0 black",
            }}
          >
            Please select your grade before proceeding.
          </p>
        </div>

        {/* Try Again Button */}
        <button
          onClick={onClose}
          className="w-full bg-gradient-to-b from-red-500 to-red-600 text-black text-lg py-2 rounded-lg border-4 border-black shadow-lg hover:from-red-400 hover:to-red-500 active:scale-95 font-button"
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
