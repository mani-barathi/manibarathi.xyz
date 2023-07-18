import Link from "next/link";
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
    <Link href={href} {...rest} className={className}>
      {children}
    </Link>
  );
}

export default CustomLink;
