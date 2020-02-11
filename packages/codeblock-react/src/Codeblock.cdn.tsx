import React from 'react';
import { ProviderConfig } from '@codeblock/core/types';

import { httpLanguageProvider } from '@codeblock/core/lib/providers/language-provider-http';
import { staticThemeProvider } from '@codeblock/styled/lib/providers/theme-provider-static';

import { CodeblockProps } from './types';
import { CodeblockHTTP } from './Codeblock.http';

import { cdnLanguagesPath } from '@codeblock/core/lib/utils/autoloader';

export const httpProviders: ProviderConfig = {
  languages: httpLanguageProvider,
  themes: staticThemeProvider
};

export const CodeblockCDN = ({
  languagesPath = cdnLanguagesPath,
  ...props
}: CodeblockProps & { languagesPath?: string }) => {
  return (
    <CodeblockHTTP
      languagesPath={languagesPath}
      providers={httpProviders}
      {...props}
    />
  );
};

export default CodeblockCDN;
