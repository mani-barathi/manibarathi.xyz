import React from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

function BlogPage({ frontmatter, slug, mdxSource }) {
  return (
    <div className="flex flex-col min-h-screen py-5">
      <Head>
        <title>Manibarathi's Personal Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto p-4 w-full max-w-screen-md px-8 pb-24">
        <div>
          <h1 className="font-bold text-gray-800 text-3xl md:text-5xl tracking-tight mb-4">
            {frontmatter.title}
          </h1>
          <p className="text-gray-500">{frontmatter.date}</p>
        </div>

        <main className="prose w-full max-w-none">
          <MDXRemote {...mdxSource} />
        </main>

        <hr className="mt-1 mb-3 border-b border-gray-300" />

        <p className="p-3 bg-blue-100 rounded">
          You can also view this blog in
          <a
            href={`https://blog.manibarathi.xyz/${slug}`}
            target="_blank"
            className="ml-1 text-blue-500 font-medium hover:text-blue-700"
          >
            hashnode
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("data", "blogs"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filepath = path.join("data", "blogs", params.slug + ".mdx");
  const markdownWithMeta = fs.readFileSync(filepath, "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  return { props: { frontmatter, mdxSource, slug: params.slug } };
}

export default BlogPage;
