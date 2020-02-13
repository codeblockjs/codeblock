import { importPrismTheme } from './import-prism-theme';
import { PrismThemeProvider } from '@codeblock/core/lib/types';

export const createHttpThemeProvider = (
  prismPath: string
): PrismThemeProvider => {
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

export default createHttpThemeProvider;
