import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

function PageContainer({ noNavbar, children }) {
  return (
    <div className="flex flex-col min-h-screen py-5">
      <Head>
        <title>Manibarathi's Personal Site</title>
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
