import { HTMLAttributes } from 'react';
import {
  PrismLanguage,
  ProviderConfig,
  PrismTheme,
  ApplyPrismOptions
} from '@codeblock/core/types';

// override and make providers optional as there is a react default prop per component
export interface CodeblockOptions extends Omit<ApplyPrismOptions, 'providers'> {
  providers?: ProviderConfig;
  className?: string;
  theme?: PrismTheme | '' | null;
  language?: PrismLanguage | '' | null;
}

export type CodeblockProps = CodeblockOptions & {
  children?: React.ReactChild | React.ReactChild[];
  innerProps?: React.HTMLAttributes<HTMLPreElement>;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onError'>;
