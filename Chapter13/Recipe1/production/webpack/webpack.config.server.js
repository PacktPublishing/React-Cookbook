// Dependencies
import webpackMerge from 'webpack-merge';

// Webpack Configuration
import commonConfig from './webpack.config.common';

// Configuration
import {
  context,
  entry,
  externals,
  name,
  output,
  plugins,
  target
} from './configuration';

// Type of Configuration
const type = 'server';

export default webpackMerge(commonConfig(type), {
  context: context(type),
  entry: entry(type),
  externals: externals(type),
  name: name(type),
  output: output(type),
  plugins: plugins(type),
  target: target(type)
});
