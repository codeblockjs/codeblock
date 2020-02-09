import { CodeblockPrismConfig } from '@loopmode/codeblock-core/types';

import { emptyPrismProvider } from '@loopmode/codeblock-core';
import { emptyLanguageProvider } from '@loopmode/codeblock-languages';
import { emptyThemeProvider } from '@loopmode/codeblock-themes-styled';

export const emptyConfig: CodeblockPrismConfig = {
  languages: emptyLanguageProvider,
  themes: emptyThemeProvider,
  prism: emptyPrismProvider
};
