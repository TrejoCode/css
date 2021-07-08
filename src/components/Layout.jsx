/**
 * @version 1.0.2
 * @author Trejocode - Sergio
 * @description Componente <Layout />
 */

import Head from "next/head";
import Header from "./header";

/**
 * @description Plantilla general de la aplicación
 * @param { String } title: "meta name"
 * @param { String } description: "meta description"
 * @param { String } keywords: "meta keywords"
 */

const Layout = ({ title, description, keywords, children }) => {
  return (
    <div className="flex main column">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index" />
        <meta name="author" content="Trejocode" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#33c8a3" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title> {title ? title : "Core CSS"} </title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content={
            keywords
              ? keywords
              : "CSS, Flexbox, Core CSS, Flex Layout, Trejocode"
          }
        />
        <meta
          name="description"
          content={
            description
              ? description
              : "Hoja de estilos basada en flexbox para maquetar estructuras flexibles"
          }
        />
        {/* --- Open Graph --- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.trejocode.com/" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/trejocode/image/upload/v1599595751/Trejocode/corecss-min_m9v9tf.jpg"
        />
        <meta property="og:title" content={title ? title : "Core CSS"} />
        <meta
          property="og:description"
          content={
            description
              ? description
              : "Hoja de estilos basada en flexbox para maquetar estructuras flexibles"
          }
        />
        {/* -- IOS Meta -- */}
        <link rel="apple-touch-icon" href="/img/icons/icon-96.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Core CSS" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        {/* --- Twitter --- */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://www.trejocode.com" />
        <meta name="twitter:title" content={title ? title : "Core CSS"} />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/trejocode/image/upload/v1599595751/Trejocode/corecss-min_m9v9tf.jpg"
        />
        <meta
          name="twitter:description"
          content={
            description
              ? description
              : "Hoja de estilos basada en flexbox para maquetar estructuras flexibles"
          }
        />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
