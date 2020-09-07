/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Configuraciones adicionales para next.js, en función de server estáticamente
*/

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
});

module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx']
});