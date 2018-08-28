import HtmlWebPackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const isProduction = process.env.NODE_ENV === 'production';

const plugins = [
  new HtmlWebPackPlugin({
    title: 'Codejobs',
    template: './src/index.html',
    filename: './index.html'
  })
];

if (isProduction) {
  plugins.push(
    new ExtractTextPlugin({
      allChunks: true,
      filename: './css/[name].css'
    })
  );
}

export default plugins;
