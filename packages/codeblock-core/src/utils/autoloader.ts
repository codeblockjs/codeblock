import { Prism } from '../prism';
import 'prismjs/plugins/autoloader/prism-autoloader';

Prism.plugins.autoloader.languages_path = undefined;
let currentLanguagesPath = undefined;

export const cdnLanguagesPath =
  'https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/components/';

export const getLanguagesPath = () => currentLanguagesPath;

export const setLanguagesPath = async (url: string) => {
  currentLanguagesPath = url;
  Prism.plugins.autoloader.languages_path = url;
  console.log('>> setLanguagesPath', Prism.plugins.autoloader.languages_path);
};
