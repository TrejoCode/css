/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Configuraciones adicionales para Next.js
 */

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
});
