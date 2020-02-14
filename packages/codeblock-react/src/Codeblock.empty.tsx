import React from 'react';

import { ProviderConfig } from '@codeblock/core/types';

import { setAutoload } from '@codeblock/core/lib/http';
import emptyLanguageProvider from '@codeblock/languages/lib/empty';
import emptyThemeProvider from '@codeblock/themes/lib/empty';

import { Codeblock } from './Codeblock';
import { CodeblockProps } from './types';

export const emptyProviders: ProviderConfig = {
  themes: emptyThemeProvider,
  languages: emptyLanguageProvider
};

export const CodeblockEmpty = (props: CodeblockProps) => {
  return <Codeblock providers={emptyProviders} {...props} />;
};

export default CodeblockEmpty;
