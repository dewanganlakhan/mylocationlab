/**
 * Internationalization Configuration
 * Tier 1 Core Languages: English, Spanish, French, German, and Portuguese (Brazilian).
 * Tier 2 (Batch One): Hindi and Indonesian.
 *
 * `hreflang` is the value emitted in hreflang alternate links and the <html lang>
 * attribute. It defaults to the locale key; override it when the URL prefix and the
 * BCP 47 tag differ (e.g. /pt/ pages target pt-BR).
 */

export const defaultLang = 'en' as const;

export const languages = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    locale: 'en_US',
    hreflang: 'en',
    dir: 'ltr',
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    locale: 'es_ES',
    hreflang: 'es',
    dir: 'ltr',
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    locale: 'fr_FR',
    hreflang: 'fr',
    dir: 'ltr',
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    locale: 'de_DE',
    hreflang: 'de',
    dir: 'ltr',
  },
  pt: {
    code: 'pt',
    name: 'Portuguese (Brazil)',
    nativeName: 'Português (Brasil)',
    flag: '🇧🇷',
    locale: 'pt_BR',
    hreflang: 'pt-BR',
    dir: 'ltr',
  },
  hi: {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳',
    locale: 'hi_IN',
    hreflang: 'hi',
    dir: 'ltr',
  },
  id: {
    code: 'id',
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
    flag: '🇮🇩',
    locale: 'id_ID',
    hreflang: 'id',
    dir: 'ltr',
  },
} as const;

export type SupportedLang = keyof typeof languages;

export const supportedLocales = Object.keys(languages) as SupportedLang[];

/**
 * Checks if a language code is supported.
 */
export function isSupportedLang(lang: string): lang is SupportedLang {
  return lang in languages;
}

/**
 * Extracts language code and clean path from any pathname.
 * e.g., '/es/tools/gps-coordinates/' -> { lang: 'es', cleanPath: '/tools/gps-coordinates/' }
 * e.g., '/tools/gps-coordinates/' -> { lang: 'en', cleanPath: '/tools/gps-coordinates/' }
 */
export function extractLocaleFromPath(pathname: string): { lang: SupportedLang; cleanPath: string } {
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const segments = normalized.split('/').filter(Boolean);

  if (segments.length > 0 && isSupportedLang(segments[0])) {
    const lang = segments[0] as SupportedLang;
    const remainingSegments = segments.slice(1);
    const cleanPath = remainingSegments.length === 0 ? '/' : `/${remainingSegments.join('/')}/`;
    return { lang, cleanPath };
  }

  return { lang: defaultLang, cleanPath: normalized.endsWith('/') ? normalized : `${normalized}/` };
}

/**
 * Helper to get language from URL object or string
 */
export function getLangFromUrl(url: URL | string): SupportedLang {
  const pathname = typeof url === 'string' ? url : url.pathname;
  return extractLocaleFromPath(pathname).lang;
}

/**
 * Strips the language prefix from a path if present.
 */
export function getCleanPath(pathname: string): string {
  return extractLocaleFromPath(pathname).cleanPath;
}

/**
 * Builds localized URL for any path given a target locale.
 * e.g., getLocalizedPath('/tools/gps-coordinates/', 'es') -> '/es/tools/gps-coordinates/'
 * e.g., getLocalizedPath('/es/tools/gps-coordinates/', 'en') -> '/tools/gps-coordinates/'
 * e.g., getLocalizedPath('/', 'es') -> '/es/'
 */
export function getLocalizedPath(pathname: string, targetLang: SupportedLang | string): string {
  const { cleanPath } = extractLocaleFromPath(pathname);
  const lang = isSupportedLang(targetLang) ? targetLang : defaultLang;

  if (lang === defaultLang) {
    return cleanPath === '' ? '/' : cleanPath;
  }

  return cleanPath === '/' ? `/${lang}/` : `/${lang}${cleanPath}`;
}

/**
 * Generates absolute alternate links for SEO hreflang headers/tags.
 */
export function getAlternateLinks(siteUrl: string, pathname: string) {
  const cleanPath = getCleanPath(pathname);
  const baseUrl = siteUrl.replace(/\/+$/, '');

  const alternates: { lang: string; href: string }[] = [
    { lang: 'x-default', href: `${baseUrl}${cleanPath}` },
  ];

  for (const code of supportedLocales) {
    const localizedPath = getLocalizedPath(cleanPath, code);
    alternates.push({
      lang: languages[code].hreflang,
      href: `${baseUrl}${localizedPath}`,
    });
  }

  return alternates;
}
