import React from "react";

const Layout: React.FC<{ background?: string }> = ({
  children,
  background = "trueGray-800",
}) => {
  return (
    <div className={`h-screen w-screen flex bg-${background}`}>{children}</div>
  );
};

export default Layout;
