import { Prism } from '../prism';

import { ApplyPrismOptions, PrismLanguage } from '../types';
import { detectLanguages } from './detect-languages';
import { getAutoloadPath } from '../autoload';

/**
 * Async function that applies prism highlighting to a given element and its children.
 * Returns a promise that is resolved when the operation is complete.
 *
 * @param {Object} element The target DOM element
 * @param {Object} options Options object
 * @param {Boolean} [options.parallel] When multiple languages were detected: Whether to load and apply all languages in parallel
 * @param {Boolean} [options.async] Whether to use Web Workers for async highlighting. See https://prismjs.com/extending.html#api
 * @param {Function} [options.onHighlight] Optional callback invoked after highlighting was applied on an element
 * @param {Function} [options.onHighlightError] Optional callback invoked after an error happen during highlighting an element
 */
export async function applyPrism(
  element: HTMLElement,
  options: ApplyPrismOptions
): Promise<void> {
  const languageMap = detectLanguages(element);
  const languages = Object.keys(languageMap) as PrismLanguage[];

  const isMounted = () => !!element;
  const run = (language: PrismLanguage) =>
    highlight(languageMap[language], language, options, isMounted);

  if (options.parallel) {
    await Promise.all(languages.map(language => run(language)));
  } else {
    for (const language of languages) {
      await run(language);
    }
  }
}

export async function highlight(
  element: HTMLElement | HTMLElement[],
  language: PrismLanguage,
  options: ApplyPrismOptions,
  isMounted: () => boolean
) {
  if (!isMounted()) {
    return;
  }

  if (typeof options.providers.languages[language] !== 'function') {
    process.env.NODE_ENV !== 'production' &&
      console.warn('[apply-prism] provider not found:', language);
    return;
  }

  if (!getAutoloadPath()) {
    try {
      await options.providers.languages[language]();
    } catch (error) {
      process.env.NODE_ENV !== 'production' &&
        console.error('[apply-prism] failed loading:', language, error);
      options.onHighlightError?.(error);
      return;
    }
  }

  if (isMounted()) {
    const elements = Array.isArray(element)
      ? (element as HTMLElement[])
      : [element];
    elements.forEach(element => {
      try {
        Prism.highlightElement(element, options.async, options.onHighlight);
      } catch (error) {
        process.env.NODE_ENV !== 'production' &&
          console.error('[apply-prism] failed:', language, element, error);
        options.onHighlightError?.(error);
      }
    });
  }
}
