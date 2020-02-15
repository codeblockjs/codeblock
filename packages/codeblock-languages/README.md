# @codeblock/languages

Prismjs languages for `@codeblock`.

## providers

This package contains `prismjs/components` providers for `@codeblock`:

- [`@codeblock/languages/lib/empty`](#empty)
- [`@codeblock/languages/lib/async`](#async)
- [`@codeblock/languages/lib/static`](#static)

Each provider is an object with a key for each supported language, and a function that requires or imports the corresponding language file.

The functions do not return anything! They merely ensure that the corresponding language module is available.

```javascript
import languages from '@codeblock/languages/lib/async';

async function demo() {
  await languages.jsx();
  await languages.tsx();
  // the languages `jsx` and `tsx` are available to prismjs now
}
```

Note that none of these providers will work correctly for languages that depend on another language.

For example, the `tsx` language requires the `jsx` language to be available. If you load only `tsx`, the highlighting will not work. Another example would be `cpp` which requires `clike` to be loaded.

Currently, the mechanism for resolving these dependencies is [not exposed by prismjs](https://github.com/PrismJS/prism/blob/master/plugins/autoloader/prism-autoloader.js#L7).

The only way to reliably resolve the languages is by using the autoloader mechanism via [`@codeblock/core/lib/autoload`](../codeblock-core/README.md#autoload)

### empty

A dummy provider object where each language loader is effectively a noop.

Useful when you want to have exact control over what gets loaded.

```jsx
import emptyLanguageProvider from '@codeblock/languages/lib/empty';

export const config: Partial<ProviderConfig> = {
  languages: {
    ...emptyLanguageProvider,
    jsx: () => require('prismjs/components/prism-jsx'),
    tsx: () => require('prismjs/components/prism-tsx')
  }
};
```

### async

A provider object where each language is dynamically imported via `import()` on demand.

Defines webpack chunk names via `/* webpackChunkName: 'codeblock/language.prism-{langName}' */`.
When bundled with webpack, an additional output folder `codeblock` would be created, along with a separate chunk for each language.

```jsx
import asyncLanguageProvider from '@codeblock/languages/lib/async';

export const config: Partial<ProviderConfig> = {
  languages: asyncLanguageProvider
};
```

### static

A provider object where each language is statically required via `require()` at compile-time.

```jsx
import staticLanguageProvider from '@codeblock/languages/lib/static';

export const config: Partial<ProviderConfig> = {
  languages: staticLanguageProvider
};
```

##### @codeblock

- [Storybook](https://codeblockjs.github.io/codeblock)
- [Github](https://github.com/codeblockjs/codeblock)
- [npm](https://www.npmjs.com/org/codeblock)
