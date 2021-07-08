/**
 * @version 1.1.0
 * @author Sergio - Trejocode
 * @description Custom config para GA
 */

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * @description Asignar la página actual al visor de GA
 * @param { String } url: URL actual
 * @url https://developers.google.com/analytics/devguides/collection/gtagjs/pages
 */
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};
