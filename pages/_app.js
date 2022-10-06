import Head from 'next/head';
import { NextIntlProvider } from "next-intl";
import Navbar from "../components/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
 return (
   <NextIntlProvider messages={pageProps.messages}>
      <Head>
        <title> Find Conf </title>
      </Head>

     <Navbar />
     <Component {...pageProps} />
   </NextIntlProvider>
 );
}

export default MyApp;