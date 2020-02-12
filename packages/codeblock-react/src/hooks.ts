import React from 'react';
import { applyPrism } from '@codeblock/core';
import { CodeblockOptions } from './types';

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
export function useApplyPrism(props: CodeblockOptions): (node: any) => void {
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
