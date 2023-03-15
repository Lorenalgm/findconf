import React, { useState, useEffect } from 'react'
import { useTranslations } from "next-intl";
import styles from './Searcher.module.css'
import { useRouter } from "next/router";

export default function Searcher({childToParent}) {
 const t = useTranslations("navbar");
 const  router  = useRouter();

 return (
  <div className={styles.containerSearch}>
    <h1 className={styles.themeTitle} >{t("theme_title")}</h1>
    
    <div className={styles.filters}>
      <span>
        <p>{t("initial_date")}:</p>
        <input className={styles.themeInput} type="date" onChange={e => {
          router.replace({
            query: { ...router.query, initialDate: e.target.value },
          });
        }} />
      </span>

      <span>
        <p>{t("end_date")}:</p>
        <input className={styles.themeInput} onChange={e => {
          router.replace({
            query: { ...router.query,endDate: e.target.value },
          });
        }} type="date" />
      </span>
    </div>
  </div>
 );
}