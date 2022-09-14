import React from "react";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import PageContainer from "../../components/PageContainer";
import CustomLink from "../../components/CustomLink";
import MDXComponents from "../../components/MDXComponents";
import { getAllBlogsPaths, getBlogContent } from "../../utils/blog";

function formatDate(d) {
  const dd = new Date(d);
  const ds = dd.toDateString().split(" ");
  return `${ds[1]} ${ds[2]}, ${ds[3]}`;
}

function BlogPage({ frontmatter, slug, mdxSource, readingTime }) {
  return (
    <PageContainer
      title={`${frontmatter.title} - Mani bharathi`}
      description={frontmatter.description}
      image={
        frontmatter.image
          ? `https://manibarathi.xyz/images/${slug}/${frontmatter.image}`
          : null
      }
    >
      <div className="mb-5">
        <h1 className="font-bold text-gray-800 text-3xl sm:text-5xl tracking-tight mb-5">
          {frontmatter.title}
        </h1>
        <div className="text-gray-500 flex flex-col sm:flex-row sm:justify-between">
          <p>
            {"Mani bharathi"} / {formatDate(frontmatter.date)}
          </p>
          <span>{readingTime.text} </span>
        </div>
      </div>

      <main className="prose sm:text-lg w-full max-w-none">
        <MDXRemote
          {...mdxSource}
          components={{
            Image,
            ...MDXComponents,
          }}
        />
      </main>

      {frontmatter.postedOnHashNode && (
        <p className="p-3 mt-5 text-gray-700 sm:text-lg bg-blue-100 rounded">
          You can also view this post in
          <CustomLink
            href={`https://blog.manibarathi.xyz/${slug}`}
            isNoramlATag={true}
            className="ml-1 font-medium text-blue-500 hover:underline hover:text-blue-600"
          >
            hashnode
          </CustomLink>
        </p>
      )}
    </PageContainer>
  );
}

export async function getStaticPaths() {
  const paths = getAllBlogsPaths();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { frontmatter, mdxSource, time } = await getBlogContent(params.slug);
  return {
    props: { frontmatter, mdxSource, slug: params.slug, readingTime: time },
  };
}

export default BlogPage;
