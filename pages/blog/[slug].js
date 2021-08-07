import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import PageContainer from "../../layout/PageContainer";
import CustomLink from "../../components/common/CustomLink";

function BlogPage({ frontmatter, slug, mdxSource }) {
  return (
    <PageContainer showNavbar>
      <div>
        <h1 className="font-bold text-gray-800 text-3xl sm:text-5xl tracking-tight mb-4">
          {frontmatter.title}
        </h1>
        <p className="text-gray-500">{frontmatter.date}</p>
      </div>

      <main className="prose sm:text-lg w-full max-w-none">
        <MDXRemote
          {...mdxSource}
          components={{
            Image,
          }}
        />
      </main>

      <hr className="mt-2 mb-3 border-b border-gray-300" />

      <p className="p-3 text-gray-700 sm:text-lg bg-blue-100 rounded">
        You can also view this post in
        <CustomLink
          href={`https://blog.manibarathi.xyz/${slug}`}
          isNoramlATag={true}
          className="ml-1 font-medium text-blue-500 hover:underline hover:text-blue-600"
        >
          hashnode
        </CustomLink>
      </p>
    </PageContainer>
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
