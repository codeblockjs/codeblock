import React from 'react';

import { Codeblock } from './Codeblock';
import { CodeblockProps } from './types';
import { useHTTPProvider } from './hooks';

export const CodeblockHTTP = ({
  prismPath,
  ...props
}: CodeblockProps & { prismPath: string }) => {
  const httpProviders = useHTTPProvider(prismPath);
  return <Codeblock providers={httpProviders} {...props} />;
};

export default CodeblockHTTP;
