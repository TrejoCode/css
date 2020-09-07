/**
 * @version 1.0.1
 * @author Trejocode - Sergio
 * @description Componente de parseo de fragmento de código a HTML mediante Prism
*/

import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';

const CodeBlock = ({children, className}) => {

	const language = className.replace(/language-/, '');

	return(
		<Highlight { ...defaultProps } code = { children } theme = { theme } language = { language }>
			{({ className, style, tokens, getLineProps, getTokenProps }) => 
				<pre className = { className } style = {{ ...style, padding: '20px' }}>
					{ tokens.map((line, i) => 
						<div key = {i} { ...getLineProps({ line, key: i }) }>
							{ line.map((token, key) => 
								<span key = { key } { ...getTokenProps({token, key}) } />
							)}
						</div>
					)}
				</pre>
			}
		</Highlight>
	);
};

export default CodeBlock;