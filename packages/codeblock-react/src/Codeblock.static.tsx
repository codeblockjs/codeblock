import React from 'react';
import { ProviderConfig } from '@codeblock/core/types';

import { staticLanguageProvider } from '@codeblock/core/lib/providers/language-provider-static';
import { staticThemeProvider } from '@codeblock/styled/lib/providers/theme-provider-static';

import { Codeblock } from './Codeblock';
import { CodeblockProps } from './types';

export const staticProviders: ProviderConfig = {
  languages: staticLanguageProvider,
  themes: staticThemeProvider
};

export const CodeblockStatic = (props: CodeblockProps) => (
  <Codeblock providers={staticProviders} {...props} />
);

export default CodeblockStatic;
