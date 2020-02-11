const path = require('path');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const babelLoader = {
  loader: require.resolve('babel-loader'),
  options: {
    presets: [['react-app', { flow: false, typescript: true }]]
  }
};

module.exports = ({ config }) => {
  config = merge(config, {
    devServer: {
      contentBase: [path.resolve(__dirname, 'public')]
    },
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
            path.resolve(__dirname, '../packages'),
            path.resolve(__dirname, '../node_modules/prismjs/themes')
          ]
        }
      ]
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode:
          process.env.NODE_ENV === 'production' ? 'static' : 'server',
        reportFilename: path.resolve(__dirname, '../.out/report.html')
      })
    ]
  });

  return config;
};
