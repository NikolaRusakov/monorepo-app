// Work around for https://github.com/angular/angular-cli/issues/7200

const path = require('path');
const webpack = require('webpack');

console.log(process.cwd());
console.log(__dirname);
module.exports = {
  mode: 'none',
  entry: {
    // This is our Express server for Dynamic universal
    server: './apps/fapp/server.ts'
  },
  externals: {
    './dist/apps/fapp/fapp-server/main': 'require("./apps/fapp/fapp-server/main")'
  },
  target: 'node',
  resolve: {
    mainFields: ['module', 'main'],
    extensions: ['.ts', '.js']
  },
  optimization: {
    minimize: false
  },
  output: {
    // Puts the output at the root of the dist folder
    libraryTarget: 'commonjs2',
    path: path.join(process.cwd(), '/dist/apps/fapp/'),
    filename: '[name].js'
  },
  module: {
    noParse: /polyfills-.*\.js/,
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' },
      {
        // Mark files inside `@angular/core` as using SystemJS style dynamic imports.
        // Removing this will cause deprecation warnings to appear.
        test: /(\\|\/)@angular(\\|\/)core(\\|\/).+\.js$/,
        parser: { system: true },
      },
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, 'src'), // location of your src
      {} // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?express(\\|\/)(.+)?/,
      path.join(__dirname, 'src'),
      {}
    )
  ]
};
