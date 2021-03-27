import React from "react";

const Button: React.FC<{ number: number }> = ({ children, number }) => {
  return (
    <button onClick={() => alert(number)}>{String(number) + children}</button>
  );
};

export default Button;
