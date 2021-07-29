import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <Head>
        <title>Manibarathi's Personal Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-gray-800 text-5xl">Hi I'm Manibarathi</h1>
    </div>
  );
}
