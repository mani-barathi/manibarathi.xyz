import React from "react";
import Link from "next/link";

function BlogPost({ blog }) {
  return (
    <li className="mt-2 mb-2">
      <Link href={`/blog/${blog.slug}`}>
        <a className="p-1 text-gray-600 font-medium hover:text-gray-700">
          {blog.frontmatter.title}
        </a>
      </Link>
    </li>
  );
}

export default BlogPost;
