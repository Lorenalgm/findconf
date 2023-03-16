
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { format, parseISO } from 'date-fns';
import styles from './conference.module.css'
import data from '../events.json';

export default function Conference() {
 const t = useTranslations("index");

 const  router  = useRouter();
 let conference = router.query.conference;

 if(conference){
   conference = JSON.parse(conference);
 }else{
   const id = router.query.id;
   conference = data.conferences.find(event => event.id = id);
 }

 return (
    <main className={styles.conferenceContainer}>
      <img className={styles.conferenceImage} src={conference.image_link} alt='conference logo' />
        <div className={styles.conferenceInfo}>
        <h3>{conference.title}</h3>
        <small>{format(parseISO(conference.initial_date), 'dd/MM')}</small>
        {conference.end_date && <small>{format(parseISO(conference.end_date), 'dd/MM')}</small>}
        <span>{conference.type}</span>
          <span>{conference.price}</span>
          <span>{conference.language}</span>
          <span>{conference.field}</span>
          <span>{conference.description}</span>
          <span>{conference.location}</span>
      </div>
    </main>
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

export const getStaticPaths = async () => {

    return {
        paths: [],
        fallback: 'blocking'
    }
}