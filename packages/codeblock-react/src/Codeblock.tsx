import cx from 'classnames';
import React from 'react';

import { CodeblockOptions, CodeblockProps } from './types';
import { getLanguageClassName, applyPrism } from '@codeblock/core';

export function Codeblock({
  className,
  providers,
  children,
  theme,
  language,
  innerProps,
  ...props
}: CodeblockProps): JSX.Element {
  const options = { providers, theme, language };
  const ThemeContainer = useThemeContainer(options);
  const applyPrismCallback = useApplyPrism(options);
  return (
    <ThemeContainer className={cx('Codeblock', className)} {...props}>
      <pre
        {...innerProps}
        ref={applyPrismCallback}
        className={cx(innerProps?.className, {
          [getLanguageClassName(language)]: language
        })}
      >
        {children}
      </pre>
    </ThemeContainer>
  );
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

function useThemeContainer(props: CodeblockOptions): ThemeContainerType {
  const [Container, setContainer] = React.useState<ThemeContainerType>('div');
  React.useEffect(() => {
    (async () => {
      if (props.theme) {
        const themeLoader = props.providers.themes[props.theme];
        console.log({ themeLoader });
        const { default: ThemeRenderer } = await themeLoader();
        setContainer(ThemeRenderer);
      } else {
        setContainer('div');
      }
    })();
  }, [props.theme]);

  return Container;
}

type ThemeContainerType =
  | string
  | React.FC<React.HTMLAttributes<HTMLDivElement>>;
