import { CodeblockPrismConfig } from '@loopmode/codeblock-core/types';

import { asyncPrismProvider } from '@loopmode/codeblock-core';
import { asyncLanguageProvider } from '@loopmode/codeblock-languages';
import { asyncThemeProvider } from '@loopmode/codeblock-themes-styled';

export const asyncConfig: CodeblockPrismConfig = {
  languages: asyncLanguageProvider,
  themes: asyncThemeProvider,
  prism: asyncPrismProvider
};
