import { initializeApp, getApps } from "firebase/app";

console.log(process.env.NEXT_PUBLIC_APIKEY);
console.log(process.env.NEXT_PUBLIC_AUTHDOMAIN);
console.log(process.env.NEXT_PUBLIC_PROJECTID);
console.log(process.env.NEXT_PUBLIC_STORAGEBUCKET);
console.log(process.env.NEXT_PUBLIC_MESSAGINGSENDERID);
console.log(process.env.NEXT_PUBLIC_APPID);

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
};

export const app = initializeApp(firebaseConfig);
console.log(app);
console.log(getApps());
