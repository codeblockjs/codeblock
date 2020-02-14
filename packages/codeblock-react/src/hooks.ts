import React from 'react';
import {
  applyPrism,
  getLanguageClassName,
  getThemeClassName
} from '@codeblock/core';
import { getAutoload, setAutoload } from '@codeblock/core/lib/http';
import emptyLanguageProvider from '@codeblock/languages/lib/empty';
import createHttpThemeProvider from '@codeblock/themes/lib/utils/create-http-provider';

import { CodeblockOptions } from './types';
import {
  ProviderConfig,
  PrismThemeProvider,
  PrismTheme
} from '@codeblock/core/types';

export function usePrism(
  elementRef: React.MutableRefObject<HTMLElement>,
  props: CodeblockOptions
) {
  const languageClassName = getLanguageClassName(props.language);
  const themeClassName = useThemeLoader({
    providers: props.providers,
    theme: props.theme
  });
  const dependencies = [
    props.language,
    props.async,
    props.onHighlight,
    props.onHighlightError,
    props.parallel,
    props.providers,
    props.children
  ];

  React.useEffect(() => {
    if (elementRef.current && props.providers) {
      applyPrism(elementRef.current, {
        async: props.async,
        onHighlight: props.onHighlight,
        onHighlightError: props.onHighlightError,
        parallel: props.parallel,
        providers: props.providers
      });
    }
  }, dependencies);

  return { languageClassName, themeClassName };
}

export function useThemeLoader(props: {
  theme?: PrismTheme | '' | null;
  providers?: ProviderConfig;
}): string {
  const [className, setClassName] = React.useState(
    getThemeClassName(props.theme)
  );
  React.useEffect(() => {
    (async () => {
      const themeLoader = props.providers?.themes[props.theme];
      if (typeof themeLoader === 'function') {
        await themeLoader();
      }
      setClassName(getThemeClassName(props.theme));
    })();
  }, [props.theme, props.providers]);

  return className;
}

const httpPathProviderMapping: { [prismPath: string]: ProviderConfig } = {};

export function useHTTPProviders(
  prismPath: string,
  defaultHttpThemeProvider?: PrismThemeProvider
): ProviderConfig | null {
  const [isReady, setReady] = React.useState(
    prismPath === undefined || prismPath === getAutoload()
  );

  React.useEffect(() => {
    setAutoload(prismPath);
    setReady(true);
  }, [prismPath]);

  if (!httpPathProviderMapping[prismPath]) {
    httpPathProviderMapping[prismPath] = {
      usePrismAutoload: true,
      languages: emptyLanguageProvider,
      themes: prismPath
        ? createHttpThemeProvider(prismPath)
        : defaultHttpThemeProvider
    };
  }

  return isReady ? httpPathProviderMapping[prismPath] : null;
}
