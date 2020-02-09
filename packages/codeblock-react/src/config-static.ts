import { CodeblockPrismConfig } from '@loopmode/codeblock-core/types';

import { staticPrismProvider } from '@loopmode/codeblock-core';
import { staticLanguageProvider } from '@loopmode/codeblock-languages';
import { staticThemeProvider } from '@loopmode/codeblock-themes';

export const staticConfig: CodeblockPrismConfig = {
  languages: staticLanguageProvider,
  themes: staticThemeProvider,
  prism: staticPrismProvider
};
