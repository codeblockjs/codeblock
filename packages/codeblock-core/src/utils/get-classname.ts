import { PrismLanguage, PrismTheme } from '../types';
import availableLanguages from '../available/languages';
import availableThemes from '../available/themes';

/**
 * @param language
 * @return CSS class for a prism language
 */
export const getLanguageClassName = (language?: PrismLanguage | '') => {
  if (language && availableLanguages.includes(language)) {
    return `language-${language}`;
  }
  return '';
};

/**
 * @param theme
 * @return CSS class for a prism theme
 */
export const getThemeClassName = (theme?: PrismTheme | '') => {
  if (theme && availableThemes.includes(theme)) {
    return `codeblock-theme-${theme}`;
  }
  return '';
};
