import React from "react";
import Link from "next/link";
import LocaleSwitcher from "./locale-switcher";
import { useTranslations } from "next-intl";
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
 const t = useTranslations("navbar");

 return (
  <header className={styles.navbarContainer}>
    <h1 className={styles.title}>Find Conf</h1>

    <nav className={styles.navbar}>
        <div>
          <LocaleSwitcher />
        </div>
          <a href='https://github.com/Lorenalgm/findconf' target="_blank" className={styles.button}>{t("event")}</a>
      </nav>
   </header>
 );
}