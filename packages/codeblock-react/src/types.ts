import {
  PrismLanguage,
  ProviderConfig,
  PrismTheme,
  ApplyPrismOptions
} from '@codeblock/core/types';
import { HTMLAttributes } from 'react';

export type CodeblockRenderer = React.ForwardRefExoticComponent<
  CodeblockRendererProps & React.RefAttributes<HTMLElement>
>;

export interface CodeblockRendererProps {
  isContainer?: boolean;
  language?: PrismLanguage;
  className?: string;
  children: React.ReactChild | React.ReactChild[];
}

// override and make providers optional as there is a react default prop
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
