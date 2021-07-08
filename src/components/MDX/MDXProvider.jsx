/**
 * @version 1.0.2
 * @author Trejocode - Sergio
 * @description Provedor de características de MDX
 */

import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "components/MDX/CodeBlock";

const components = {
  // eslint-disable-next-line react/display-name
  pre: (props) => <div {...props} />,
  code: CodeBlock,
};

const Provider = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <main>{children}</main>
    </MDXProvider>
  );
};

export default Provider;
