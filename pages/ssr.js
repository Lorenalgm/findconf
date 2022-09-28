import { useTranslations } from "next-intl";

export default function Page() {
 const t = useTranslations("ssr");

 return (
   <div>
     <h2>From next-intl</h2>
     <h1>{t("heading")}</h1>
     <p>{t("content")}</p>
   </div>
 );
}

export const getServerSideProps = ({ locale, locales }) => {
 return {
   props: {
     messages: {
       ...require(`../messages/ssr/${locale}.json`),
       ...require(`../messages/navbar/${locale}.json`),
     },
   },
 };
};