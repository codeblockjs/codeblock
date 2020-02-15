import {
  CDN_AUTOLOAD_PATH,
  createHttpThemeProvider
} from '@codeblock/core/lib/http';

import { loadPrismTheme } from './utils/load-prism-theme';

export default createHttpThemeProvider(CDN_AUTOLOAD_PATH, loadPrismTheme);
