import React from "react";
// import Image from "next/image";
import PageContainer from "../layout/PageContainer";

function about() {
  const whatAmIUpTo = [
    "Learning NextJs and building this site",
    "Writing articles and documenting my experiences",
    "Practicing coding problems",
  ];

  return (
    <PageContainer title="About - Manibarathi">
      <h1 className="font-bold text-gray-800 text-3xl sm:text-5xl tracking-tight mb-4">
        About
      </h1>
      {/* <Image
        src="https://avatars.githubusercontent.com/u/49336839?s=460&u=fbbc21b3ee2066b82cf7ddf1205524757ac5f3f4&v=4"
        height="200"
        width="200"
        alt="image"
        className="rounded-lg sm:mr-8"
          /> */}

      <p className="text-gray-600 sm:text-lg">
        Hey, I'm Mani. I'm an MCA student at VIT, Vellore. Apart from college, I
        spend my free time speedcubing and building personal projects. I also
        teach coding and write articles.
      </p>

      <p className="mt-3 text-gray-600 sm:text-lg">
        I grew up in Chennai, spending my school days playing football and
        hanging out with friends. I also hold a bachelor's degree in computer
        science.
      </p>

      <div className="mt-3">
        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
          What I've been up to
        </h3>
        {whatAmIUpTo.map((w) => (
          <li className="mt-2 mb-2" key={w}>
            <span className="ml-1 text-gray-600 sm:text-lg">{w}</span>
          </li>
        ))}
      </div>
    </PageContainer>
  );
}

export default about;
