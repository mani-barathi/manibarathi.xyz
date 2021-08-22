import React from "react";
import PageContainer from "../../layout/PageContainer";
import { getAllBlogsFrontmatter } from "../../utils/blog";
import CustomLink from "../../components/common/CustomLink";

function index({ blogPosts }) {
  return (
    <PageContainer title="Blog - Manibarathi">
      <div>
        <h1 className="font-bold text-gray-800 text-3xl sm:text-5xl tracking-tight mb-4">
          Blog
        </h1>
        <p className="mt-4 mb-4 text-gray-600 sm:text-lg">
          This is a space where I write about tech, coding, and much more
          sharing my thoughts and experiences. All the articles are listed in
          chronological order.
        </p>
      </div>

      <div className="mt-4">
        {blogPosts.map((blog) => (
          <CustomLink href={`/blog/${blog.slug}`} key={blog.frontmatter.title}>
            <div className="mb-5">
              <h2 className="text-gray-700 font-medium text-lg sm:text-xl">
                {blog.frontmatter.title}
              </h2>
              <p className="sm:text-lg text-gray-500">
                {blog.frontmatter.description}
              </p>
            </div>
          </CustomLink>
        ))}
      </div>
    </PageContainer>
  );
}

export async function getStaticProps() {
  const blogPosts = await getAllBlogsFrontmatter();
  return { props: { blogPosts } };
}

export default index;
