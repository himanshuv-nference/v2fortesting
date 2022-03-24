import React from 'react'
import { ServerStyleSheets } from '@material-ui/core/styles'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import config from '../src/Config'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700,800&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#0d2337"
          />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <meta name="msapplication-TileColor" content={config.primaryColor} />
          <meta
            name="msapplication-config"
            content="/favicons/browserconfig.xml"
          />
          <meta name="theme-color" content={config.primaryColor} />

	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
	<title>nference - Powering quantum leaps in human health</title>
	<meta name="title" content="nference - Powering quantum leaps in human health" />
	<meta name="image" content="https://nference.com/image/nference_logo.png" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://nference.com" />
	<meta property="og:description" content="nference partners with medical centers to turn decades of rich and predominantly unstructured data captured in electronic medical records (EMR) into powerful software solutions that enable scientists to discover and develop the next-generation of personalized diagnostics and treatments for patients worldwide." />
	<meta property="og:image" content="https://nference.com/image/nference_logo.png" />
	<meta name="twitter:description" content="nference partners with medical centers to turn decades of rich and predominantly unstructured data captured in electronic medical records (EMR) into powerful software solutions that enable scientists to discover and develop the next-generation of personalized diagnostics and treatments for patients worldwide." />
	<meta name="twitter:title" content="nference - Powering quantum leaps in human health" />
  <meta property="twitter:image" content="https://nference.com/image/nferencelogo.jpg" />
	<meta itemprop="description" content="nference partners with medical centers to turn decades of rich and predominantly unstructured data captured in electronic medical records (EMR) into powerful software solutions that enable scientists to discover and develop the next-generation of personalized diagnostics and treatments for patients worldwide." />
	<meta itemprop="name" content="nference - Powering quantum leaps in human health" />
	<meta name="og:description" content="nference partners with medical centers to turn decades of rich and predominantly unstructured data captured in electronic medical records (EMR) into powerful software solutions that enable scientists to discover and develop the next-generation of personalized diagnostics and treatments for patients worldwide." />
	<meta property="og:title" content="nference - Powering quantum leaps in human health" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="twitter:card" content="summary_large_image"/>

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-120810493-7"
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-120810493-7', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  }
}

export default MyDocument
