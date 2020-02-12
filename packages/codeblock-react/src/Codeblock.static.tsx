import React from 'react';
import { ProviderConfig } from '@codeblock/core/types';

import { setAutoloadPath } from '@codeblock/core';
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
    setAutoloadPath(null);
  }, []);

  return <Codeblock providers={staticProviders} {...props} />;
};
export default CodeblockStatic;
