export type PrismTheme = typeof import('./available-themes').availableThemes[number];
export type PrismLanguage = typeof import('./available-languages').availableLanguages[number];

export type PrismThemeProvider = {
  [key in PrismTheme]: () => any;
};
export type PrismLanguageProvider = {
  [key in PrismLanguage]: () => any;
};

export interface ProviderConfig {
  languages: PrismLanguageProvider;
  themes: PrismThemeProvider;
}

export type LanguageElementMap = Partial<
  {
    [key in PrismLanguage]: HTMLElement[];
  }
>;

export interface ApplyPrismOptions {
  providers: ProviderConfig;

  /**
   * When multiple languages were detected: Whether to load and apply all languages in parallel.
   */
  parallel?: boolean;

  /**
   * Whether to use Web Workers for async highlighting.
   *
   * See https://prismjs.com/extending.html#api
   */
  async?: boolean;
  /**
   * A callback to be invoked after highlighting is done. Receives the highlighted element.
   *
   * Note that when in `container` mode, this is invoked once for each detected language.
   */
  onHighlight?: Prism.HighlightCallback;

  onHighlightError?: (error: Error) => void;
}
