/**
 * @version 1.0.1
 * @author Trejocode - Sergio
 * @description Custom App para cargar SASS y Google Analytics
 */

import { useEffect } from "react";
import { useRouter } from "next/router";
import MDXProvider from "components/MDX/MDXProvider";
import * as gtag from "libs/ga";
import "sass/style.scss";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  /**
   * @description Escuchar los eventos del Router para inicializar GA
   */
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
  );
};

export default App;
