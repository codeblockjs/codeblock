import { PrismThemeProvider } from '@codeblock/core/types';

export const asyncThemeProvider: PrismThemeProvider = {
  coy: () =>
    import(
      /* webpackChunkName: 'codeblock/theme.prism-coy' */ 'prismjs/themes/prism-coy.css'
    ),
  dark: () =>
    import(
      /* webpackChunkName: 'codeblock/theme.prism-dark' */ 'prismjs/themes/prism-dark.css'
    ),
  funky: () =>
    import(
      /* webpackChunkName: 'codeblock/theme.prism-funky' */ 'prismjs/themes/prism-funky.css'
    ),
  okaidia: () =>
    import(
      /* webpackChunkName: 'codeblock/theme.prism-okaidia' */ 'prismjs/themes/prism-okaidia.css'
    ),
  prism: () =>
    import(
      /* webpackChunkName: 'codeblock/theme.prism-prism' */ 'prismjs/themes/prism.css'
    ),
  solarizedlight: () =>
    import(
      /* webpackChunkName: 'codeblock/theme.prism-solarizedlight' */ 'prismjs/themes/prism-solarizedlight.css'
    ),
  tomorrow: () =>
    import(
      /* webpackChunkName: 'codeblock/theme.prism-tomorrow' */ 'prismjs/themes/prism-tomorrow.css'
    ),
  twilight: () =>
    import(
      /* webpackChunkName: 'codeblock/theme.prism-twiligh' */ 'prismjs/themes/prism-twilight.css'
    )
};
