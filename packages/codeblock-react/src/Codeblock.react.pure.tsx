import React from 'react';
import { Codeblock as DefaultCodeblock } from './Codeblock.react';
import { emptyConfig } from './config-empty';
import { CodeblockProps } from '@loopmode/codeblock-core/types';

export const Codeblock = (props: CodeblockProps) => (
  <DefaultCodeblock config={emptyConfig} {...props} />
);
