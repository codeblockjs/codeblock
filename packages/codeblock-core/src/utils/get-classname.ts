import { PrismLanguage, PrismTheme } from '../types';

export const getLanguageClassName = (language?: PrismLanguage | '') => {
  if (language) {
    return `language-${language}`;
  }
  return '';
};

export const getThemeClassName = (theme?: PrismTheme | '') => {
  if (theme) {
    return `codeblock-theme-${theme}`;
  }
  return '';
};
