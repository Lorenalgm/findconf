
import { useTranslations } from "next-intl";
import Searcher from "../components/Seacher";
import styles from '../styles/Home.module.css'
import data from './events.json';
import React, { useState, useEffect } from 'react'
import Link from "next/link";

export default function Home() {
 const t = useTranslations("index");
 const [events, setEvents] = useState([]);
 const [field, setField] = useState('');
 const [type, setType] = useState('');
 const [price, setPrice] = useState('');
 const [language, setLanguage] = useState('');

 useEffect(() => {
    let orderEvents = data.conferences.sort((a, b) => new Date(a.inicial_date) - new Date(b.inicial_date))
    
    if(field){
      orderEvents = orderEvents.filter(event => { return event.field === field;  });
    }

    if(type){
      orderEvents = orderEvents.filter(event => { return event.type === type;  });
    }

    if(price){
      orderEvents = orderEvents.filter(event => { return event.price === price;  });
    }

    if(language){
      orderEvents = orderEvents.filter(event => { return event.language === language;  });
    }
    
    setEvents(orderEvents);

 }, [field,type,price, language]);

 return (
    <>
      <Searcher />
      <div className={styles.principalContainer}>
        <div className={styles.filtersContainer}>
            <div className="typeFilter">
              <Link href="#"><a className={styles.filter} onClick={e => setType(null)}>{t("filter_type_all")}</a></Link>
              <Link href="#"><a className={styles.filter} onClick={e => setType(t("filter_type_attendance"))}>{t("filter_type_attendance")}</a></Link>
              <Link href="#"><a className={styles.filter} onClick={e => setType(t("filter_type_online"))}>{t("filter_type_online")}</a></Link>
              <Link href="#"><a className={styles.filter} onClick={e => setType(t("filter_type_blended"))}>{t("filter_type_blended")}</a></Link>
            </div>
            <div className="pricesFilter">
              <Link href="#"><a className={styles.filter} onClick={e => setPrice(null)}>{t("filter_price_all")}</a></Link>
              <Link href="#"><a className={styles.filter} onClick={e => setPrice(t("filter_price_free"))}>{t("filter_price_free")}</a></Link>
              <Link href="#"><a className={styles.filter} onClick={e => setPrice(t("filter_price_paid"))}>{t("filter_price_paid")}</a></Link>
            </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.fieldContainer}>
            <Link href="#"><a className={styles.filter} onClick={e => setField(null)}>{t("field_all")}</a></Link>
            <Link href="#"><a className={styles.filter} onClick={e => setField(t("field_developer"))}>{t("field_developer")}</a></Link>
            <Link href="#"><a className={styles.filter} onClick={e => setField(t("field_product"))}>{t("field_product")}</a></Link>
            <Link href="#"><a className={styles.filter} onClick={e => setField(t("field_user_experience"))}>{t("field_user_experience")}</a></Link>
            <Link href="#"><a className={styles.filter} onClick={e => setField(t("field_user_infra"))}>{t("field_user_infra")}</a></Link>
            <Link href="#"><a className={styles.filter} onClick={e => setField(t("field_user_data"))}>{t("field_user_data")}</a></Link>
          </div>
          <div className={styles.conferencesContainer}>
            {events.length > 0 && events.map((item) => {
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