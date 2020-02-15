import React from 'react';

import { setAutoload } from '@codeblock/core/lib/http';
import { ProviderConfig } from '@codeblock/core/types';
import asyncLanguageProvider from '@codeblock/languages/lib/async';
import asyncThemeProvider from '@codeblock/themes/lib/async';

import { Codeblock } from './Codeblock';
import { CodeblockProps } from './types';

export const asyncProviders: ProviderConfig = {
  themes: asyncThemeProvider,
  languages: asyncLanguageProvider
};

export const CodeblockAsync = (props: CodeblockProps) => {
  return <Codeblock providers={asyncProviders} {...props} />;
};

export default CodeblockAsync;
