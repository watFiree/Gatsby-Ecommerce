import React from "react";
import { navigate } from "gatsby";

const Logo = () => (
  <header>
    <h1
      className="text-5xl font-medium text-gray-50"
      onClick={() => navigate("/")}
    >
      {" "}
      SpaceY
    </h1>
  </header>
);

export default Logo;
