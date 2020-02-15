import addPrefix from './add-prefix';
import { HttpThemeLoader } from '@codeblock/core/lib/http';

/**
 * Loads a regular prism theme stylesheet and adds a theme-specific prefix to all selectors.
 *
 * The CSS file is loaded via AJAX, modified and inserted using a <style> tag.
 *
 * @param theme name of the theme
 * @param basePath location of prismjs, should contain `/themes` folder
 */
export const loadPrismTheme: HttpThemeLoader = async (
  theme,
  basePath,
  selectorPrefix?: string
): Promise<HTMLStyleElement> => {
  const id = `codeblock-theme-styles-${theme}`;
  let el: HTMLStyleElement = document.getElementById(id) as HTMLStyleElement;

  if (el) {
    // if element was found, we are either awaiting or already good
    return el;
  }
  // create and insert the element already (before the await part!!)
  el = document.createElement('style');
  el.id = id;
  el.type = 'text/css';
  document.head.appendChild(el);

  const fileName = theme === 'prism' ? 'prism.css' : `prism-${theme}.css`;

  const url = `${basePath}/themes/${fileName}`.replace(
    // clean up duplicate slashes
    /(https?:\/\/)|(\/){2,}/g,
    '$1$2'
  );

  // get the regular prismjs CSS sourcecode
  const source = await fetch(url).then(response => response.text());

  // finally use a prefixed version of the CSS
  el.innerHTML = addPrefix(source, theme, selectorPrefix);

  return el;
};

export default loadPrismTheme;
