import React from "react";
import Image from "next/image";
import PageContainer from "../components/PageContainer";

export default function About() {
  const whatAmIUpTo = [
    "Learning NextJs and building this site",
    "Writing articles and documenting my experiences",
    "Practicing coding problems",
  ];

  return (
    <PageContainer title="About - Mani bharathi">
      <h1 className="font-bold text-gray-800 text-3xl sm:text-5xl tracking-tight mb-4">
        About
      </h1>

      <div className="flex flex-col-reverse sm:flex-row items-start">
        <div className="flex flex-col pr-8">
          <p className="text-gray-600 sm:text-lg max-w-xl">
            Hey, I'm Mani. I'm a Computer Science student at VIT, Vellore. I
            like to create stuffs by coding. I spend my free time coding,
            building personal projects and speedcubing. I also teach coding and
            write articles.
          </p>
          <p className="mt-2 text-gray-600 sm:text-lg max-w-xl">
            I grew up in Chennai, spending my school days playing football and
            hanging out with friends. I also hold a bachelor's degree in
            computer science.
          </p>
        </div>
        <div className="w-[150px] sm:w-[250px]  sm:mb-0">
          <Image
            src="/images/mani.png"
            height={250}
            width={250}
            className="rounded-full"
          />
        </div>
      </div>

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
