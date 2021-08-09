import React from "react";
import CustomLink from "./common/CustomLink";

function Navbar() {
  return (
    <nav className="flex justify-end w-full p-4 pb-5">
      <CustomLink
        href="/"
        className="font-medium text-gray-700 hover:text-gray-900"
      >
        Home
      </CustomLink>
      <CustomLink
        href="/about"
        className="ml-2 sm:ml-5 font-medium text-gray-700 hover:text-gray-900"
      >
        About
      </CustomLink>
    </nav>
  );
}

export default Navbar;
