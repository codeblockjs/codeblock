import React from 'react';
import { Codeblock as DefaultCodeblock } from './Codeblock.react';
import { staticConfig } from './config-static';
import { CodeblockProps } from '@loopmode/codeblock-core/types';

export const Codeblock = (props: CodeblockProps) => (
  <DefaultCodeblock config={staticConfig} {...props} />
);
