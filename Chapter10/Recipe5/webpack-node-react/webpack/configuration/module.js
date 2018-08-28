import ExtractTextPlugin from 'extract-text-webpack-plugin';

const isProduction = process.env.NODE_ENV === 'production';

const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: 'babel-loader'
  }
];

if (isProduction) {
  rules.push({
    test: /\.scss/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        'css-loader?minimize=true&modules=true&localIdentName=[name]_[local]_[hash:base64]',
        'sass-loader'
      ]
    })
  });
} else {
  rules.push({
    test: /\.scss$/, // .scss - .styl - .less
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]_[local]_[hash:base64]',
          sourceMap: true,
          minimize: true
        }
      },
      {
        loader: 'sass-loader' // sass-loader - stylus-loader - less-loader
      }
    ]
  });
}

export default {
  rules
};
