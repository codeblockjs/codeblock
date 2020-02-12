import { getAutoloadPath } from '@codeblock/core/lib/autoload';
import { importPrismTheme } from './import-prism-theme';

export const createHttpThemeProvider = (prismPath: string) => {
  return {
    coy: () => {
      return importPrismTheme('coy', prismPath);
    },
    dark: () => {
      return importPrismTheme('dark', prismPath);
    },
    funky: () => {
      return importPrismTheme('funky', prismPath);
    },
    okaidia: () => {
      return importPrismTheme('okaidia', prismPath);
    },
    prism: () => {
      return importPrismTheme('prism', prismPath);
    },
    solarizedlight: () => {
      return importPrismTheme('solarizedlight', prismPath);
    },
    tomorrow: () => {
      return importPrismTheme('tomorrow', prismPath);
    },
    twilight: () => {
      return importPrismTheme('twilight', prismPath);
    }
  };
};
