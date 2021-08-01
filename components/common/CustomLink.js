import Link from "next/Link";
import React from "react";

function CustomLink({
  href,
  isNoramlATag = false,
  newTab = true,
  children,
  className,
  ...rest
}) {
  if (isNoramlATag) {
    return (
      <a
        href={href}
        target={newTab ? "_blank" : "_self"}
        className={className}
        {...rest}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...rest}>
      <a className={className} {...rest}>
        {children}
      </a>
    </Link>
  );
}

export default CustomLink;
