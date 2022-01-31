import Script from "next/script";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        stratergy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script stratergy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());

       gtag('config', 'G-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}'); 
        `}
      </Script>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
