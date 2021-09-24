import React, { useState } from "react";
import PageContainer from "../layout/PageContainer";

function message() {
  const [user, setUser] = useState(null);

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
        {!user ? (
          <div className="p-3 mt-3 text-gray-700 bg-blue-100 rounded-md border border-blue-200">
            <p className="sm:text-lg">
              Login with your{" "}
              <span className="text-blue-500 font-medium">G</span>
              <span className="text-red-500 font-medium">o</span>
              <span className="text-yellow-500 font-medium">o</span>
              <span className="text-blue-500 font-medium">g</span>
              <span className="text-green-600 font-medium">l</span>
              <span className="text-red-500 font-medium">e</span> account to
              send a message.
            </p>
            <button
              className="mt-3 py-1 px-5 font-medium text-white bg-blue-500 transition rounded transform active:translate-y-0.5 hover:bg-blue-600"
              onClick={() => setUser("mani")}
            >
              Login
            </button>
          </div>
        ) : (
          <div className="p-3 mt-3 text-gray-700 bg-blue-100 rounded-md border border-blue-200">
            <textarea
              className="px-2 py-1 outline-none border border-blue-200 focus:border-blue-300 rounded w-full"
              type="text"
              placeholder="Type a message"
            />
            <div className="flex justify-between items-end">
              <button
                type="submit"
                className="mt-2 py-1 px-5 font-medium text-white bg-blue-500 transition rounded transform active:translate-y-0.5 hover:bg-blue-600"
              >
                Send
              </button>
              <p className="mt-2 text-sm text-gray-500">
                If you wish to logout click{" "}
                <button className="text-blue-500 underline hover:text-blue-600">
                  here
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </PageContainer>
  );
}

export default message;
