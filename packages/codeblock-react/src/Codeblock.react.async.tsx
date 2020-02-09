import React from 'react';
import { CodeblockProps } from '@loopmode/codeblock-core/types';
import { Codeblock as DefaultCodeblock } from './Codeblock.react';
import { asyncConfig } from './config-async';

export const Codeblock = (props: CodeblockProps) => (
  <DefaultCodeblock config={asyncConfig} {...props} />
);
