const isDevelopment = process.env.NODE_ENV !== 'production';

export default isDevelopment ? 'cheap-module-source-map' : 'eval';
