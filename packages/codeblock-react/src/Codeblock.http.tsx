import React from 'react';
import { ProviderConfig } from '@codeblock/core/types';

import { httpLanguageProvider } from '@codeblock/core/lib/providers/language-provider-http';
import { staticThemeProvider } from '@codeblock/styled/lib/providers/theme-provider-static';

import { Codeblock } from './Codeblock';
import { CodeblockProps } from './types';
import { useLanguagesPath } from './use-languages-path';

export const httpProviders: ProviderConfig = {
  languages: httpLanguageProvider,
  themes: staticThemeProvider
};

export const CodeblockHTTP = ({
  languagesPath,
  ...props
}: CodeblockProps & { languagesPath: string }) => {
  useLanguagesPath(languagesPath);
  return <Codeblock providers={httpProviders} {...props} />;
};

export default CodeblockHTTP;
