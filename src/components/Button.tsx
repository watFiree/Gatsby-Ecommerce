import React from "react";

const Button: React.FC<{ onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-42 h-12 bg-blue-500 text-black font-medium uppercase pointer px-6 rounded-lg"
    >
      {children}
    </button>
  );
};

export default Button;
