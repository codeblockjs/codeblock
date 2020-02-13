# @codeblock/core

Core dependencies and functionality for `@codeblock`.

The `@codeblock/core` package is the primary connection between `@codeblock` and `prismjs`.

It is the only `@codeblock` packages that directly depends on `prismjs`, while all other `@codeblock` packages depend on it.

It provides the main interfaces and typescript definitions, the main functions for highlighting an element and some utility functions.

You probably want to use [`@codeblock-react`](../codeblock-react/README.md) instead - you shouldn't ever need to use the core functionality directly or manually.

## Prism instance

Any `@codeblock` modules that require access to the global `Prism` object should import it from `@codeblock/core`:

```js
import { Prism } from '@codeblock/core';
// do something with Prism
```

## utilities

### applyPrism

Applies prismjs highlighting with codeblock mechanisms to an element or its children.

```js
import { applyPrism } from '@codeblock/core';
import languages from '@codeblock/languages/lib/empty';
import themes from '@codeblock/themes/lib/empty';

applyPrism(document.getElementById('content'), {
  providers: { languages, themes }
}).then(console.log('done'));
```

### getLanguageClassName

Creates the classname for a prism language.

```js
import { getLanguageClassName } from '@codeblock/core';
getLanguageClassName('jsx'); // 'language-jsx'
getLanguageClassName('foo'); // '
getLanguageClassName(null); // '
```

### getThemeClassName

Creates the classname for a codeblock theme given a prism theme name.

```js
import { getThemeClassName } from '@codeblock/core';
const className = getThemeClassName('okaidia'); // 'codeblock-theme-okaidia'
const className = getThemeClassName('foo'); // ''
const className = getThemeClassName(null); // ''
```

### detectLanguages

Detects all languages in the CSS class names of one or more given DOM elements and returns a `LanguageElementMap` (`{ [lang]: elements[...] }`), or an empty object if no languages are found.

If the given element

- does not have a language class, its children will be queried and used
- does have a language class itself, its children will be ignored

```js
import { detectLanguages } from '@codeblock/core';
const map = detectLanguages(document.body);
console.log(map);
```

## autoload

In order to reliably support all languages, you have to use the [autoloader plugin](https://prismjs.com/plugins/autoloader/) of prismjs.

The way to do this in `@codeblock` is to set the autoload path to a location where prismjs is available:

```js
import { setAutoloadpath } from '@codeblock/core';
setAutoloadpath('https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/');
// unset to disable:
setAutoloadpath(undefined);
```

## CDN_AUTOLOAD_PATH

This constant holds the autoload path for cdn-based `@codeblock` modules.

- defaults to `"https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/"`
- you can override it at compile-time using a `PRISM_CDN_AUTOLOAD_PATH` env variable

This is done under the hood by cdn-based components like `@codeblock/react/cdn`.

```js
import { setAutoloadpath, CDN_AUTOLOAD_PATH } from '@codeblock/core';
setAutoloadpath(CDN_AUTOLOAD_PATH);
```

## available themes and languages

The list of available themes and languages is provided by core as well. It is generated based on the installed `node_modules/prismjs/components` and `node_modules/prismjs/themes`.

Run `update-available.sh` in order to update those files. _Note that this will override the current files in `src/available`!_

##### @codeblock

Core dependencies and functionality for `@codeblock`

- [Storybook](https://codeblockjs.github.io/codeblock)
- [Github](https://github.com/codeblockjs/codeblock)
- [npm](https://www.npmjs.com/org/codeblock)
