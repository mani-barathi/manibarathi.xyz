import React from "react";
import Head from "next/head";
import CustomLink from "../components/common/CustomLink";

function PageContainer({ children }) {
  return (
    <div className="flex flex-col min-h-screen py-5">
      <Head>
        <title>Manibarathi's Personal Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="mx-auto flex justify-end w-full max-w-screen-lg p-4 px-8 pb-5 md:mx-5">
        <CustomLink
          href="/"
          className="font-medium text-gray-700 hover:text-gray-900"
        >
          Home
        </CustomLink>
      </nav>

      <div className="flex-grow mx-auto w-full max-w-screen-md pt-4 px-8 pb-24">
        {children}
      </div>
    </div>
  );
}

export default PageContainer;
