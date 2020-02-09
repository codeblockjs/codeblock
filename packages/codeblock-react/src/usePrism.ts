import React from 'react';
import {
  CodeblockPrismConfig,
  PrismLanguage,
  PrismHighlighter
} from '@loopmode/codeblock-core/types';
import { detectLanguages } from '@loopmode/codeblock-core';

export interface UsePrismOptions {
  config?: CodeblockPrismConfig;
  language?: PrismLanguage;
  isContainer?: boolean;

  /**
   * Whether to use Web Workers for async highlighting.
   *
   * See https://prismjs.com/extending.html#api
   */
  async?: boolean;
  /**
   * A callback to be invoked after highlighting is done. Receives the highlighted element.
   *
   * Note that when in `container` mode, this is invoked once for each detected language.
   */
  callback?: Prism.HighlightCallback;

  /**
   * A callback that is invoked in `container` mode after all detected languages have been applied.
   */
  containerCallback?: Prism.HighlightCallback;
}

/**
 * Highlights code in the target element using prismjs.
 *
 * Loads prismjs itself, the specified theme and the specified or auto-detected languages.
 *
 * If the element is not the actual target but a container of possible targets (e.g. you render a markdown file, that may contain any codeblocks),
 * use the `{container: true}` option to automatically detect languages and run  `Prism.highlightAllUnder` instead of `Prism.highlightElement`.
 *
 * If you need to display large amounts of code, set the `{async: true}` option to use a worker for parsing.
 *
 * Check out the [prism documentation](https://prismjs.com/extending.html#api) for more details on the `async` and `callback` options.
 *
 */
export default function usePrism(
  ref: React.MutableRefObject<HTMLElement>,
  options: UsePrismOptions
) {
  React.useEffect(() => {
    try {
      if (ref.current) {
        applyPrism(ref.current, options);
      }
    } catch (error) {
      console.warn('[codeblock] usePrism failed', { error });
    }
  }, [ref.current, ...Object.values(options)]);
}

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
 * @param {Function} [options.callback] Optional callback invoked after the highlighting is done
 */
export async function applyPrism(
  element: HTMLElement,
  options: UsePrismOptions
) {
  const stillMounted = () => !!element;

  let Prism: PrismHighlighter;

  try {
    Prism = await options.config.prism();
    (window as any).Prism = Prism;
  } catch (error) {
    console.error('>> failed to load prismjs', { error });
  }

  if (options.language) {
    const loader = options.config.languages[options.language];
    if (typeof loader === 'function') {
      try {
        await loader();
        if (stillMounted()) {
          Prism.highlightElement(element, options.async, options.callback);
        }
      } catch (error) {
        console.error('>> failed for provided language', options.language, {
          element,
          error,
          options
        });
      }
    }
  }

  if (options.isContainer) {
    const detected = detectLanguages(element);
    for (const lang of detected) {
      if (stillMounted()) {
        const loader = options.config.languages[options.language];
        if (typeof loader === 'function') {
          try {
            await loader();
            if (stillMounted()) {
              Prism.highlightAllUnder(element, options.async, options.callback);
            }
          } catch (error) {
            console.error('>> failed for detected language', lang, {
              element,
              error,
              options
            });
          }
        }
      }
    }

    if (stillMounted() && options.containerCallback) {
      options.containerCallback(element);
    }
  }
}
