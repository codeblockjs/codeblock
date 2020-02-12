import cx from 'classnames';
import React, { HTMLAttributes } from 'react';

import { getLanguageClassName, getThemeClassName } from '@codeblock/core';
import { CodeblockProps } from './types';
import { useCodeblock } from './hooks';

export function Codeblock({
  className,
  providers,
  children,
  theme = 'okaidia',
  language,
  innerProps,
  isContainer,
  as: Wrapper = 'div',
  ...props
}: CodeblockProps & {
  as?: keyof JSX.IntrinsicElements | ((p: any) => JSX.Element);
}): JSX.Element {
  const { applyCodeblock } = useCodeblock({ providers, theme, language });
  return (
    <Wrapper
      {...props}
      ref={isContainer && applyCodeblock}
      className={cx('Codeblock', className, {
        [getThemeClassName(theme)]: theme
      })}
    >
      {isContainer ? (
        children
      ) : (
        <pre
          {...innerProps}
          ref={applyCodeblock}
          className={cx(innerProps?.className, {
            [getLanguageClassName(language)]: language
          })}
        >
          {children}
        </pre>
      )}
    </Wrapper>
  );
}
