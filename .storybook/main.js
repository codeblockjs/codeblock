const path = require('path');

module.exports = {
  stories: ['../packages/**/src/**/*.stories.tsx'],
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
