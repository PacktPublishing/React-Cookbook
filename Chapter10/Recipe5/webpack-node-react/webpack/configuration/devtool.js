const isProduction = process.env.NODE_ENV === 'production';

export default !isProduction ? 'cheap-module-source-map' : 'eval';
