import React from 'react';

import { ProviderConfig } from '@codeblock/core/types';
import { emptyLanguageProvider } from '@codeblock/core/lib/providers/language-provider-empty';
import { emptyThemeProvider } from '@codeblock/styled/lib/providers/theme-provider-empty';

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
