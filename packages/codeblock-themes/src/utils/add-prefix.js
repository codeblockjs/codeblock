const { cssjs } = require('jotform-css.js');
module.exports = function addPrefix(
  source,
  themeName,
  prefix = '.codeblock-theme-'
) {
  const parser = new cssjs();
  const parsed = parser.parseCSS(source);

  const fullPrefix = `${prefix}${themeName}`;

  const header = `/* prefix "${fullPrefix}" added by @codeblock/themes */`;
  const namespaced = parser.applyNamespacing(parsed, fullPrefix);

  const prefixedCss = parser
    .getCSSForEditor(namespaced)
    // see https://github.com/jotform/css.js/issues/28
    .replace(/svg\+xml;\n    /, 'svg+xml;');

  return `${header}\n${prefixedCss}`;
};
