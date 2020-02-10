import { PrismLanguage, LanguageElementMap } from '../types';

export const languageSelector = '[class*="language-"], [class*="lang-"]';
export const languageRegExp: RegExp = /lang(uage)*-([a-z]*)/;

/**
 * Takes DOM elements and returns an object where each key of a property
 * is a detected language while the value is an array of elements with that language.
 *
 * If given an
 *
 * @param {HTMLElement[]} els
 */
export function detectLanguages(...els: HTMLElement[]): LanguageElementMap {
  if (Array.isArray(els)) {
    return els.reduce((result, el) => {
      const lang = getLanguage(el);
      if (lang) {
        if (result[lang]) {
          result[lang].push(el);
        } else {
          result[lang] = [el];
        }
      }
      return result;
    }, {});
  }
}

/**
 * Queries a list of child elements that contain `language-*` in their CSS class.
 * @param element
 */
export function getChildrenWithLanguage(element: HTMLElement): HTMLElement[] {
  return Array.from(element.querySelectorAll(languageSelector));
}

/**
 * Returns a list of unique languages found in the CSS classes of the given DOM elements.
 * @param elements
 */
export function getLanguages(elements: HTMLElement[]): PrismLanguage[] {
  return Object.keys(detectLanguages(...elements)) as PrismLanguage[];
}

/**
 * Returns the prism language defined in the CSS class of a given DOM element.
 * @param element the DOM element
 */
export function getLanguage(element: HTMLElement): PrismLanguage | null {
  const matches = element.className.match(languageRegExp);
  const language = matches && matches[2];
  return language as PrismLanguage;
}
