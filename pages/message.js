import React from "react";
import PageContainer from "../layout/PageContainer";

function message() {
  return (
    <PageContainer>
      <div>
        <h1 className="font-bold text-gray-800 text-3xl md:text-5xl tracking-tight mb-4">
          Leave a message
        </h1>
        <p className="text-gray-600">
          Oops! sorry, you can't send a message because I'm haven't developed
          this page. Please come after a while and shoot me a message.
        </p>
      </div>
    </PageContainer>
  );
}

export default message;
