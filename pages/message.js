import React from "react";
import PageContainer from "../layout/PageContainer";

function message() {
  return (
    <PageContainer title="Message - Manibarathi">
      <div>
        <h1 className="font-bold text-gray-800 text-3xl sm:text-5xl tracking-tight mb-4">
          Leave a message
        </h1>
        <p className="mt-4 mb-4 text-gray-600 sm:text-lg">
          Oops! sorry, this page is under development.
        </p>
      </div>
    </PageContainer>
  );
}

export default message;
