import React from 'react';

import { ProviderConfig } from '@codeblock/core/types';
import { asyncLanguageProvider } from '@codeblock/core/lib/providers/language-provider-async';
import { asyncThemeProvider } from '@codeblock/styled/lib/providers/theme-provider-async';

import { Codeblock as DefaultCodeblock } from './Codeblock';
import { CodeblockProps } from './types';

const asyncProviderConfig: ProviderConfig = {
  themes: asyncThemeProvider,
  languages: asyncLanguageProvider
};

export const Codeblock = (props: CodeblockProps) => (
  <DefaultCodeblock providers={asyncProviderConfig} {...props} />
);

export default Codeblock;
