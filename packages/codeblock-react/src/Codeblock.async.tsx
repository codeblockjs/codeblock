import React from 'react';

import { setAutoloadPath } from '@codeblock/core';
import { ProviderConfig } from '@codeblock/core/types';
import asyncLanguageProvider from '@codeblock/languages/lib/async';
import asyncThemeProvider from '@codeblock/themes/lib/async';

import { Codeblock } from './Codeblock';
import { CodeblockProps } from './types';

export const asyncProviderConfig: ProviderConfig = {
  themes: asyncThemeProvider,
  languages: asyncLanguageProvider
};

export const CodeblockAsync = (props: CodeblockProps) => {
  React.useEffect(() => {
    setAutoloadPath(null);
  }, []);
  return <Codeblock providers={asyncProviderConfig} {...props} />;
};

export default CodeblockAsync;
