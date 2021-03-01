const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const outPath = path.resolve(__dirname, 'dist');
module.exports = {
  devtool: 'source-map',
  entry: './src/index.ts',
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [outPath],
    }),
    new CopyPlugin({
      patterns: [
        { from: 'package.json', to: path.resolve(outPath, 'package.json') },
        { from: 'README.md', to: path.resolve(outPath, 'README.md') },
      ],
    }),
  ],
  output: {
    path: path.resolve(outPath, 'umd'),
    filename: 'index.tsx',
    library: '@makinarocks/ui',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        babelrc: true,
      },
    }],
  },
};
