import React from 'react'
import styles from './conferenceCard.module.css'
import { FormatService } from "../../src/services/FormatService";
import { format, parseISO } from 'date-fns';
import { useTranslations } from "next-intl";
import Link from 'next/link';

export default function ConferenceCard({ conference }) {
    const t = useTranslations("event");

    return (
        <Link 
            href={{
                pathname: `/conference/${conference.id}`,
                query: { conference: JSON.stringify(conference) }
            }}

            as={`/conference/${conference.id}`}
          
            >
            <div className={styles.conferenceCard} >
                <small>{conference.initial_date?format(parseISO(conference.initial_date), 'dd/MM'):'Não definido'} - {conference.field}</small>
                <h3 className={styles.title}>{FormatService.limitText(conference.title, 50)}</h3>                
                {conference.description != '' && <p>{FormatService.limitText(conference.description, 70)}</p>}
                <div className={styles.label}>
                    <span>{conference.type}</span>
                    <span>{conference.price}</span>
                </div>
            </div>
        </Link>
    )
}