import "../styles/global.css";
import NProgress from "../components/Nprogress";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <NProgress />
    </>
  );
}

export default MyApp;
