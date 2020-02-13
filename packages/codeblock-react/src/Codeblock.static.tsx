import React from 'react';
import { ProviderConfig } from '@codeblock/core/types';

import { setAutoload } from '@codeblock/core';
import staticLanguageProvider from '@codeblock/languages/lib/static';
import staticThemeProvider from '@codeblock/themes/lib/static';

import { Codeblock } from './Codeblock';
import { CodeblockProps } from './types';

export const staticProviders: ProviderConfig = {
  languages: staticLanguageProvider,
  themes: staticThemeProvider
};

export const CodeblockStatic = (props: CodeblockProps) => {
  React.useEffect(() => {
    setAutoload(null);
  }, []);

  return <Codeblock providers={staticProviders} {...props} />;
};
export default CodeblockStatic;
