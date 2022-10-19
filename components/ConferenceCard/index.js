
import styles from './conferenceCard.module.css'
import { FormatService } from "../../src/services/FormatService";
import { format, parseISO } from 'date-fns';

export default function ConferenceCard({ conference }) {
    return (
        <div className={styles.conferenceCard}>
            <div className={styles.header}>
                <img src='https://github.com/lumamontes.png' alt='conference logo' />
                <h3>{conference.title}</h3>
                <small>{format(parseISO(conference.inicial_date), 'dd/MM')}</small>
            </div>

            <div className={styles.label}>
                <span>{conference.type}</span>
                <span>{conference.price}</span>
                <span>{conference.language}</span>
                <span>{conference.field}</span>
            </div>
            {conference.description != '' && <p>{FormatService.limitText(conference.description, 70)}</p>}

            <button className={styles.button}>Visitar evento</button>
        </div>
    )
}