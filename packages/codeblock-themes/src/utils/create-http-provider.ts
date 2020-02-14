import { loadPrismTheme } from './load-prism-theme';
import { PrismThemeProvider } from '@codeblock/core/lib/types';

import { createHttpThemeProvider } from '@codeblock/core/lib/http';

/**
 * Creates an http theme provider with the `loadPrismTheme` function
 * that will load and prefix the stylesheets with the theme-specific classname.
 *
 * @param prismPath base path of prismjs, should contain the `/themes` folder
 */
export const createHttpProvider = (prismPath: string): PrismThemeProvider => {
  return createHttpThemeProvider(prismPath, loadPrismTheme);
};
export default createHttpProvider;
