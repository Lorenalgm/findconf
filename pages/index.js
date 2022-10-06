
import { useTranslations } from "next-intl";
import Searcher from "../components/seacher";
import styles from '../styles/Home.module.css'
import data from './events.json';

export default function Home() {
 const t = useTranslations("index");

 return (
    <>
      <Searcher />
      <div className={styles.principalContainer}>
        <div className={styles.filtersContainer}>
            <p>{t("filter_type_attendance")}</p>
            <p>{t("filter_type_online")}</p>
            <p>{t("filter_type_blended")}</p>
            <p>{t("filter_price_free")}</p>
            <p>{t("filter_price_paid")}</p>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.fieldContainer}>
            <p>{t("field_all")}</p>
            <p>{t("field_developer")}</p>
            <p>{t("field_product")}</p>
            <p>{t("field_user_experience")}</p>
            <p>{t("field_user_infra")}</p>
            <p>{t("field_user_data")}</p>
          </div>
          <div className={styles.conferencesContainer}>
            {data.conferences.length > 0 && data.conferences.map((item) => {
              return <div className={styles.conferenceCard} key={item.id}> {item.field} </div>
            })}
              
          </div>
        </div>
      </div>
    </>
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