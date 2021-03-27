import React from "react";

const Text: React.FC<{ className?: string }> = ({
  children,
  className = "",
}) => (
  <p className={`text-lg font-medium text-gray-50 ${className}`}>{children}</p>
);

export default Text;
