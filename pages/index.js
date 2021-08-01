import fs from "fs";
import matter from "gray-matter";
import path from "path";
import BlogPost from "../components/BlogPost";
import PageContainer from "../layout/PageContainer";
import CustomLink from "../components/common/CustomLink";

export default function Home({ blogPosts }) {
  return (
    <PageContainer>
      <div>
        <h1 className="font-bold text-gray-800 text-3xl md:text-5xl tracking-tight mb-4">
          Hi I'm Manibarathi
        </h1>
        <h3 className="mt-4 mb-4 text-gray-600 font-medium">
          I'm a student from Chennai. I enjoy coding and exploring new
          technologies. Since you found me on internet, do check out my blogs
          and send me a
          <CustomLink
            href="/message"
            className="ml-1 text-blue-500 hover:underline hover:text-blue-600"
          >
            message
          </CustomLink>
          .
        </h3>
      </div>

      <div className="mt-8">
        <h1 className="text-gray-800 text-xl font-bold md:text-3xl">
          My Blogs
        </h1>
        <p className="mt-2 mb-2 text-gray-600 ">
          Recently I've started writing Blogs, most of them are related to tech
          and coding. You can also view my blogs in
          <CustomLink
            href="https://blog.manibarathi.xyz"
            isNoramlATag={true}
            className="ml-1 font-medium text-blue-500 hover:underline hover:text-blue-600"
          >
            hashnode
          </CustomLink>
          .
        </p>
        {blogPosts.map((blog) => (
          <BlogPost key={blog.slug} blog={blog} />
        ))}
      </div>
    </PageContainer>
  );
}

export async function getStaticProps() {
  const blogPath = path.join("data", "blogs");
  const files = fs.readdirSync(blogPath);

  const blogPosts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("data", "blogs", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return { props: { blogPosts } };
}
