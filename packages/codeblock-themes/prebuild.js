#!/usr/bin/env node

// This script builds a scoped version of each prism theme.
// Creates a new file in lib/themes for each theme found in prismjs/themes. //
// In the output files, all selectors are prefixed with `.codeblock-theme-prism-${themeName}`.

const fs = require('fs');
const path = require('path');
const addPrefix = require('./src/utils/add-prefix');

const themeFiles = getPrismThemes();
const outputPath = path.resolve(__dirname, './lib');

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath);
}

for (file of themeFiles) {
  const css = fs.readFileSync(file, 'utf8');
  const name = path.basename(file, '.css').replace('prism-', '');
  const outputFile = path.resolve(outputPath, path.basename(file));
  const outputCss = addPrefix(css, name);
  fs.writeFileSync(outputFile, outputCss, 'utf-8');
}

function getPrismThemes() {
  const themesPath = path.resolve(require.resolve('prismjs'), '../themes');
  const themeFiles = fs
    .readdirSync(themesPath)
    .map(file => path.resolve(themesPath, file));

  return themeFiles;
}
