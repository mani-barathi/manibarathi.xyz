import Head from "next/head";
import Link from "next/Link";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import BlogPost from "../components/BlogPost";

export default function Home({ blogPosts }) {
  return (
    <div className="flex flex-col min-h-screen py-5">
      <Head>
        <title>Manibarathi's Personal Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto p-4 w-full max-w-screen-md px-8 pb-24">
        <div>
          <h1 className="font-bold text-gray-800 text-3xl md:text-5xl tracking-tight mb-4">
            Hi I'm Manibarathi
          </h1>
          <h3 className="mt-4 mb-4 text-gray-600 font-medium">
            I'm a student from Chennai. I enjoy coding and exploring new
            technologies. Since you found me on internet, do check out my blogs
            and send me a
            <Link href="/message">
              <a className="ml-1 text-blue-500 font-medium hover:text-blue-700">
                message
              </a>
            </Link>
            .
          </h3>
        </div>

        <div className="mt-8">
          <h1 className="text-gray-800 text-xl font-bold md:text-3xl">
            My Blogs
          </h1>
          <p className="mt-2 mb-2 text-gray-600 ">
            Recently I've started writing Blogs, most of them are related to
            tech and coding. You can also view my blogs in
            <a
              href="https://blog.manibarathi.xyz"
              target="_blank"
              className="ml-1 text-blue-500 font-medium hover:text-blue-700"
            >
              hashnode
            </a>
            .
          </p>
          {blogPosts.map((blog) => (
            <BlogPost key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </div>
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
