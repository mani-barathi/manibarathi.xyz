import React from "react";
import CustomLink from "./common/CustomLink";

function Navbar() {
  return (
    <nav className="bg-white z-50 sticky top-0 flex justify-end w-full p-4">
      <CustomLink
        href="/"
        className="ml-3 sm:ml-5 font-normal text-gray-600 hover:text-gray-800 tracking-wide sm:text-lg"
      >
        Home
      </CustomLink>
      <CustomLink
        href="/blog"
        className="ml-3 sm:ml-5 font-normal text-gray-600 hover:text-gray-800 tracking-wide sm:text-lg"
      >
        Blog
      </CustomLink>
      <CustomLink
        href="/about"
        className="ml-3 sm:ml-5 font-normal text-gray-600 hover:text-gray-800 tracking-wide sm:text-lg"
      >
        About
      </CustomLink>
    </nav>
  );
}

export default Navbar;
