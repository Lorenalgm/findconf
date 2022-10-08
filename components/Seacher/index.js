import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from './Searcher.module.css'

export default function Searcher() {
 const t = useTranslations("navbar");

 return (
  <div className={styles.containerSearch}>
    <h1 className={styles.themeTitle} >{t("theme_title")}</h1>
    <input className={styles.themeInput} type="text" placeholder={t("theme_input")} />
  </div>
 );
}