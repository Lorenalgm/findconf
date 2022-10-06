import Head from 'next/head';
import { NextIntlProvider } from "next-intl";
import Navbar from "../components/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
 return (
   <NextIntlProvider messages={pageProps.messages}>
      <Head>
        <title> Find Conf </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>

     <Navbar />
     <Component {...pageProps} />
   </NextIntlProvider>
 );
}

export default MyApp;