import CustomLink from "./common/CustomLink";

function Footer() {
  return (
    <div className="mt-16 py-10 border-t grid grid-cols-1 sm:grid-cols-3 gap-4 sm:justify-items-center">
      <CustomLink
        href="https://github.com/mani-barathi"
        className="ml-3 text-gray-700 hover:text-gray-800 tracking-wide"
        isNoramlATag={true}
      >
        GitHub
      </CustomLink>

      <CustomLink
        href="https://www.linkedin.com/in/mani-bharathi-08/"
        className="ml-3 text-gray-700 hover:text-gray-800 tracking-wide"
        isNoramlATag={true}
      >
        LinkedIn
      </CustomLink>

      <CustomLink
        href="https://blog.manibarathi.xyz"
        className="ml-3 text-gray-700 hover:text-gray-800 tracking-wide"
        isNoramlATag={true}
      >
        HashNode
      </CustomLink>
    </div>
  );
}

export default Footer;
