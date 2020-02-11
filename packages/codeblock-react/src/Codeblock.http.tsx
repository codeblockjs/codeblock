import React from 'react';
import { ProviderConfig } from '@codeblock/core/types';

import { httpLanguageProvider } from '@codeblock/core/lib/providers/language-provider-http';
import { staticThemeProvider } from '@codeblock/styled/lib/providers/theme-provider-static';

import { Codeblock as DefaultCodeblock } from './Codeblock';
import { CodeblockProps } from './types';

export const httpProviders: ProviderConfig = {
  languages: httpLanguageProvider,
  themes: staticThemeProvider
};

export const Codeblock = (props: CodeblockProps) => (
  <DefaultCodeblock providers={httpProviders} {...props} />
);

export default Codeblock;
