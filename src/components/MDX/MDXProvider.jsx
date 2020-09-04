import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const Provider = ({ children }) => (
    <MDXProvider>
        { children }
    </MDXProvider>
);

export default Provider;