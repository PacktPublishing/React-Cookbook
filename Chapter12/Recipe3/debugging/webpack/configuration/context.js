// Dependencies
import path from 'path';

export default type => type === 'server'
  ? path.resolve(__dirname, '../../src/server')
  : path.resolve(__dirname, '../../src/client');
