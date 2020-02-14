import cx from 'classnames';
import React from 'react';

import { getLanguageClassName } from '@codeblock/core';
import { CodeblockProps } from './types';
import { usePrism } from './hooks';

export function Codeblock({
  className,
  children,

  // default values
  as: Wrapper = 'div',
  theme = 'okaidia',

  // custom props

  innerProps,
  isContainer,

  providers,
  language,

  parallel,
  async,
  onHighlight,
  onHighlightError,

  // rest should be html props
  ...props
}: CodeblockProps & {
  /**
   * Type of container to render. Either a string like div or a function that returns an element
   */
  as?: keyof JSX.IntrinsicElements | ((p: any) => JSX.Element);
}): JSX.Element {
  const elementRef = React.useRef(null);

  const { languageClassName, themeClassName } = usePrism(elementRef, {
    children,
    language,
    providers,
    parallel,
    async,
    onHighlight,
    onHighlightError
  });

  return (
    <Wrapper
      {...props}
      ref={isContainer && elementRef}
      className={cx('Codeblock', className, themeClassName)}
    >
      {isContainer ? (
        children
      ) : (
        <pre
          {...innerProps}
          ref={elementRef}
          className={cx(innerProps?.className, {
            [languageClassName]: language
          })}
        >
          {children}
        </pre>
      )}
    </Wrapper>
  );
}
