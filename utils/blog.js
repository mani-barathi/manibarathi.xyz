import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import readingTime from "reading-time";

export function getAllBlogsPaths() {
  const files = fs.readdirSync(path.join("data", "blogs"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return paths;
}

export async function getAllBlogsFrontmatter() {
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

  blogPosts.sort((a, b) => {
    const aGreatorThanB =
      new Date(a.frontmatter.date) > new Date(b.frontmatter.date);
    return aGreatorThanB ? -1 : 1;
  });

  return blogPosts;
}

export async function getBlogContent(slug) {
  const filepath = path.join("data", "blogs", slug + ".mdx");
  const markdownWithMeta = fs.readFileSync(filepath, "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);
  const time = readingTime(content);
  const mdxSource = await serialize(content);
  return { mdxSource, frontmatter, time };
}
