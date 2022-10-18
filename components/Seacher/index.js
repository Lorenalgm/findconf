import React, { useState, useEffect } from 'react'
import { useTranslations } from "next-intl";
import styles from './Searcher.module.css'

export default function Searcher({childToParent}) {
 const t = useTranslations("navbar");
 const [initialDate, setInitialDate] = useState('');
 const [endDate, setEndDate] = useState('');

 useEffect(() => {
  childToParent(initialDate, endDate);
}, [initialDate, endDate]);

 return (
  <div className={styles.containerSearch}>
    <h1 className={styles.themeTitle} >{t("theme_title")}</h1>
    
    <div className={styles.filters}>
      <span>
        <p>{t("initial_date")}:</p>
        <input className={styles.themeInput} type="date" onChange={e => setInitialDate(new Date(e.target.value))} />
      </span>

      <span>
        <p>{t("end_date")}:</p>
        <input className={styles.themeInput} onChange={e => setEndDate(new Date(e.target.value))} type="date" />
      </span>
    </div>
  </div>
 );
}