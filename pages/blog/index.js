import PageContainer from "../../components/PageContainer";
import CustomLink from "../../components/CustomLink";
import { getAllBlogsFrontmatter } from "../../utils/blog";

export default function Index({ blogPosts }) {
  return (
    <PageContainer
      title="Blog - Mani bharathi"
      description="This is a space where I write about tech, coding, and much more
          sharing my thoughts and experiences."
    >
      <div>
        <h1 className="font-bold text-gray-800 text-3xl sm:text-5xl tracking-tight mb-4">
          Blog
        </h1>
        <p className="mt-4 mb-4 text-gray-600 sm:text-lg">
          This is a space where I write about tech, coding, and much more
          sharing my thoughts and experiences. There are {blogPosts.length}{" "}
          articles here and all of them are listed in reverse chronological
          order.
        </p>
      </div>

      <div className="mt-4">
        {blogPosts.map((blog) => (
          <CustomLink href={`/blog/${blog.slug}`} key={blog.slug}>
            <div className="mb-5">
              <h2 className="text-gray-700 font-medium text-lg sm:text-xl">
                {blog.frontmatter.title}
              </h2>
              <p className="text-gray-500">{blog.frontmatter.description}</p>
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
