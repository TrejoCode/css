/**
 * @version 1.0.0
 * @author Trejocode - Sergio
 * @description Custom App para cargar SASS y GA
*/

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as ga       from '../helpers/ga';
import '../sass/style.scss';    

const App = ({ Component, pageProps }) => {

    const router = useRouter();

    /**
     * @description Escuchar los eventos del Router para inicializar GA
    */
    useEffect(() => {

        router.events.on('routeChangeComplete', (url) => {
            ga.pageview(url);
        });
        

    }, []);

    return <Component { ...pageProps } />

};
    
export default App;