import { getAutoload } from '@codeblock/core/lib/autoload';
import { importPrismTheme } from './utils/import-prism-theme';

const createHttpProvider = (prismPath: string) => {
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
export default createHttpProvider(getAutoload());
