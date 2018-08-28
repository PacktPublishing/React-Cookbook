// Configuration
import { module, resolve, mode } from './configuration';

export default type => ({
  module: module(type),
  resolve,
  mode
});
