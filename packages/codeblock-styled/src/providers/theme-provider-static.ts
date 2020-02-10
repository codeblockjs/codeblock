import { PrismThemeProvider } from '@codeblock/core/types';

export const staticThemeProvider: PrismThemeProvider = {
  coy: () => require('../themes/coy'),
  dark: () => require('../themes/dark'),
  funky: () => require('../themes/funky'),
  okaidia: () => require('../themes/okaidia'),
  prism: () => require('../themes/prism'),
  solarizedlight: () => require('../themes/solarizedlight'),
  tomorrow: () => require('../themes/tomorrow'),
  twilight: () => require('../themes/twilight')
};
