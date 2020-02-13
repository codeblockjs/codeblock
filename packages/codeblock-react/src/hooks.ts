import React from 'react';
import { applyPrism, getAutoload, setAutoload } from '@codeblock/core';
import emptyLanguageProvider from '@codeblock/languages/lib/empty';
import { createHttpThemeProvider } from '@codeblock/themes/lib/utils/create-http-provider';

import { CodeblockOptions } from './types';
import { ProviderConfig } from '@codeblock/core/types';

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
    if (!props.providers) return;
    (async () => {
      const themeLoader = props.providers.themes[props.theme];
      if (typeof themeLoader === 'function') {
        await themeLoader();
      }
    })();
  }, [props.theme, props.providers]);
}

export function useHTTPProvider(prismPath: string): ProviderConfig | null {
  const [isReady, setReady] = React.useState(prismPath === getAutoload());
  // set base URL for prism. Note that this is a global setting:
  // NOTE: if multiple instances set a different value, tha last one wins
  React.useEffect(() => {
    setAutoload(prismPath);
    setReady(true);
  }, [prismPath]);

  const httpProvider = React.useMemo<ProviderConfig>(() => {
    return {
      languages: emptyLanguageProvider,
      themes: createHttpThemeProvider(prismPath)
    };
  }, [prismPath]);

  return isReady ? httpProvider : null;
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
