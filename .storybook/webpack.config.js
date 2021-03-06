const path = require('path');
const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const portfinder = require('portfinder');
const { StatsWriterPlugin } = require('webpack-stats-plugin');

const babelLoader = {
  loader: require.resolve('babel-loader'),
  options: {
    presets: [['react-app', { flow: false, typescript: true }]]
  }
};

module.exports = async ({ config }) => {
  config = merge(config, {
    resolve: {
      extensions: ['.ts', '.tsx']
    },
    output: {
      chunkFilename: '[name].[hash].js'
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: [babelLoader]
        },

        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          include: [
            path.resolve(__dirname),
            path.resolve(__dirname, '../packages'),
            path.resolve(__dirname, '../node_modules/prismjs/themes'),
            path.resolve(__dirname, '../node_modules/@codeblock/themes/lib')
          ]
        }
      ]
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode:
          process.env.NODE_ENV === 'production' ? 'static' : 'server',
        analyzerPort: await portfinder.getPortPromise({
          port: 8888, // minimum port
          stopPort: 8999 // maximum port
        }),
        reportFilename: path.resolve(
          __dirname,
          '../storybook-static/report.html'
        )
      }),
      process.env.NODE_ENV === 'production' &&
        new StatsWriterPlugin({
          stats: {
            all: true,
            assets: true
          }
        })
    ].filter(Boolean)
  });

  return config;
};
