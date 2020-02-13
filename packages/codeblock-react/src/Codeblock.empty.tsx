import React from 'react';

import { ProviderConfig } from '@codeblock/core/types';

import { setAutoload } from '@codeblock/core';
import emptyLanguageProvider from '@codeblock/languages/lib/empty';
import emptyThemeProvider from '@codeblock/themes/lib/empty';

import { Codeblock } from './Codeblock';
import { CodeblockProps } from './types';

export const emptyProviders: ProviderConfig = {
  themes: emptyThemeProvider,
  languages: emptyLanguageProvider
};

export const CodeblockEmpty = (props: CodeblockProps) => {
  React.useEffect(() => {
    setAutoload(null);
  }, []);
  return <Codeblock providers={emptyProviders} {...props} />;
};

export default CodeblockEmpty;
