import React from 'react';

import { Codeblock } from './Codeblock';
import { CodeblockProps } from './types';
import { useHTTPProviders } from './hooks';
import { HTTP_AUTOLOAD_PATH } from '@codeblock/core/lib/http';
import httpThemeProvider from '@codeblock/themes/lib/http';

export const CodeblockHTTP = ({
  prismPath = HTTP_AUTOLOAD_PATH,
  ...props
}: CodeblockProps & { prismPath?: string }) => {
  const httpProviders = useHTTPProviders(prismPath, httpThemeProvider);

  return <Codeblock providers={httpProviders} {...props} />;
};

export default CodeblockHTTP;
