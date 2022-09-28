import { useTranslations } from "next-intl";

export default function Home() {
 const t = useTranslations("index");

 return (
   <div>
     <h2>Início</h2>
     <h1>{t("heading")}</h1>
     <p>{t("content")}</p>
     <h2>Fim</h2>
   </div>
 );
}

export function getStaticProps({ locale }) {
 return {
   props: {
     messages: {
       ...require(`../messages/index/${locale}.json`),
       ...require(`../messages/navbar/${locale}.json`),
     },
   },
 };
}