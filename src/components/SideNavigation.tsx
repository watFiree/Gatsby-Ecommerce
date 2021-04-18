import React from "react";
import { Link } from "gatsby";

import Logo from "components/Logo";
import Text from "components/Text";
import { GithubIcon, LinkedinIcon } from "components/Icons";

const SideNavigation: React.FC<{ bgColor?: boolean }> = ({
  bgColor = true,
}) => (
  <div
    className={`h-screen min-w-1/5 w-1/5 flex flex-col items-center justify-evenly py-16 ${
      bgColor ? "bg-gray-800" : ""
    }`}
  >
    <Logo />

    <nav className="h-2/3 flex flex-col align-center justify-center gap-y-6">
      <Link to="/newest">
        <Text>NEWEST</Text>
      </Link>
      <Link to="/t-shirts">
        <Text>T-SHIRTS</Text>
      </Link>
      <Link to="/hoodies">
        <Text>HOODIES</Text>
      </Link>
      <Link to="/gadgets">
        <Text>GADGETS</Text>
      </Link>
    </nav>

    <footer className="w-1/4 justify-self-end flex flex-col align-center">
      <Text>CONTACT</Text>
      <div className="mt-2 flex items-center justify-start gap-x-1">
        <GithubIcon />
        <LinkedinIcon />
      </div>
    </footer>
  </div>
);

export default SideNavigation;
