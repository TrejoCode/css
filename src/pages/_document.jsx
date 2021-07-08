/**
 * @version 1.0.2
 * @author Trejocode - Sergio
 * @description Plantilla HTML inicial
 */

import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "libs/ga";

class DocumentHTML extends Document {
  render() {
    return (
      <Html lang="es_MX">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500,600,700&display=swap"
            rel="stylesheet"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', '${GA_TRACKING_ID}', {
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
    );
  }
}

export default DocumentHTML;
