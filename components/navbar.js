import React from "react";
import Link from "next/link";
import LocaleSwitcher from "./locale-switcher";
import { useTranslations } from "next-intl";

export default function Navbar() {
 const t = useTranslations("navbar");

 return (
   <nav>
     <Link href="/">
       <a>{t("home")}</a>
     </Link>
     <Link href="/ssg">
       <a>{t("ssg")}</a>
     </Link>
     <Link href="/ssr">
       <a>{t("ssr")}</a>
     </Link>
     <LocaleSwitcher />
   </nav>
 );
}