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
        break;
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
      {locales.map((locale) => {
        return (
          <Link
            key={locale}
            href={{ pathname, query }}
            as={asPath}
            locale={locale}
          >
            <a>  {getFlag(locale)} </a>
          </Link>
        );
      })}
    </>
  );
}