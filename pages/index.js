import BlogLink from "../components/BlogLink";
import PageContainer from "../components/PageContainer";
import CustomLink from "../components/CustomLink";
import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";
import { getAllBlogsFrontmatter } from "../utils/blog";

export default function Home({ blogPosts }) {
  return (
    <PageContainer>
      <div className="mt-5">
        <h1 className="font-bold text-gray-800 text-3xl sm:text-5xl tracking-tight mb-4">
          Hi I'm Mani bharathi
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
          I sometime write online, mostly about tech and coding. The recent few
          articles are listed below, and the entire list is{" "}
          <CustomLink
            href="/blog"
            className="font-medium text-blue-500 hover:underline hover:text-blue-600"
          >
            here
          </CustomLink>{" "}
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
          I mostly code in JavaScript and Python, focussing on full stack
          development. All my projects are available on{" "}
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
  const blogPosts = await getAllBlogsFrontmatter();
  const latestBlogPosts = blogPosts.slice(0, 3);
  return { props: { blogPosts: latestBlogPosts } };
}
