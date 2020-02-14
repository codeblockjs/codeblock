import React from 'react';

import { CodeblockProps } from './types';

import { useHTTPProviders } from './hooks';
import { Codeblock } from './Codeblock';

import { CDN_AUTOLOAD_PATH } from '@codeblock/core/lib/http';
import cdnThemeProvider from '@codeblock/themes/lib/cdn';

export const CodeblockCDN = ({
  prismPath = CDN_AUTOLOAD_PATH,
  ...props
}: CodeblockProps & { prismPath?: string }) => {
  const cdnProviders = useHTTPProviders(prismPath, cdnThemeProvider);
  return <Codeblock providers={cdnProviders} {...props} />;
};

export default CodeblockCDN;
