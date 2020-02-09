import cx from 'classnames';
import React from 'react';

import usePrism from './usePrism';
import { OkaidiaTheme } from '@loopmode/codeblock-themes-styled';

import {
  CodeblockRendererProps,
  CodeblockProps
} from '@loopmode/codeblock-core/types';
import { getLanguageClassName } from '@loopmode/codeblock-core';

export const DefaultRenderer = React.forwardRef<
  HTMLElement,
  CodeblockRendererProps
>((props: CodeblockRendererProps, ref) => {
  return (
    <pre
      ref={ref as React.MutableRefObject<HTMLPreElement>}
      className={cx(props.className, {
        [getLanguageClassName(props.language)]: !props.isContainer
      })}
    >
      {props.children}
    </pre>
  );
});

Codeblock.defaultProps = {
  as: DefaultRenderer
};

export function Codeblock(props: CodeblockProps): JSX.Element {
  const ref = React.useRef(null);
  const Renderer = props.as;

  usePrism(ref, {
    isContainer: props.isContainer,
    language: props.language,
    config: props.config
  });

  return (
    <OkaidiaTheme className={cx('Codeblock', props.className)}>
      <Renderer {...props} ref={ref} />
    </OkaidiaTheme>
  );
}
