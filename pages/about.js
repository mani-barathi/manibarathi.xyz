import React from "react";
import PageContainer from "../layout/PageContainer";

function about() {
  const whatAmIUpTo = [
    "Learning NextJs and building this site",
    "Writing articles and documenting my experiences",
    "Practicing coding problems",
    "Learning Data Structures and Algorithms",
  ];

  return (
    <PageContainer title="About - Manibarathi">
      <h1 className="font-bold text-gray-800 text-3xl sm:text-5xl tracking-tight mb-4">
        About
      </h1>
      <p className="text-gray-600 sm:text-lg">
        Hey, I'm Mani. I'm an MCA student at VIT, Vellore.
      </p>

      <p className="mt-3 text-gray-600 sm:text-lg">
        I grew up in Chennai, spending my school days playing football and
        hanging out with friends. I also hold a bachelor's degree in computer
        science. Apart from college, I spend my free time coding personal
        projects, speedcubing and recently I've started writing articles.
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
