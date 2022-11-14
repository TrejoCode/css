/**
 * @version 1.0.1
 * @author Trejocode - Sergio
 * @description Custom App para cargar SASS y Google Analytics
 */

import { useEffect } from "react";
import splitbee from "@splitbee/web";
import MDXProvider from "components/MDX/MDXProvider";
import "sass/style.scss";

const App = ({ Component, pageProps }) => {
  // Inicializar Splitbee analytics
  useEffect(() => {
    splitbee.init({
      scriptUrl: "/bee.js",
      apiUrl: "/_hive",
    });
  }, []);

  return (
    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
  );
};

export default App;
