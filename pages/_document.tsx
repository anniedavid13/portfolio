
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Plus+Jakarta+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* <!-- HTML Meta Tags --> */}
      <meta name="title" content="Annie David –– Portfolio" />
        <meta
          name="description"
          content="Portfolio website of front-end engineer Annie David"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:title" content="Annie David –– Portfolio" />
        <meta
          property="og:description"
          content="Portfolio website of front-end engineer Ken Nersisyan"
        />


        {/* <!-- Twitter Meta Tags --> */}
  <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="Annie David" />
        <meta name="twitter:title" content="Annie David –– Portfolio" />
        <meta
          name="twitter:description"
          content="Portfolio website of front-end engineer Annie David"
        />


        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
