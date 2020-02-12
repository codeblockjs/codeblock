import cx from 'classnames';
import React, { HTMLAttributes } from 'react';

import { getLanguageClassName, getThemeClassName } from '@codeblock/core';
import { CodeblockProps } from './types';
import { useThemeLoader, useApplyPrism } from './hooks';

export function Codeblock({
  className,
  providers,
  children,
  theme,
  language,
  innerProps,
  as: Component = 'div',
  ...props
}: CodeblockProps & {
  as?: string | ((props: HTMLAttributes<HTMLDivElement>) => JSX.Element);
}): JSX.Element {
  const options = { providers, theme, language };
  useThemeLoader(options);
  const applyPrismCallback = useApplyPrism(options);
  return (
    <Component
      {...props}
      className={cx('Codeblock', className, {
        [getThemeClassName(theme)]: theme
      })}
    >
      <pre
        {...innerProps}
        ref={applyPrismCallback}
        className={cx(innerProps?.className, {
          [getLanguageClassName(language)]: language
        })}
      >
        {children}
      </pre>
    </Component>
  );
}
