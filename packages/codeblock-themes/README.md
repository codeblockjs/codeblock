# @codeblock/themes

This package contains `prismjs/themes` providers for `@codeblock`:

- [`empty`](#empty)
- [`async`](#async)
- [`static`](#static)

Each provider is an object with a key for each supported theme, and a function that requires or imports the corresponding theme file.

The functions do not return anything! They merely ensure that the corresponding module is available.

```js
import themes from '@codeblock/themes/lib/async';

async function demo() {
  await themes.okaidia();
  // the okaidia theme has been loaded now. a stylesheet was added to the document.
}
```

## CSS files

The provided CSS files contain the entire prism theme, but all selectors are prefixed with a theme-specific prefix of `.codeblock-theme-{themeName}`.

This allows us to use multiple themes at once without selector collisions.

Note that these files are generated at build-time using the `prebuild` script and effectively `utils/addPrefix`.

- `@codeblock/themes/lib/prism-coy.css`
- `@codeblock/themes/lib/prism-dark.css`
- `@codeblock/themes/lib/prism-funky.css`
- `@codeblock/themes/lib/prism-okaidia.css`
- `@codeblock/themes/lib/prism-prism.css`
- `@codeblock/themes/lib/prism-solarizedlight.css`
- `@codeblock/themes/lib/prism-tomorrow.css`
- `@codeblock/themes/lib/prism-twilight.css`

## Utils

Contains some utility functions to dynamically load a CSS file and prefix all of its selectors.

### utils/add-prefix

Takes some CSS source text and a theme name. Prefixes all selectors in the CSS with the recognized classname for the codeblock theme.

```js
import addPrefix from '@codeblock/themes/lib/utils/addPrefix';
const css = `
  span { color: red; }
  .foo { color: green; }
`;
const result = addPrefix(css, 'okaidia');
// result is now:
// `
//   .codeblock-theme-okaidia span { color: red; }
//   .codeblock-theme-okaidia .foo { color: green; }
// `
```

You can override the default prefix using the optional third argument.

```js
addPrefix('span {color:red;}', 'okaidia', '.my-prefix-');
// '.my-prefix-okaidia span {color:red;}'
```

### utils/import-prism-theme

Loads a prism theme CSS file as creates a codeblock theme from it.

Creates a prefixed version of the styles and adds them to the document with a `<style id="codeblock-theme-styles-{themeName}">` tag.

```js
import importPrismTheme from '@codeblock/themes/lib/utils/import-prism-theme';

async function demo() {
  await importPrismTheme(
    'okaidia',
    'https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/'
  );
}
```

### utils/create-http-provider

Creates a new `PrismThemeProvider` that will load themes from a http location.

```js
import createHttpProvider from '@codeblock/themes/lib/utils/create-http-provider';

export const config: Partial<ProviderConfig> = {
  themes: createHttpProvider(
    'https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/'
  )
};
```

## Providers

### empty

A dummy provider where each theme loader is effectively a noop.

Useful when you want to have exact control over what gets loaded.

```jsx
import emptyThemeProvider from '@codeblock/themes/lib/empty';

export const config: Partial<ProviderConfig> = {
  themes: {
    ...emptyThemeProvider,
    okaidia: () => require('@codeblock/themes/lib/prism-okaidia.css')
  }
};
```

### async

A provider where each theme is dynamically imported via `import()` on demand.

Defines webpack chunk names via `/* webpackChunkName: 'codeblock/theme.prism-{themeName}' */`.
When bundled with webpack, an additional output folder `codeblock` would be created, along with a separate chunk for each theme.

```jsx
import asyncThemeProvider from '@codeblock/themes/lib/async';

export const config: Partial<ProviderConfig> = {
  themes: asyncThemeProvider
};
```

### static

A provider where each theme is statically required via `require()` at compile-time.

```jsx
import staticThemeProvider from '@codeblock/themes/lib/static';

export const config: Partial<ProviderConfig> = {
  themes: staticThemeProvider
};
```

##### @codeblock

- [Storybook](https://codeblockjs.github.io/codeblock)
- [Github](https://github.com/codeblockjs/codeblock)
- [npm](https://www.npmjs.com/org/codeblock)
