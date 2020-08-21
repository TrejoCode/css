/**
 * @version 1.0.1
 * @author Trejocode - Sergio
 * @description Plantilla HTML inicial
*/

import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../helpers/ga';

class DocumentHTML extends Document {

	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
  	}

	render() {
		return (
			<Html lang="es-MX">
				<Head />
				<body>
					<Main />
					<NextScript />
					<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
					<script
						dangerouslySetInnerHTML = {{
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
				</body>
			</Html>
		);
	}
}

export default DocumentHTML;