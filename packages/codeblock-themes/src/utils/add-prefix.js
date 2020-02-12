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

  const prefixedCss = parser.getCSSForEditor(namespaced);
  return `${header}\n${prefixedCss}`;
};
