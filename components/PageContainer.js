import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

function PageContainer({ noNavbar, children, ...metas }) {
  const meta = {
    title: "Manibarathi",
    description: "I'm a Computer Science Student and a coding enthusiast.",
    image: null,
    ...metas,
  };

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen py-5">
      <Head>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta name="author" content="Manibarathi" />
        <meta name="keywords" content="student,MCA,coding,blog" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:site_name" content="Manibarathi" />
        {meta.image && <meta property="og:image" content={meta.image} />}
        <meta property="og:description" content={meta.description} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:card" content="summary_large_image" />
        {meta.image && <meta name="twitter:image" content={meta.image} />}

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-grow flex flex-col mx-auto w-full max-w-screen-md">
        <Navbar />
        <div className="flex-grow flex flex-col pt-4 px-8 pb-10">
          {children}
        </div>
        <div className="px-8">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default PageContainer;
