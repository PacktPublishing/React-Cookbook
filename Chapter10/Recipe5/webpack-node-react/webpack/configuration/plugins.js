import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CompressionPlugin from 'compression-webpack-plugin';
import webpack from 'webpack';

const isProduction = process.env.NODE_ENV === 'production';

const plugins = [];

if (isProduction) {
  plugins.push(
    new ExtractTextPlugin({
      allChunks: true,
      filename: './css/[name].css'
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$/,
      threshold: 10240,
      minRatio: 0.8
    })
  );
} else {
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin(),
    new WebpackNotifierPlugin({
      title: 'CodeJobs'
    })
  );
}

export default plugins;
