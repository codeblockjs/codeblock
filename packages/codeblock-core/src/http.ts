import { Prism } from './prism';
import 'prismjs/plugins/autoloader/prism-autoloader';
import { PrismLanguageProvider, PrismThemeProvider, PrismTheme } from './types';
import availableLanguages from './available/languages';
import availableThemes from './available/themes';

let currentAutoload: string | null = null;

export const HTTP_AUTOLOAD_PATH =
  process.env.PRISM_HTTP_AUTOLOAD_PATH || './prismjs/';

export const CDN_AUTOLOAD_PATH =
  process.env.PRISM_CDN_AUTOLOAD_PATH ||
  'https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/';

/**
 * @return the currently set autoloader path, if set
 */
export const getAutoload = () => currentAutoload;

/**
 * Enables or disables loading of languages via prismjs [autoloader](https://prismjs.com/plugins/autoloader/)
 * Set to null to disable automatic loading.
 *
 * @param url URL or path to the prismjs location (should contain /components and /themes folders)
 */
export const setAutoload = (url: string) => {
  currentAutoload = url;
  if (Prism.plugins.autoloader) {
    Prism.plugins.autoloader.languages_path = url && `${url}components/`;
  }
};

export const createHttpLanguageProvider = (prismPath: string) => {
  const result = {} as PrismLanguageProvider;
  const loader = () => setAutoload(prismPath);
  return availableLanguages.reduce(
    (result, language) => Object.assign(result, { [language]: loader }),
    result
  );
};

export type HttpThemeLoader = (theme: PrismTheme, prismPath: string) => any;

export const createHttpThemeProvider = (
  prismPath: string,
  loader: HttpThemeLoader
) => {
  const result = {} as PrismThemeProvider;
  return availableThemes.reduce(
    (result, theme) =>
      Object.assign(result, {
        [theme]: () => loader(theme, prismPath)
      }),
    result
  );
};
