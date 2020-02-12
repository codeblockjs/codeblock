import React from 'react';
import { ProviderConfig } from '@codeblock/core/types';

import { CodeblockProps } from './types';
import { CodeblockHTTP } from './Codeblock.http';

import { CDN_AUTOLOAD_PATH } from '@codeblock/core';

export const CodeblockCDN = ({
  prismPath = CDN_AUTOLOAD_PATH,
  ...props
}: CodeblockProps & { prismPath?: string }) => {
  return <CodeblockHTTP prismPath={prismPath} {...props} />;
};

export default CodeblockCDN;
