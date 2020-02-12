import React from 'react';

import { ProviderConfig } from '@codeblock/core/types';

import { setAutoloadPath } from '@codeblock/core';
import emptyLanguageProvider from '@codeblock/languages/lib/empty';
import emptyThemeProvider from '@codeblock/themes/lib/empty';

import { Codeblock } from './Codeblock';
import { CodeblockProps } from './types';

export const emptyProviderConfig: ProviderConfig = {
  themes: emptyThemeProvider,
  languages: emptyLanguageProvider
};

export const CodeblockEmpty = (props: CodeblockProps) => {
  React.useEffect(() => {
    setAutoloadPath(null);
  }, []);
  return <Codeblock providers={emptyProviderConfig} {...props} />;
};

export default CodeblockEmpty;
