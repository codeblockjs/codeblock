import { Prism } from './prism';
import 'prismjs/plugins/autoloader/prism-autoloader';

let currentAutoloadPath = undefined;

export const CDN_AUTOLOAD_PATH =
  process.env.PRISM_CDN_AUTOLOAD_PATH ||
  'https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/';

export const getAutoloadPath = () => currentAutoloadPath;

export const setAutoloadPath = async (url: string) => {
  currentAutoloadPath = url;
  if (Prism.plugins.autoloader) {
    Prism.plugins.autoloader.languages_path = `${url}components/`;
  }
  console.log('>> setLanguagesPath', Prism.plugins.autoloader.languages_path);
};

setAutoloadPath(null);
