import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LocaleSwitcher() {
  const { locales, locale, pathname, query, asPath } = useRouter();
  const t = useTranslations("navbar");
  function getFlag(locale) {
    switch (locale) {
      case 'pt-BR':
        return '🇧🇷'
      case 'en-US':
        return '🇺🇸'
      case 'es-ES':
        return '🇪🇸'
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