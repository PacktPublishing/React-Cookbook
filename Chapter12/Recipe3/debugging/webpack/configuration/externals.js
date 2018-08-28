// Dependencies
import nodeExternals from 'webpack-node-externals';

export default () => [
  nodeExternals({
    whitelist: [/^redux\/(store|modules)/]
  })
];
