import fs from "fs";
import matter from "gray-matter";
import path from "path";
import BlogLink from "../components/BlogLink";
import PageContainer from "../layout/PageContainer";
import CustomLink from "../components/common/CustomLink";
import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

export default function Home({ blogPosts }) {
  return (
    <PageContainer>
      <div>
        <h1 className="font-bold text-gray-800 text-3xl sm:text-5xl tracking-tight mb-4">
          Hi I'm Manibarathi
        </h1>
        <h3 className="mt-4 mb-4 text-gray-600 sm:text-lg">
          I'm a student and a coding enthusiast from Chennai, India. I enjoy
          coding and exploring new technologies. Since you found me on internet,
          do check out my{" "}
          <CustomLink
            href="/blog"
            className="text-blue-500 font-medium hover:underline hover:text-blue-600"
          >
            blog
          </CustomLink>{" "}
          and send me a{" "}
          <CustomLink
            href="/message"
            className="text-blue-500 font-medium hover:underline hover:text-blue-600"
          >
            message
          </CustomLink>
          .
        </h3>
      </div>

      <div className="mt-8">
        <h1 className="text-gray-800 text-2xl font-bold sm:text-3xl">Blog</h1>
        <p className="mt-2 mb-2 text-gray-600 sm:text-lg">
          Recently I've started writing online, mostly about tech and coding.
          You can also view my blog in{" "}
          <CustomLink
            href="https://blog.manibarathi.xyz"
            isNoramlATag={true}
            className="font-medium text-blue-500 hover:underline hover:text-blue-600"
          >
            hashnode
          </CustomLink>
          .
        </p>
        {blogPosts.map((blog) => (
          <BlogLink key={blog.slug} blog={blog} />
        ))}
      </div>

      <div className="mt-8">
        <h1 className="text-gray-800 text-2xl font-bold sm:text-3xl">
          Projects
        </h1>
        <p className="mt-2 text-gray-600 sm:text-lg">
          I mostly code in JavaScript and Python, focussing on Frontend and API
          development. All my projects are open-sourced and available on{" "}
          <CustomLink
            href="https://github.com/mani-barathi"
            isNoramlATag={true}
            className="font-medium text-blue-500 hover:underline hover:text-blue-600"
          >
            GitHub
          </CustomLink>
          .
        </p>
        {projects
          .filter((p) => p.show)
          .map((p) => (
            <ProjectCard key={p.name} project={p} />
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
