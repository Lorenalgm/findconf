import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LocaleSwitcher() {
  const { locales, locale, pathname, query, asPath } = useRouter();
  const t = useTranslations("navbar");
  function getFlag(locale) {
    switch (locale) {
      case 'pt-BR':
        return 'π§π·'
      case 'en-US':
        return 'πΊπΈ'
      case 'es-ES':
        return 'πͺπΈ'
      default:
        break;
    }
  }

  return (
    <>
      {locales.map((item) => {
        return (
          <Link
            key={item}
            href={{ pathname, query }}
            as={asPath}
            locale={item}
          >
            <a  className={item === locale? 'locale-active' : ''}>  {getFlag(item)} </a>
          </Link>
        );
      })}
    </>
  );
}