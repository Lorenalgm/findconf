
import { useTranslations } from "next-intl";
import styles from '../styles/Home.module.css'
import data from './events.json';
import React, { useState, useEffect } from 'react'
import Link from "next/link";
import ConferenceCard from "../components/ConferenceCard";
import { useRouter } from "next/router";


export default function Home() {
  const t = useTranslations("index");
  const [events, setEvents] = useState([]);
  const  router  = useRouter();
  const { field, type, price, language, initialDate, endDate } = router.query;

  useEffect(() => {
    let orderEvents = data.conferences.sort((a, b) => new Date(a.initial_date) - new Date(b.initial_date))
        
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

        if(initialDate){
        orderEvents = orderEvents.filter(event => { return new Date(event.initial_date) >= new Date(initialDate); });
        }

        if(endDate){
        orderEvents = orderEvents.filter(event => { 
            if(event.end_date){
            return new Date(event.end_date) <= new Date(endDate)
            }else{
            return new Date(event.initial_date) <= new Date(endDate);
            }
        });
        }
        
        setEvents(orderEvents);
  }, [ field, type, price, language, initialDate, endDate ]);

  return (
      <>
        <div className={styles.conferencesContainer}>
        {events.length > 0 && events.map((item) => {
          return  <ConferenceCard conference={item} key={item.id} />
        })} 
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
       ...require(`../messages/conference/${locale}.json`),
     },
   },
 };
}