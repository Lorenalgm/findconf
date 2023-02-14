import React from 'react'
import styles from './conferenceCard.module.css'
import { FormatService } from "../../src/services/FormatService";
import { format, parseISO } from 'date-fns';
import { useTranslations } from "next-intl";

export default function ConferenceCard({ conference, showConference }) {
    const t = useTranslations("event");

    return (
        <div className={styles.conferenceCard} onClick={() => showConference(conference)}>
            <small>{conference.initial_date?format(parseISO(conference.initial_date), 'dd/MM'):'Não definido'} - {conference.field}</small>
            <h3 className={styles.title}>{FormatService.limitText(conference.title, 50)}</h3>                
            {conference.description != '' && <p>{FormatService.limitText(conference.description, 70)}</p>}
            <div className={styles.label}>
                <span>{conference.type}</span>
                <span>{conference.price}</span>
            </div>
        </div>
    )
}