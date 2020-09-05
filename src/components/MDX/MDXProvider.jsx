/**
 * @version 1.0.1
 * @author Trejocode - Sergio
 * @description Provedor de características de MDX
*/

import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from '../MDX/CodeBlock';

const Provider = ({ children }) => {

    const components = {
        pre: props => <div {...props} />,
        code: CodeBlock
    };

    return(
        <MDXProvider components={components}>
            <main>
                { children }
            </main>
        </MDXProvider>
    );

};

export default Provider;