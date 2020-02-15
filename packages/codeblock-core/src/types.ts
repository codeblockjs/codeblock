export type PrismTheme = typeof import('./available/themes').default[number];
export type PrismLanguage = typeof import('./available/languages').default[number];

export type PrismThemeProvider = {
  [key in PrismTheme]: () => any;
};
export type PrismLanguageProvider = {
  [key in PrismLanguage]: () => any;
};

export interface ProviderConfig {
  usePrismAutoload?: boolean;
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
   * Optional callback invoked after highlighting was applied on an element
   */
  onHighlight?: Prism.HighlightCallback;

  /**
   * Optional callback invoked after an error happen during highlighting an element
   */
  onHighlightError?: (error: Error) => void;
}
