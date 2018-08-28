// Dependencies
import webpackMerge from 'webpack-merge';

// Webpack Configuration
import commonConfig from './webpack.config.common';
import {
  context,
  devtool,
  entry,
  name,
  output,
  optimization,
  plugins,
  target
} from './configuration';

// Type of Configuration
const type = 'client';

export default webpackMerge(commonConfig(type), {
  context: context(type),
  devtool,
  entry: entry(type),
  name: name(type),
  output: output(type),
  optimization,
  plugins: plugins(type),
  target: target(type)
});
