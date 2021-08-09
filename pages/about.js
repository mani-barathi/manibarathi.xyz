import React from "react";
import PageContainer from "../layout/PageContainer";

function about() {
  return (
    <PageContainer showNavbar>
      <h1 className="font-bold text-gray-800 text-3xl sm:text-5xl tracking-tight mb-4">
        About
      </h1>
      <p className="text-gray-700 sm:text-lg">
        Hey, I'm Mani. I'm an MCA student at VIT, Vellore.
      </p>

      <p className="mt-3 text-gray-700 sm:text-lg">
        I grew up in Chennai, spending my school days playing football and
        hanging out with friends. I also hold a bachelor's degree in computer
        science. Apart from college, I spend my free time coding personal
        projects, speedcubing and recently I've started writing articles.
      </p>
    </PageContainer>
  );
}

export default about;
