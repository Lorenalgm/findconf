import React from 'react';
import styles from './DrawerContent.module.css'
import { format, parseISO } from 'date-fns';

const DrawerContent = ({ conference, hideConference}) => {
  return (
   <>
      <div className={styles.backgroundDrawer} onClick={() => hideConference()}></div>
      <div className={styles.drawerContainer}>
        <main className={styles.conferenceContainer}>
          <img src={conference.image_link || 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/party-popper_1f389.png'} alt='conference logo' />
          <h3>{conference.title}</h3>
          <p>{conference.description}</p>
          <small>{format(parseISO(conference.initial_date), 'dd/MM')}</small>
          <span>{conference.type}</span>
          <span>{conference.price}</span>
          <span>{conference.language}</span>
          <span>{conference.field}</span>
        </main>
      </div>
   </>
  );
};

export default DrawerContent;