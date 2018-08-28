// Dependencies
import express from 'express';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import webpack from 'webpack';

// Utils
import { isMobile, isBot } from '@utils/device';

// Client Render
import clientRender from './render/clientRender';

// Webpack Configuration
import webpackConfig from '@webpack';

// Environment
const isProduction = process.env.NODE_ENV === 'production';

// Express Application
const app = express();

// Webpack Compiler
const compiler = webpack(webpackConfig);

// Public directory
app.use(express.static(path.join(__dirname, '../../public')));

// Device Detection
app.use((req, res, next) => {
  req.isMobile = isMobile(req.headers['user-agent']);
  req.isBot = isBot(req.headers['user-agent']);

  next();
});

// Webpack Middleware
if (!isProduction) {
  // Hot Module Replacement
  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));
} else {
  // GZip Compression just for Production
  app.get('*.js', (req, res, next) => {
    req.url = `${req.url}.gz`;
    res.set('Content-Encoding', 'gzip');
    next();
  });
}

// Client Side Rendering
app.use(clientRender());

if (isProduction) {
  try {
    const serverRender = require('../../dist/server.js').default; // eslint-disable-line

    app.use(serverRender());
  } catch (e) {
    throw e;
  }
}

// For Server Side Rendering on Development Mode
app.use(webpackHotServerMiddleware(compiler));

// Disabling x-powered-by
app.disable('x-powered-by');

// Listen Port...
app.listen(3000);
