import React from "react";

const Layout: React.FC = ({ children }) => (
  <div className="h-screen w-screen flex bg-trueGray-800">{children}</div>
);

export default Layout;
