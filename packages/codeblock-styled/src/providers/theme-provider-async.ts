import { PrismThemeProvider } from '@codeblock/core/types';

export const asyncThemeProvider: PrismThemeProvider = {
  coy: () =>
    import(/* webpackChunkName: 'codeblock/theme.prism-coy' */ '../themes/coy'),
  dark: () =>
    import(
      /* webpackChunkName: 'codeblock/theme.prism-dark' */ '../themes/dark'
    ),
  funky: () =>
    import(
      /* webpackChunkName: 'codeblock/theme.prism-funky' */ '../themes/funky'
    ),
  okaidia: () =>
    import(
      /* webpackChunkName: 'codeblock/theme.prism-okaidia' */ '../themes/okaidia'
    ),
  prism: () =>
    import(
      /* webpackChunkName: 'codeblock/theme.prism-prism' */ '../themes/prism'
    ),
  solarizedlight: () =>
    import(
      /* webpackChunkName: 'codeblock/theme.prism-solarizedlight' */ '../themes/solarizedlight'
    ),
  tomorrow: () =>
    import(
      /* webpackChunkName: 'codeblock/theme.prism-tomorrow' */ '../themes/tomorrow'
    ),
  twilight: () =>
    import(
      /* webpackChunkName: 'codeblock/theme.prism-twiligh' */ '../themes/twilight'
    )
};
