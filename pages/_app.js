import { NextIntlProvider } from "next-intl";
import Navbar from "../components/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
 return (
   <NextIntlProvider messages={pageProps.messages}>
     <Navbar />
     <Component {...pageProps} />
   </NextIntlProvider>
 );
}

export default MyApp;