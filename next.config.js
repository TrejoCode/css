/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Configuraciones adicionales para Next.js
 */

// Funciones de reescritura compatibles con splitbee analytics
const rewrites = async () => [
  {
    source: "/bee.js",
    destination: "https://cdn.splitbee.io/sb.js",
  },
  {
    source: "/_hive/:slug",
    destination: "https://hive.splitbee.io/:slug",
  },
];

const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx"],
  rewrites,
};

const mdxConfig = {
  extension: /.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
};

const withMDX = require("@next/mdx")(mdxConfig);

module.exports = withMDX({ ...nextConfig });
