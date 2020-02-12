import React from 'react';

import { ProviderConfig } from '@codeblock/core/types';
import { setAutoloadPath } from '@codeblock/core';

import emptyLanguageProvider from '@codeblock/languages/lib/empty';
import { createHttpThemeProvider } from '@codeblock/themes/lib/utils/create-http-provider';

import { Codeblock } from './Codeblock';
import { CodeblockProps } from './types';

export const CodeblockHTTP = ({
  prismPath,
  ...props
}: CodeblockProps & { prismPath: string }) => {
  // set base URL for prism. Note that this is a global setting:
  // NOTE: if multiple instances set a different value, tha last one wins
  React.useEffect(() => {
    setAutoloadPath(prismPath);
  }, [prismPath]);

  const httpProviders = React.useMemo<ProviderConfig>(() => {
    return {
      languages: emptyLanguageProvider,
      themes: createHttpThemeProvider(prismPath)
    };
  }, [prismPath]);

  return <Codeblock providers={httpProviders} {...props} />;
};

export default CodeblockHTTP;
