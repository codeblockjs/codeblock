const path = require('path');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const babelLoader = {
  loader: require.resolve('babel-loader'),
  options: {
    presets: [['react-app', { flow: false, typescript: true }]]
  }
};

module.exports = ({ config }, env) => {
  config.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.NODE_ENV === 'production' ? 'static' : 'server',
      reportFilename: path.resolve(__dirname, '../docs/report.html')
    })
  );
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [babelLoader]
  });
  config.module.rules.push({
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
  });

  config.resolve.extensions.push('.ts', '.tsx');

  config.output.chunkFilename = '[name].[hash].bundle.js';

  return config;
};
