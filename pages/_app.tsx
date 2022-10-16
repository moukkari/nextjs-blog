import Head from "next/head";
import "../styles/global.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K19NGXTJ4P"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-K19NGXTJ4P');
            `,
          }}
        ></script>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
