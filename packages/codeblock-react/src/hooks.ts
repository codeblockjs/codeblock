import React from 'react';
import { applyPrism } from '@codeblock/core';
import { CodeblockOptions } from './types';

export type UseCodeblockResult = {
  applyCodeblock: (node: HTMLElement) => void;
};

export function useCodeblock(props: CodeblockOptions): UseCodeblockResult {
  useThemeLoader(props);
  const refCallback = useApplyPrism(props);

  return { applyCodeblock: refCallback };
}

export function useThemeLoader(props: CodeblockOptions): void {
  React.useEffect(() => {
    (async () => {
      const themeLoader = props.providers.themes[props.theme];
      if (typeof themeLoader === 'function') {
        await themeLoader();
      }
    })();
  }, [props.theme]);
}

export function useApplyPrism(
  props: CodeblockOptions
): (node: HTMLElement) => void {
  return React.useCallback(
    node => {
      if (node !== null) {
        applyPrism(node, {
          async: props.async,
          onHighlight: props.onHighlight,
          onHighlightError: props.onHighlightError,
          parallel: props.parallel,
          providers: props.providers
        });
      }
    },
    [
      props.language,
      props.theme,
      props.async,
      props.onHighlight,
      props.onHighlightError,
      props.parallel,
      props.providers
    ]
  );
}
