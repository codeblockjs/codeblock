import { Prism } from '../prism';

import { ApplyPrismOptions, PrismLanguage } from '../types';
import { detectLanguages } from './detect-languages';
import { getAutoloadPath } from '../autoload';

const log = {
  warn: (...args: any[]) => {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(...args);
    }
  },
  error: (...args: any[]) => {
    if (process.env.NODE_ENV !== 'production') {
      console.error(...args);
    }
  }
};
/**
 * Async function that loads and applies prism.
 *
 * @param {Object} element The target DOM element
 * @param {Object} options Options object
 * @param {Function} [options.prism] Required - a reference to the prismjs module itself
 * @param {String} [options.language] Name of the prism language to load
 * @param {String} [options.theme] Name of the prism theme to load
 * @param {Boolean} [options.container] Whether to treat the element as a container
 * @param {Boolean} [options.async] Whether to use a web worker for parsing the code
 * @param {Function} [options.onHighlight] Optional callback invoked after the highlighting is done
 */
export async function applyPrism(
  element: HTMLElement,
  options: ApplyPrismOptions
) {
  const languageMap = detectLanguages(element);
  const languages = Object.keys(languageMap) as PrismLanguage[];

  const isMounted = () => !!element;
  const run = (language: PrismLanguage) =>
    applyPrismLanguage(language, languageMap[language], options, isMounted);

  if (options.parallel) {
    await Promise.all(languages.map(language => run(language)));
  } else {
    for (const language of languages) {
      await run(language);
    }
  }
}

async function applyPrismLanguage(
  language: PrismLanguage,
  element: HTMLElement | HTMLElement[],
  options: ApplyPrismOptions,
  isMounted: () => boolean
) {
  if (!isMounted()) {
    return;
  }

  if (typeof options.providers.languages[language] !== 'function') {
    log.warn('>> Unsupported language', language);
    return;
  }

  if (!getAutoloadPath()) {
    try {
      await options.providers.languages[language]();
    } catch (error) {
      log.error('>> failed loading', { language, error });
      options?.onHighlightError?.(error);
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
        log.error('>> failed highlighting', { language, element, error });
        options?.onHighlightError(error);
      }
    });
  }
}
