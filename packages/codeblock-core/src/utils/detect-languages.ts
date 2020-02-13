import { PrismLanguage, LanguageElementMap } from '../types';

export const languageSelector = '[class*="language-"], [class*="lang-"]';
export const languageRegExp: RegExp = /lang(uage)*-([a-z]*)/;

/**
 * Takes one or more DOM elements and returns a `{[lang]: elements[]}` object where
 * each key is a detected language and each value is an array of the elements with that language.
 *
 * @param {HTMLElement[]} elements
 * @return a map of languages and elements
 */
export function detectLanguages(
  ...elements: HTMLElement[]
): LanguageElementMap {
  const collectChildren = (result: LanguageElementMap, el: HTMLElement) => {
    const lang = getLanguage(el);
    if (lang) {
      if (result[lang]) {
        result[lang].push(el);
      } else {
        result[lang] = [el];
      }
      // when the element itself has a language, do not check for children
      return result;
    }

    const children = getChildrenWithLanguage(el);
    return children.reduce(
      (result, child) => collectChildren(result, child),
      result
    );
  };
  return elements.reduce((result, el) => {
    result = collectChildren(result, el);
    return result;
  }, {});
}

/**
 * Finds an element's children that have a `language-*` CSS class
 * @param element
 * @return array of child elements
 */
export function getChildrenWithLanguage(element: HTMLElement): HTMLElement[] {
  return Array.from(element.querySelectorAll(languageSelector));
}

/**
 * Returns the prism language from an element's CSS class or `null`.
 * @param element the DOM element
 * @return the prism language or `null`.
 */
export function getLanguage(element: HTMLElement): PrismLanguage | null {
  const matches = element.className.match(languageRegExp);
  const language = matches && matches[2];
  return language as PrismLanguage;
}
