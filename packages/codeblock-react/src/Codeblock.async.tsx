import React from 'react';

import { ProviderConfig } from '@codeblock/core/types';
import asyncLanguageProvider from '@codeblock/languages/lib/async';
import asyncThemeProvider from '@codeblock/themes/lib/async';

import { Codeblock } from './Codeblock';
import { CodeblockProps } from './types';

const asyncProviderConfig: ProviderConfig = {
  themes: asyncThemeProvider,
  languages: asyncLanguageProvider
};

export const CodeblockAsync = (props: CodeblockProps) => (
  <Codeblock providers={asyncProviderConfig} {...props} />
);

export default CodeblockAsync;
