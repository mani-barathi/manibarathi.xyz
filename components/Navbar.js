import { useRouter } from "next/router";
import CustomLink from "./CustomLink";

function Navbar() {
  const router = useRouter();
  const isActive = (href) => router.asPath === href;
  const classes =
    "transition-all duration-75 ml-3 sm:ml-5 text-gray-700 tracking-wide border-b-4 border-transparent hover:text-gray-800 hover:border-b-2 hover:border-gray-600";

  return (
    <nav className="bg-gray-50 z-50 sticky top-0 flex justify-end w-full p-4">
      <CustomLink
        href="/"
        className={`${classes} ${isActive("/") && "font-semibold"}`}
      >
        Home
      </CustomLink>
      <CustomLink
        href="/blog"
        className={`${classes} ${isActive("/blog") && "font-semibold"}`}
      >
        Blog
      </CustomLink>
      <CustomLink
        href="/about"
        className={`${classes} ${isActive("/about") && "font-semibold"}`}
      >
        About
      </CustomLink>
    </nav>
  );
}

export default Navbar;
