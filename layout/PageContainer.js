import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

function PageContainer({ noNavbar, children, ...metas }) {
  const meta = {
    title: "Manibarathi",
    description: "I'm a 20 year old MCA student and a coding enthusiast.",
    ...metas,
  };

  return (
    <div className="flex flex-col min-h-screen py-5">
      <Head>
        <title>{meta.title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta name="author" content="Manibarathi" />
        <meta name="keywords" content="student,MCA,coding,blog" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-grow mx-auto w-full max-w-screen-md pt-4 px-8 pb-24">
        {!noNavbar && <Navbar />}
        {children}
      </div>
    </div>
  );
}

export default PageContainer;
