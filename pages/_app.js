import Head from 'next/head';
import { NextIntlProvider } from "next-intl";
import "../styles/globals.css";
import Script from 'next/script';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
 return (
   <NextIntlProvider messages={pageProps.messages}>
      <Head>
        <title> Find Conf </title>
      </Head>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.GOOGLE_CODE}`}/>
      <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-${process.env.GOOGLE_CODE}', {
      page_path: window.location.pathname,
      });
      `,
      }} />
     <Layout>
      <Component {...pageProps} />
     </Layout>
   </NextIntlProvider>
 );
}

export default MyApp;