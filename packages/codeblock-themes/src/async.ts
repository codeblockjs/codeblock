export default {
  coy: () => {
    return import(
      /* webpackChunkName: 'codeblock/theme.prism-coy' */ '../lib/prism-coy.css'
    );
  },
  dark: () => {
    return import(
      /* webpackChunkName: 'codeblock/theme.prism-dark' */ '../lib/prism-dark.css'
    );
  },
  funky: () => {
    return import(
      /* webpackChunkName: 'codeblock/theme.prism-funky' */ '../lib/prism-funky.css'
    );
  },
  okaidia: () => {
    return import(
      /* webpackChunkName: 'codeblock/theme.prism-okaidia' */ '../lib/prism-okaidia.css'
    );
  },
  prism: () => {
    return import(
      /* webpackChunkName: 'codeblock/theme.prism-prism' */ '../lib/prism.css'
    );
  },
  solarizedlight: () => {
    return import(
      /* webpackChunkName: 'codeblock/theme.prism-solarizedlight' */ '../lib/prism-solarizedlight.css'
    );
  },
  tomorrow: () => {
    return import(
      /* webpackChunkName: 'codeblock/theme.prism-tomorrow' */ '../lib/prism-tomorrow.css'
    );
  },
  twilight: () => {
    return import(
      /* webpackChunkName: 'codeblock/theme.prism-twiligh' */ '../lib/prism-twilight.css'
    );
  }
};
