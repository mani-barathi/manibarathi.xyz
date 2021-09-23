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
          Whether you're interested in working on a project together or just
          want to say hello, feel free to leave a message and I'll get back to
          you as soon as I can.
        </p>
        <div className="p-3 mt-3 text-gray-700 bg-blue-100 rounded-md border border-blue-200">
          <p className="sm:text-lg">
            Login with your <span className="text-blue-500 font-medium">G</span>
            <span className="text-red-500 font-medium">o</span>
            <span className="text-yellow-500 font-medium">o</span>
            <span className="text-blue-500 font-medium">g</span>
            <span className="text-green-600 font-medium">l</span>
            <span className="text-red-500 font-medium">e</span> account to send
            a message.
          </p>
          <button className="mt-3 py-1 px-5 font-medium text-white bg-blue-500 transition rounded transform active:translate-y-0.5 hover:bg-blue-600">
            Login
          </button>
        </div>
      </div>
    </PageContainer>
  );
}

export default message;
