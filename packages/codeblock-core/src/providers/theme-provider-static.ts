import { PrismThemeProvider } from '@codeblock/core/types';

export const staticThemeProvider: PrismThemeProvider = {
  coy: () => require('prismjs/themes/prism-coy.css'),
  dark: () => require('prismjs/themes/prism-dark.css'),
  funky: () => require('prismjs/themes/prism-funky.css'),
  okaidia: () => require('prismjs/themes/prism-okaidia.css'),
  prism: () => require('prismjs/themes/prism.css'),
  solarizedlight: () => require('prismjs/themes/prism-solarizedlight.css'),
  tomorrow: () => require('prismjs/themes/prism-tomorrow.css'),
  twilight: () => require('prismjs/themes/prism-twilight.css')
};
