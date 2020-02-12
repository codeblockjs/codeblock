const fs = require('fs-extra');
const path = require('path');

const createPrismPublicResources = require('./prism-public');

createPrismPublicResources();

module.exports = {
  stories: ['../packages/**/(src|stories)/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-knobs/register',
    {
      name: '@storybook/preset-create-react-app',
      options: {
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, '../tsconfig.json')
        }
      }
    }
  ]
};
