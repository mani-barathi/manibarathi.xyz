import React from "react";
import CustomLink from "./common/CustomLink";

function Navbar() {
  return (
    <nav className="bg-white z-50 sticky top-0 flex justify-end w-full p-4">
      <CustomLink
        href="/"
        className="ml-3 sm:ml-5 font-medium text-gray-700 hover:text-gray-900"
      >
        Home
      </CustomLink>
      <CustomLink
        href="/blog"
        className="ml-3 sm:ml-5 font-medium text-gray-700 hover:text-gray-900"
      >
        Blog
      </CustomLink>
      <CustomLink
        href="/about"
        className="ml-3 sm:ml-5 font-medium text-gray-700 hover:text-gray-900"
      >
        About
      </CustomLink>
    </nav>
  );
}

export default Navbar;
