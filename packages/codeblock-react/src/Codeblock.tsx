import cx from 'classnames';
import React, { HTMLAttributes } from 'react';

import {
  getLanguageClassName,
  getThemeClassName,
  applyPrism
} from '@codeblock/core';
import { CodeblockOptions, CodeblockProps } from './types';

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

function useThemeLoader(props: CodeblockOptions): void {
  React.useEffect(() => {
    (async () => {
      const themeLoader = props.providers.themes[props.theme];
      if (typeof themeLoader === 'function') {
        await themeLoader();
      }
    })();
  }, [props.theme]);
}
function useApplyPrism(props: CodeblockOptions): (node: any) => void {
  return React.useCallback(
    node => {
      if (node !== null) {
        applyPrism(node, {
          providers: props.providers,
          async: props.async,
          onHighlight: props.onHighlight,
          parallel: props.parallel
        });
      }
    },
    [props.language]
  );
}
