// src/components/ui/Button.jsx
import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-neonBlue hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
