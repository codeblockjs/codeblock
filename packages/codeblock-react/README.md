# @codeblock/react

A react component for easy syntax highlighting.  
Uses [Prism.js](https://github.com/PrismJS/prism) under the hood.

The goal of this component is to make it really easy to use Prism.js in react.

There are two types of common resources for prism: themes and languages (called "components" in prism).  
The `@codeblock` provides you a couple of ways of how to include and provide these resources, most importantly `static`, `async` and `http`.

- `@codeblock/react` - Defaults to `/static`
- `@codeblock/react/empty` - noop-loaders, doesn't include resources
- `@codeblock/react/static` - static imports, all resources included
- `@codeblock/react/async` - dynamic imports and code-splitting
- `@codeblock/react/http` - AJAX
- `@codeblock/react/cdn`

### loading and bundling

- `static` import at compiletime via `require()`
- `async` imports at runtime via `import()`
- `http` loads at runtime via [`autoloader`](https://prismjs.com/plugins/autoloader/)

#### static

The `static` variant requires all resources directly in the source code. This will seriously increase the size of your output bundle, and it will not create any additional output files.

_Note: `static` does not yet automatically load language dependencies (like `jsx` for `tsx`, or `clike` for `cpp`)_

#### async

The `async` variant uses code splitting and needs to be used with a bundler that supports dynamic imports, like webpack or rollup. it comes with predefined `webpackChunkNames`.

_Note: `async` does not yet automatically load language dependencies (like `jsx` for `tsx`, or `clike` for `cpp`)_

```jsx
function MyCode
```

## Installation

Install normally via yarn or npm:

```bash
# via yarn
yarn add @codeblock/react
# via npm
npm install --save @codeblock/react
```

## Usage

##### @codeblock

React components for `@codeblock`

- [Storybook](https://codeblockjs.github.io/codeblock)
- [Github](https://github.com/codeblockjs/codeblock)
- [npm](https://www.npmjs.com/org/codeblock)
