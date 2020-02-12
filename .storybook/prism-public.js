const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

/**
 * Ensures that all prismjs themes and languages are available to storybook in /public/prismjs
 *
 * Copies the files from the installed node_modules/prismjs.
 */
module.exports = function createPrismPublicResources() {
  const prismPath = path.dirname(require.resolve('prismjs'));
  const publicPath = path.resolve(__dirname, 'public/prismjs');

  const prismThemesPath = path.resolve(prismPath, 'themes');
  const publicThemesPath = path.resolve(publicPath, 'themes');

  glob.sync('*.css', { cwd: prismThemesPath }).forEach(file => {
    const target = path.resolve(publicThemesPath, file);
    if (!fs.existsSync(target)) {
      fs.copySync(path.resolve(prismThemesPath, file), target);
    }
  });

  const prismLanguagesPath = path.resolve(prismPath, 'components');
  const publicLanguagesPath = path.resolve(publicPath, 'components');

  glob.sync('*.min.js', { cwd: prismLanguagesPath }).forEach(file => {
    const target = path.resolve(publicLanguagesPath, file);
    if (!fs.existsSync(target)) {
      fs.copySync(path.resolve(prismLanguagesPath, file), target);
    }
  });
};
