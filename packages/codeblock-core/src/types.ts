export type PrismHighlighter = typeof import('prismjs');
export type PrismTheme = typeof import('./support/available-themes').availableThemes[number];
export type PrismLanguage = typeof import('./support/available-languages').availableLanguages[number];

export type PrismThemeProvider = {
  [key in PrismTheme]: () => any;
};
export type PrismLanguageProvider = {
  [key in PrismLanguage]: () => any;
};

export interface CodeblockPrismConfig {
  languages: PrismLanguageProvider;
  themes: PrismThemeProvider;
  prism: () => PrismHighlighter | Promise<PrismHighlighter>;
}

export type CodeblockRenderer = React.ForwardRefExoticComponent<
  CodeblockRendererProps & React.RefAttributes<HTMLElement>
>;

export interface CodeblockRendererProps {
  isContainer?: boolean;
  language?: PrismLanguage;
  className?: string;
  children: React.ReactChild | React.ReactChild[];
}

export interface CodeblockProps {
  className?: string;
  children: React.ReactChild | React.ReactChild[];

  /**
   * The container renderer type. Either a string like `'span'` or a component or function.
   *
   * The default renders a `<pre><code>{children}</code></pre>` element
   */
  as?: CodeblockRenderer;

  /**
   * Whether this element is a container for code elements to automatically detect
   */
  isContainer?: boolean;
  language?: PrismLanguage;
  theme?: PrismTheme;
  config?: CodeblockPrismConfig;
}
