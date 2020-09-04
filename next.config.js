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

// const withPWA = require('next-pwa');
// const runtimeCaching = require('next-pwa/cache');

// module.exports = withPWA({
//     pwa: { dest: 'public', runtimeCaching },
//     exportPathMap: async function(defaultPathMap,{ dev, dir, outDir, distDir, buildId }) {
//         return {
//             '/': { page: '/' },
//             '/portafolio': { page: '/portafolio' },
//             '/politicas': { page: '/politicas' }
//         }
//     },
//     exportTrailingSlash: true,
// });