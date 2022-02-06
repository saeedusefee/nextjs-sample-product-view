import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta
            name="keywords"
            content="behtarino"
          />

          <meta name="msapplication-TileColor" content="#6200EE" />
          <meta name="msapplication-TileImage" content="/logo512.png" />
          <meta name="theme-color" content="#6200EE" />
          <meta name="description" content="behtarino" />
          <meta property="og:description" content="behtarino" />
          <meta property="og:title" content="behtarino" />
          <meta property="og:image" content="/logo512.png" />
          <meta property="og:site_name" content="Jumbo Admin Template" />
          <meta name="keywords" content="behtarino" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="behtarino" />
          <meta name="twitter:description" content="behtarino" />

          <link rel="apple-touch-icon" href="/logo192.png" />
          <link rel="manifest" href="/manifest.json" />

          <link rel="stylesheet" href="/vendors/flag/sprite-flags-24x24.css" />
          <link rel="stylesheet" href="/vendors/fonts.css" />
          <link rel="stylesheet" href="/vendors/weather-icons/css/weather-icons.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. apps.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. apps.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. apps.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. apps.getInitialProps
  // 2. page.getInitialProps
  // 3. apps.render
  // 4. page.render

  // Render apps and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the apps and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
