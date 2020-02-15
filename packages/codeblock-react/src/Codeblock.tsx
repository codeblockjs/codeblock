import cx from 'classnames';
import React from 'react';

import { CodeblockProps } from './types';
import { usePrism } from './hooks';
import useContent from '@loopmode/use-content';

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

  src,

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
    theme,
    children,
    language,
    providers,
    parallel,
    async,
    onHighlight,
    onHighlightError
  });

  const content = useContent(children, { src });

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
          {content}
        </pre>
      )}
    </Wrapper>
  );
}
