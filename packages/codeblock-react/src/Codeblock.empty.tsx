import React from 'react';

import { ProviderConfig } from '@codeblock/core/types';

import emptyLanguageProvider from '@codeblock/languages/lib/empty';
import emptyThemeProvider from '@codeblock/themes/lib/empty';

import { Codeblock } from './Codeblock';
import { CodeblockProps } from './types';

const emptyProviderConfig: ProviderConfig = {
  themes: emptyThemeProvider,
  languages: emptyLanguageProvider
};

export const CodeblockEmpty = (props: CodeblockProps) => (
  <Codeblock providers={emptyProviderConfig} {...props} />
);

export default CodeblockEmpty;
