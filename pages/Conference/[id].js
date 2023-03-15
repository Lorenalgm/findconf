
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

export default function Conference() {
 const t = useTranslations("index");

 const  router  = useRouter();
console.log(router.query)

 return (
    <main className="conference_container">
      {/* <img src={conference.image_link || 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/party-popper_1f389.png'} alt='conference logo' />
      <div className="conference_info">
        <h3>{conference.title}</h3>
        <small>{format(parseISO(conference.initial_date), 'dd/MM')}</small>
        <span>{conference.type}</span>
          <span>{conference.price}</span>
          <span>{conference.language}</span>
          <span>{conference.field}</span>
          <span>{conference.description}</span>
      </div> */}
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