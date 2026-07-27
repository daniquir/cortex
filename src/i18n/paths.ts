import { defaultLang, LANGUAGES, type Lang } from './translations';

export function getBase(): string {
  const base = import.meta.env.BASE_URL;
  return base.endsWith('/') ? base : `${base}/`;
}

/** Prefix for a language path segment (`''` for English, `'es/'` for Spanish, …). */
export function langPrefix(lang: Lang): string {
  return lang === defaultLang ? '' : `${lang}/`;
}

/**
 * Build a localized href. `path` is relative to the language root
 * (e.g. `''`, `'docs/'`, `'docs/install/'`, `'changelog/'`).
 */
export function langHref(lang: Lang, path = ''): string {
  const clean = path.replace(/^\//, '');
  return `${getBase()}${langPrefix(lang)}${clean}`;
}

/** Non-default languages used for dynamic `[lang]` routes. */
export const localizedLangs: Lang[] = LANGUAGES
  .map((l) => l.code)
  .filter((code): code is Lang => code !== defaultLang);

/**
 * Rewrite the current pathname to the same page in `targetLang`.
 * Strips the site base and any existing language prefix first.
 */
export function switchLangPath(currentPathname: string, targetLang: Lang): string {
  const baseNoSlash = getBase().replace(/\/$/, '');
  let rest = currentPathname;
  if (rest.startsWith(baseNoSlash)) {
    rest = rest.slice(baseNoSlash.length);
  }
  rest = rest.replace(/^\//, '');

  for (const { code } of LANGUAGES) {
    if (code === defaultLang) continue;
    if (rest === code || rest.startsWith(`${code}/`)) {
      rest = rest.slice(code.length).replace(/^\//, '');
      break;
    }
  }

  return langHref(targetLang, rest);
}
