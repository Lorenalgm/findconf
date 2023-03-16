
import { useTranslations } from "next-intl";
import Searcher from "../Seacher";
import styles from '../../styles/Home.module.css'
import Link from "next/link";
import Navbar from "../Navbar";
import { useRouter } from "next/router";

export default function Layout({ children }) {
 const t = useTranslations("index");
const  router  = useRouter();

 return (
    <>
      <Navbar />
      <Searcher />
      <div className={styles.principalContainer}>
        <div className={styles.filtersContainer}>
            <div className="typeFilter">
              <Link className={styles.filter} href={{
               pathname: '/',
                query: { ...router.query, type: null } }} passHref shallow replace >
                  {t("filter_type_all")}
              </Link>
              
              <Link className={styles.filter} href={{
               pathname: '/',
                query: { ...router.query, type: t("filter_type_attendance") } }} passHref shallow replace >
                  {t("filter_type_attendance")}
              </Link>

              <Link className={styles.filter} href={{
               pathname: '/',
                query: { ...router.query, type: t("filter_type_online") } }} passHref shallow replace >
                  {t("filter_type_online")}
              </Link>

              <Link className={styles.filter} href={{
               pathname: '/',
                query: { ...router.query, type: t("filter_type_blended") } }} passHref shallow replace >
                  {t("filter_type_blended")}
              </Link>
            </div>
            <div className="pricesFilter">
              <Link className={styles.filter} href={{
               pathname: '/',
                query: { ...router.query, price: null } }} passHref shallow replace >
                  {t("filter_price_all")}
              </Link>

              <Link className={styles.filter} href={{
               pathname: '/',
                query: { ...router.query, price: t("filter_price_free") } }} passHref shallow replace >
                  {t("filter_price_free")}
              </Link>

              <Link className={styles.filter} href={{
               pathname: '/',
                query: { ...router.query, price: t("filter_price_paid") } }} passHref shallow replace >
                  {t("filter_price_paid")}
              </Link>
            </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.fieldContainer}>
            <Link className={styles.filter} href={{
                pathname: '/',
                query: { ...router.query, field: null } }} passHref shallow replace >
                  {t("field_all")}
            </Link>

            <Link className={styles.filter} href={{
                pathname: '/',
                query: { ...router.query, field: t("field_developer") } }} passHref shallow replace >
                  {t("field_developer")}
            </Link>

            <Link className={styles.filter} href={{
               pathname: '/',
                query: { ...router.query, field: t("field_product") } }} passHref shallow replace >
                  {t("field_product")}
            </Link>

            <Link className={styles.filter} href={{
               pathname: '/',
                query: { ...router.query, field: t("field_user_experience") } }} passHref shallow replace >
                  {t("field_user_experience")}
            </Link>
            
            <Link className={styles.filter} href={{
               pathname: '/',
                query: { ...router.query, field: t("field_user_infra") } }} passHref shallow replace >
                  {t("field_user_infra")}
            </Link>

            <Link className={styles.filter} href={{
               pathname: '/',
                query: { ...router.query, field: t("field_user_data") } }} passHref shallow replace >
                  {t("field_user_data")}
            </Link>
          </div>
          {children}
        </div>
      </div>
    </>
 );
}

export function getStaticProps({ locale }) {
 return {
   props: {
     messages: {
       ...require(`../../messages/index/${locale}.json`),
       ...require(`../../messages/navbar/${locale}.json`),
       ...require(`../../messages/conference/${locale}.json`),
     },
   },
 };
}