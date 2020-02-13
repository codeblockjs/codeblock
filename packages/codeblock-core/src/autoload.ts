import { Prism } from './prism';
import 'prismjs/plugins/autoloader/prism-autoloader';

let currentAutoloadPath = undefined;

export const CDN_AUTOLOAD_PATH =
  process.env.PRISM_CDN_AUTOLOAD_PATH ||
  'https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/';

/**
 * @return the currently set autoloader path, if set
 */
export const getAutoload = () => currentAutoloadPath;

/**
 * Enables or disables loading of languages via prismjs [autoloader](https://prismjs.com/plugins/autoloader/)
 * Set to null or undefined to disable automatic loading.
 *
 * @param url Location of prismjs, with trailing slash
 */
export const setAutoload = async (url: string) => {
  if (!url) {
    return;
  }
  currentAutoloadPath = url;
  if (Prism.plugins.autoloader) {
    Prism.plugins.autoloader.languages_path = `${url}components/`;
  }
};

setAutoload(null);
