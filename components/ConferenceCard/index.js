import React from 'react'
import styles from './conferenceCard.module.css'
import { FormatService } from "../../src/services/FormatService";
import { format, parseISO } from 'date-fns';
import { useTranslations } from "next-intl";

export default function ConferenceCard({ conference }) {
    const t = useTranslations("event");

    return (
        <div className={styles.conferenceCard}>
            <div className={styles.header}>
                <img src={conference.image_link || 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/party-popper_1f389.png'} alt='conference logo' />
                <h3>{FormatService.limitText(conference.title, 50)}</h3>
                <small>{conference.initial_date?format(parseISO(conference.initial_date), 'dd/MM'):'Não definido'}</small>
            </div>

            <div className={styles.label}>
                <span>{conference.type}</span>
                <span>{conference.price}</span>
                <span>{conference.language}</span>
                <span>{conference.field}</span>
            </div>
            {conference.description != '' && <p>{FormatService.limitText(conference.description, 70)}</p>}
        </div>
    )
}