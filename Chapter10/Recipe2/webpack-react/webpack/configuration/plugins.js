import HtmlWebPackPlugin from 'html-webpack-plugin';

const plugins = [
  new HtmlWebPackPlugin({
    title: 'Codejobs',
    template: './src/index.html',
    filename: './index.html'
  })
];

export default plugins;
