/**
 * @version 1.0.2
 * @author Trejocode - Sergio
 * @description Plantilla HTML inicial
 */

import Document, { Html, Head, Main, NextScript } from "next/document";

class DocumentHTML extends Document {
  render() {
    return (
      <Html lang="es-MX">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500,600,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DocumentHTML;
