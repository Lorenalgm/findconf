import React from 'react'
import styles from './conferenceCard.module.css'
import { FormatService } from "../../src/services/FormatService";
import { format, parseISO } from 'date-fns';
import { useTranslations } from "next-intl";
import Link from 'next/link'

export default function ConferenceCard({ conference }) {
    const t = useTranslations("event");

    return (
        <div className={styles.conferenceCard}>
            <div className={styles.header}>
                <img src={conference.image_link || 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/party-popper_1f389.png'} alt='conference logo' />
                <h3>{conference.title}</h3>
                <small>{format(parseISO(conference.initial_date), 'dd/MM')}</small>
            </div>

            <div className={styles.label}>
                <span>{conference.type}</span>
                <span>{conference.price}</span>
                <span>{conference.language}</span>
                <span>{conference.field}</span>
            </div>
            {conference.description != '' && <p>{FormatService.limitText(conference.description, 70)}</p>}
            <Link className={styles.button}
            href={`/conference/${encodeURIComponent(conference.id)}`}
            >{t("button_open_details")}</Link>
        </div>
    )
}