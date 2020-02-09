import { PrismThemeProvider } from '@loopmode/codeblock-core/types';

export const asyncThemeProvider: PrismThemeProvider = {
  coy: () =>
    import(
      /* webpackChunkName: 'codeblock/theme.prism-coy.styled' */ '../themes/coy'
    ),
  dark: () =>
    import(
      /* webpackChunkName: 'codeblock/theme.prism-dark.styled' */ '../themes/dark'
    ),
  funky: () =>
    import(
      /* webpackChunkName: 'codeblock/theme.prism-funky.styled' */ '../themes/funky'
    ),
  okaidia: () =>
    import(
      /* webpackChunkName: 'codeblock/theme.prism-okaidia.styled' */ '../themes/okaidia'
    ),
  prism: () =>
    import(
      /* webpackChunkName: 'codeblock/theme.prism-prism.styled' */ '../themes/prism'
    ),
  solarizedlight: () =>
    import(
      /* webpackChunkName: 'codeblock/theme.prism-solarizedlight.styled' */ '../themes/solarizedlight'
    ),
  tomorrow: () =>
    import(
      /* webpackChunkName: 'codeblock/theme.prism-tomorrow.styled' */ '../themes/tomorrow'
    ),
  twilight: () =>
    import(
      /* webpackChunkName: 'codeblock/theme.prism-twiligh.styled' */ '../themes/twilight'
    )
};
