import React, { useEffect, useRef, useState } from "react";
import PageContainer from "../layout/PageContainer";
import { auth, provider, db } from "../utils/firebase";
import { signOut, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { addDoc, serverTimestamp, collection } from "firebase/firestore/lite";

function message() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const inputRef = useRef();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const loggedUser = {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
        };
        setUser(loggedUser);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = () => {
    signInWithPopup(auth, provider).catch(console.log);
  };

  const logout = () => signOut(auth);

  const sendMessage = async () => {
    const text = inputRef.current.value;
    if (!text) return;

    const message = {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      timestamp: serverTimestamp(),
      text,
    };

    try {
      await addDoc(collection(db, "messages"), message);
      alert("Thanks for your message I will get back to you!");
      inputRef.current.value = "";
    } catch (e) {
      console.log(e);
      alert("Unable to send message.. try again after some time!");
    }
  };

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
              className="mt-3 py-1 px-5 flex items-center font-medium text-white bg-blue-500 transition rounded transform active:translate-y-0.5 hover:bg-blue-600"
              onClick={login}
              disabled={isLoading}
            >
              {isLoading && (
                <div
                  style={{ borderTopColor: "#BDC3C7" }}
                  className="mr-3 w-4 h-4 border-2 border-white border-solid rounded-full animate-spin"
                ></div>
              )}
              Login
            </button>
          </div>
        ) : (
          <div className="p-3 mt-3 text-gray-700 bg-blue-100 rounded-md border border-blue-200">
            <textarea
              className="px-2 py-1 outline-none border border-blue-200 focus:border-blue-300 rounded w-full"
              type="text"
              placeholder="Type a message"
              ref={inputRef}
            />
            <div className="sm:flex sm:flex-row sm:justify-between sm:items-center">
              <button
                type="submit"
                className="mt-2 py-1 px-5 font-medium text-white bg-blue-500 transition rounded transform active:translate-y-0.5 hover:bg-blue-600"
                onClick={sendMessage}
              >
                Send
              </button>
              <p className="mt-2 text-sm text-gray-500 text-right">
                You are logged in as {user.displayName}
                <br />
                If you wish to logout click{" "}
                <button
                  className="text-blue-500 underline hover:text-blue-600"
                  onClick={logout}
                >
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
