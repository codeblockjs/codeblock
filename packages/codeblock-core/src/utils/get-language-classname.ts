import { PrismLanguage } from '../types';

export const getLanguageClassName = (language?: PrismLanguage | '') => {
  if (language) {
    return `language-${language}`;
  }
  return '';
};
