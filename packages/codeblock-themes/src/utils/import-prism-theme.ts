import { PrismTheme } from '@codeblock/core/lib/types';

import addPrefix from './add-prefix';

/**
 * Loads a regular prism theme stylesheet, then adds a prefix to all selectors
 * and finally inserts the prefixed CSS as a <style> tag.
 * @param name name of the theme
 * @param basePath location of prismjs resources
 */
export async function importPrismTheme(
  name: PrismTheme,
  basePath: string
): Promise<HTMLStyleElement> {
  const id = `codeblock-theme-styles-${name}`;
  let el: HTMLStyleElement = document.getElementById(id) as HTMLStyleElement;

  if (el) {
    return el;
  }

  el = document.createElement('style');
  el.id = id;
  el.type = 'text/css';
  document.head.appendChild(el);

  const fileName = name === 'prism' ? 'prism.css' : `prism-${name}.css`;

  const url = `${basePath}/themes/${fileName}`.replace(/\/\//g, '/');
  const source = await fetch(url).then(response => response.text());

  el.innerHTML = addPrefix(source, name);

  return el;
}
