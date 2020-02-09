import { availableLanguages } from '../support/available-languages';
import { PrismLanguage } from '../types';

const childSelector = '[class*="language-"], [class*="lang-"]';
const languageRegex = /lang(uage)*-([a-z0-9\-]*)/;

/**
 * Detects prism languages found as CSS classes on the children of a given element.
 *
 * Queries all child elements that have a `language-*` CSS class and returns
 * an array of the unique language names (the `*` values) that were found.
 *
 * Use case: get all languages of rendered markdown
 *
 * @param {Element} element a DOM element
 * @return {Array} an array of languages found inside `element`
 */
export function detectLanguages(element: HTMLElement): PrismLanguage[] {
  if (!element) {
    return [];
  }

  const elements = Array.from(element.querySelectorAll(childSelector));
  return elements.reduce((result, el) => {
    const matches = el.className.match(languageRegex);
    const language = matches && matches[2];
    if (
      availableLanguages.includes(language as PrismLanguage) &&
      !result.includes(language)
    ) {
      result.push(language);
    }
    return result;
  }, []);
}
